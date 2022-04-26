var currentIndex = 0;
var mediaUrls = [
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Heres_How_To_Know_EXACTLY_What_Your_Baby_Can_See.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how_to_create_more_family_harmony.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Diagnosis_of_Dry_EYe.mp4",
];

var external = 'usb:1';
var bufferPath = 'file://internal/buffer';
var mediaPath = 'file://' + external + '/media';

window.runScapCommand = runScapCommand;

mediaUrls.sort(function sortFn() {
    return Math.round(Math.random()) ? 1 : -1;
});

///

console.info('Timeout');
setTimeout(start, 6000);

///

function start() {
    console.info('Start');
    runScapCommand('Storage.getStorageInfo').then(info => {
        var storageInfoEl = document.getElementById('storage-info');
        storageInfoEl.innerHTML = JSON.stringify(info, null, 2);
    });

    cleanMedia().then(copyNextFile);
}

function cleanMedia() {
    return Q.allSettled([
        runScapCommand('Storage.removeFile', { file: mediaPath, recursive: true }),
        runScapCommand('Storage.removeFile', { file: bufferPath, recursive: true }),
        runScapCommand('Storage.mkdir', { path: mediaPath }),
        runScapCommand('Storage.mkdir', { path: bufferPath })
    ]);

    ///

    function onError(err){
        console.error(err);
    }
}

function copyNextFile() {
    var url = mediaUrls[currentIndex++];

    if (currentIndex >= mediaUrls.length) {
        console.info('Done');
    }

    if (!url) {
        return;
    }

    copyFile(url).then(onSuccess).catch(onError);

    ///

    function onSuccess() {
        copyNextFile();
    }

    function onError(e) {
        if (e.errorCode === 'DEVICE_ERROR') {
            console.warn(":(((");
            return setTimeout(reboot, 60000);
        }
    }
}

function copyFile(source) {
    var match = source.match(/[^/]+$/) || [];
    var fileName = match[0] ? match[0].replace(/[\-_\s]/g, '_') : 'Unknown.mp4';
    var destination = bufferPath + '/' + fileName;
    var options = {
        source: source,
        destination: destination
    };

    console.log('Copy File Start:', source, destination);
    return runScapCommand('Storage.copyFile', options)
        .then(onSuccess)
        .catch(onError);

    ///

    function onSuccess() {
        console.log('Copy Success:', source);
        return moveFile(fileName);

    }

    function onError(e) {
        console.error('Copy Error:', e);

        if (e.errorCode === 'IO_ERROR') {
            return timeout(5000).then(function() {
                return copyFile(source);
            });
        }

        throw e;
    }
}

function moveFile(fileName) {
    var source = bufferPath + '/' + fileName;
    var destination = mediaPath + '/' + fileName;
    var options = {
        source: source,
        destination: destination
    };

    return runScapCommand('Storage.exists', { path: destination })
        .then(function(res) {
            if (!res.exists) return null;

            console.log('Remove Old File', destination);
            return runScapCommand('Storage.removeFile', { file: destination });
        })
        .then(function () {
            console.log('Move File Start:', source, destination);
            return runScapCommand('Storage.copyFile', options)
                .then(function() {
                    console.log('Remove Source File Start:', source, destination);
                    return runScapCommand('Storage.removeFile', { file: source });
                });
        })
        .then(onSuccess)
        .catch(onError);

    ///

    function onSuccess() {
        console.log('Move Success:', fileName);
        return destination;
    }

    function onError(e) {
        console.error('Move Error:', e);
        return null;
    }
}

function reboot() {
    console.info("Reboot");
    runScapCommand('Power.executePowerCommand', {
        powerCommand: Power.PowerCommand.REBOOT
    });
}

///

function runScapCommand(path, options) {
    return Q.Promise(function (resolve, reject) {
        var parts = path.split('.');
        var serviceName = parts[0];
        var part = parts[1];
        var methodName = parts[2];

        if (parts.length === 2) {
            part = null;
            methodName = parts[1];
        }

        try {
            var service = new window[serviceName]();
            var parent = part ? service[part] : service;
            var method = parent[methodName];

            if (!method) throw 'Scap command ' + path + ' isn\'t found';

            method.call(service, resolve, onFail, options);
        } catch (e) {
            onFail(e);
        }

        function onFail(error) {
            reject(error);
            console.error('runScapCommand', path, error);
        }
    });
}


function timeout(ms) {
    return Q.Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}