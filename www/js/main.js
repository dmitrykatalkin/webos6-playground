var currentIndex = 0;
var mediaUrls = [
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Heres_How_To_Know_EXACTLY_What_Your_Baby_Can_See.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how_to_create_more_family_harmony.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Diagnosis_of_Dry_EYe.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Conjunctivitis_Pink_Eye_-_Are_All_Forms_the_Same.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/food_label_smarts.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/CU_Studios_Courtney_3.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/busy_lifestyles_051816.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Natural_Ways_to_Prevent_Flu_Season.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/mistakes_people_make_when_buying_healthy_food.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Diabetes_and_Eye_Health-presented-by-Dr.Robert-Melendez.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Diet_Trends_062216.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/expressing_gratitude_linked_to_better_health.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Colby_5.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/top_5_foods_that_help_fight_inflammation.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5-new-superfoods-that-reduce-stress.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/get_moving_092518_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-to-hone-in-your-creative-spark.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/new_office-trend-for-a-healthier-you_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_Dilating_Eye_Drops.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_yoga-inspired-stretches-you-should-do-at-your-desk_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-to-reduce-your-dependency-on-eyeglasses-and-contacts.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/3_Hacks_for_Healthier_Pasta.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/What_Dog_Breed_Matches_Your_Lifestyle.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Macular_Degeneration_Symptoms.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Tinted_Lenses_-_What_Are_The_Real_Benefits.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/new-age-related-macular-degeneration-research.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Live_The_Good_Light_in_Style_with_Transitions_Lenses.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/exercise-benefits-for-the-mind.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Scratch_Resistant_Coatings_-_What_Are_The_Real_Benefits.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-to-health-hacks-roasted-carrot-soup.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/running_brain_123016.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/What_Your_Sleep_Habits_Reveal_About_Your_Health.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/6-ways-to-get-rid-of-under-eye-circles.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_healthy-breakfasts-from-around-the-world-you-should-eat-too_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/why_african_americans_are_living_longer_healthy_lives.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Cheese_Lovers_Rejoice.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/What_are_the_most_common_mistakes_made_regarding_eye_protection_from_the_sun.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/The_Perfect_Recipe_to_Monkey_Around.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_Mood-Boosting_Plants.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Astigmatism_-_What_Is_It_and_How_Does_It_Impact_Your_Vision.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/three-healthy-trends-to-follow.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ret_Anim_Macular_Pucker_Vitrectomy.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/what-causes-cataracts.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/171-04-causes-of-hand-pain.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/8_Tips_To_Help_Keep_A_Mediterranean_Diet_And_Lifestyle.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/3_Types_of_Eye_Makeup_That_Can_Damage_Your_Eyes.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/selecting-glasses-at-your-optometrist.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_Things_You_Need_To_Know_About_Multivitamins.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/pets_help_keep_our_heart_healthy.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-can-i-prevent-pink-eye.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/IW_New_Daily_Contact_Lenses_for_Astigmat_Market_Vision_Loss.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Macular_Degeneration_-_What_Is_It_and_Are_You_At_Risk.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/ratatouille_tartlets.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/HD_New_Ideas_for_Oatmeal.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_brain_foods_to__improve__focus_and_concentration.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Colby_4.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/ask_a-trainer-if-i-only-have-20-minutes-to-work-out-what-should-i-do_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Contact_Lenses_for_Keratoconus_-_What_Are_Your_Options.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/What_To_Expect_At_A_Comprehensive_Eye_Exam.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/How_Yoga_Improves_Your_Dating_Life.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Macular_Degeneration_Diagnosis.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/researchers_say_improved_sleep_quality_has_similar_rewards_to_winning_lottery.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/millennial_women_072616.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/whole_grains_and_heart_mortality.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/getting_quality_sleep.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/wearable_fitness_092116.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/170-04-fever-in-adults.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_Angiography.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/study_suggests_boosting_activity_levels_five_fold_to_reduce_health_risks.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Cauliflower_Breadsticks-The_Perfect_Appetizer.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Improving_Eyesight_-_Protecting_Your_Eyes_from_the_Environment.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/artificial-retinas-could-help-patients-facing-blindness.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/What_are_the_treatments_for_eye_damage_due_to_sun_exposure.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/crispy_zucchini_cakes.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/vegan_vietnamese_pho_soup_wild_dish.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/tips-for-looking-younger.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/healthy_recipes_swaps.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Workouts_To_Help_You_Sleep.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Age_Well_with_your_fork.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/167-01-the-411-on-seeds.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/171-01-new-diet-gadget.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/glaucoma_risk_011516.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/mens_health_questions_to_ask_the_doctor.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/body_inflammation_011717.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/cheesy-baked-sweet-chilli-chicken-risotto.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Glaucoma_-_What_Is_It_and_Are_You_At_Risk.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/autumn_chicken_smallest.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/exercise_benefits_for_the_mind_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Improving_Eyesight_-_See_Your_Doctor_Regularly.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/3_Yoga_Life_Principles_To_Live_By.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/only_2_7_percent_of_us_adults_are_leading_a_healthy_lifestyle.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_Detached_Pneumatic_Retinopexy.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/How_Much_Does_A_Healthy_Lifestyle_Increase_Life_Expectancy.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/BMC_Diagnosis_of_Dry_Eye.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/fitness-with-amanda-byram-healthy-start-to-the-day.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/AAO_1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/is_organic_better_for_you.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/why-your-eye-wont-stop-twitching.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Never_Microwave_These_Foods.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Sleeping_In_Contact_Lenses_-_Is_the_Risk_Worth_the_Reward.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Foods_to_Fight_Breast_Cancer.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/BMC_Understanding_Cataract_Surgery_Procedure.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Protect_Your_Eyes_from_the_Sun.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Vitamins__Supplements.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/your_health_061416.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/sleep_quality_111016.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ret_Anim_Dry_AMD.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Eyelid_Surgery_-_What_Are_the_Benefits_of_a_Blepharoplasty.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Toric_Contact_Lenses_for_Astigmatism_-_Are_They_Right_for_You.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/7_hair_myths.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/improving-your-mind-body-and-spirit.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Will_New_Eye_Pressure_Test_Reduce_Vision_Loss.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Diabetic-Retinopathy.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Progressive_Lenses_-_Are_They_a_Good_Option_for_You.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-to-make-southern-tomato-pie.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/chilli_lime_salmon_burgers_kaushal_beauty_madeleine_shaw_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/239_04-what-is-rem-sleep_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/9.6_Million_Americans_Are_Severely_Nearsighted.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_top_diet_tips_for_cancer_prevention.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/170-03-trying-new-outdoor-activities.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/super_food_super_powders.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/3_High_Tech_Home_Gardens.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/why-are-contact-lens-wearers-at-risk-for-eye-damage.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how_long_does_lasik_last.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Glaucoma_May_Find_Relief_In_Drop_Dispensing_Contacts.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how_often_should_you_get_your_cholesterol_tested.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/does_vitamin_c_really_fight_cold.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/the_best_diet.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/overall_health_072916.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/are-cellphones-bad-for-our-health.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-do-i-keep-pink-eye-from-spreading-within-my-home-to-family-members.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_Diabetic_Injection_Laser_Edema_1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/The_best_core_strength_exercises_to_do_at_home.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Is_it_possible_to_plan_a_healthy_lifestyle.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/new_york_cheesecake.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/the-healthiest-time-to-do-everything.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Single_Vision_Lenses_-_Are_They_a_Good_Option_for_You.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/CU_Studios_Courtney_1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Study_Shows_Exercise_Is_More_Beneficial_When_You_Believe_It_Is.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/feed_your_potential.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/soft_pretzels.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Eye_Sight_081916.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how_to_hone_in_your_creative_spark_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/dos_and_donts_of_healthy_eating.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Alphaeon_Credit.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_foods_to_fight_aging_skin.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-to-know-if-your-vision-was-damaged-by-viewing-the-eclipse.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/AAO_5.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/do-treatments-always-improve-vision.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/what_are_the_different_lasik_types.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Fitness_with_Amanda_Byram._Healthy_start_to_the_day.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/exercising_while_young_helps_brain_health_later.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/4_Healing_Herbs_In_Your_Kitchen.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/KM_Health_and_Wellness.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Blepharitis_-_What_Is_It_and_How_Does_It_Impact_Your_Eyes.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/treatments-for-age-related-macular-degeneration.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/kids__contact_lenses___4_expert_recommendations_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_What_Is_an_Optician.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Can_Exercise_Improve_Your_Love_Life.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Ultraviolet_UV_Coatings_-_How_Do_They_Protect_Your_Eyes.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Retinal_Detachment_-_What_Are_the_Signs_of_a_Detached_Retina.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/vision_problems_062416.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Exactly_How_To_Put_In_Contact_Lenses.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/TreatmentsForAgeRelatedMacularDegeneration.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Floaters-Flashes-and-Detached-Retina.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/4_Sneaky_Sources_of_Calcium.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_What_Is_an_Ophthalmologist.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Daily_Orbit_-_Bedtimes_and_Brainpower.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/zinc_up_your_immune_system.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/butternut_squash_loaf_cake_wild_dish.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/The_best_back_exercises_to_do_at_home_without_weights.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/work_lifestyle_072516.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/These_7_Attributes_Are_Indicators_Of_Intelligence.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_What_Is_an_Optometrist.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/what-can-i-do-to-prevent-cataracts.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Ultra_for_Astigmatism_Potential_AMD_Cure__Blind_Marathon_Runner.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/besides-seniors-who-else-is-more-likely-to-develop-cataracts.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/CU_Studios_Colby_1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/avoid_chronic_dry_eye.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/eat_your_way_to_better_health.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/217_05-home-garden-for-produce_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_foods_you_need_for_better_sleep.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/what-may-cause-nearsightedness.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-to-get-rid-of-bags-under-eyes-and-dark-circles.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/healthy_eating-what-is-clean-food_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_foods_with_Natural_Antibiotic_Power.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/The_power_of_positive_thinking.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Cooking_Swaps_with_Plant-based_Power.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/How_To_Improve_Your_Creative_Brain.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-to-health-hacks-sweet-potato-sunshine-salad.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_BRVO_Medication_Injections.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/smartphones_weight_122916.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Fitness_As_A_Lifestyle.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/166-01-best-veggies-for-health.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/these_exercises-burn-the-most-calories-according-to-science_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/eating_breakfast_helps_keep_heart_healthy.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/shrimp_mushrooms_asparagus_stirfry.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/caffeine-and-mediterranean-diet-may-help-your-eyes.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/HD_5_minute_destress_ideas.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/hd_5_minute_destress_ideas_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Age-Related-Macular-Degeneration-AMD.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Simple_Ways_To_Beat_The_Blues.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Introwellness_1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/AAO_6.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/a_trainers-4-fitness-no-nos_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/173-03-overcoming-exercise-myths.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Need_Motivation_To_Exercise_Use_These_Tips.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-should-i-respond-if-my-child-has-an-eye-injury.csv.crdownload.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Katy_Thomas_Thomas_-_Alphaeon_12-30-16_1920x1080.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-to-bake-a-wholemeal-loaf.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_Detached_Vitrectomy_Scleral_Buckle.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Who_is_most_at_risk_for_eye_damage_due_to_sun_exposure.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Colby_1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/eat_healthy_on_a__budget_wild_dish_meatballs.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/everwell_food_safety_challenge.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/What_are_the_most_common_signs_and_symptoms_of_sun_damage_to_the_eyes.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_Torn_Cryopexy.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/what-are-the-risks-involved-with-cataract-surgery.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/causes-health-risks-of-vitamin-d-deficiency.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Improving_Eyesight_-_Fighting_Fatigue.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/iw_cataract_surgery_heres_what_to_expect__equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/nikolai_vanyo___screen_time_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/learning_memory_082615.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Control_Your_Portions_with_These_Gadgets.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Bifocal_Lenses_-_Are_They_a_Good_Option_for_You.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/best_superfoods-for-people-over-40_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/ereaders_122314.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/glumi-cells-discovered.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Macular_Degeneration_-_Risk_Factors_and_Prevention.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/just_5_percent_weight_loss_can_improve_health_significantly_in_obese_people.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/How_do_I_make_a_plan_that_fits_my_lifestyle.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/three_healthy_trends_to_follow_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/what-are-the-symptoms-of-cataracts.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/memory_gender_111116.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Introwellness_7.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/vegan_energy_loaf_wild_dish.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-reducing-stress-improves-your-health.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/what-are-the-symptoms-of-pink-eye.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/4_Ways_to_Make_Sweets_Healthier.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Healthy_5_Ingredient_Granola_Bar_Recipe.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Healthi_Nation_1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-are-cataracts-treated.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/4_Supplements_For_Memory_And_Brain_Power.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/4_Ways_to_a_Healthy_Heart.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/how-supercharged-foods-changed-my-life.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/smoking-food-with-matt-lambert-of-the-musket-room.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/166-05-improve-focus-and-concentration.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/avoid_these-common-exercise-mistakes_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/How_to_Increase_Your_Exercise_Motivation.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/6_tips_for_nonbreakfast_eaters.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Laser_Pointers_Can_Cause_Permanent_Eye_Damage_In_Children.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Improving_Eyesight_-_Eating_the_Right_Foods.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/understanding-cataracts.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/lasik-surgery-alternatives.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/exercise_within_reach.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/blue_light-from-phones-could-be-harming-your-vision_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/215_01-new-omega3-source_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/eat_whole_grains_to_live_a_longer_healthier_life.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/170-01-calcium-foods-for-lactose-intolerance.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/6_Food_Trends_That_Will_Be_Huge_This_Fall.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/AAO_7.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/vigorous_physical_activity.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/fitness-with-amanda-byram-superfoods.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/CU_Studios_3.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/the-lasik-procedure.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Best_Daily_Detox_Tips.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/contact_lens_032316.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Doctors_use_growth_factor_to_protect_the_retina_in_diabetics.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/beer-and-orange-chicken-asian-salad.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Health_and_Wellness_1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/fitness_routine-for-a-strong-healthy-back_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/HD_Health_and_Wellness.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_healthy-carbs-we-love_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/fatty-fish-may-help-diabetics-with-eye-risk.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/5_Easy_Steps_To_Controlling_Anxiety.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/The_5_Things_To_Do_Every_Morning_To_Stay_Healthy.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/hd_new_ideas_for_oatmeal_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/inside_the_good_housekeeping_health_lab.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Photochromic_Lenses_-_What_Are_The_Real_Benefits.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/scientists-explore-link-between-stress-and-macular-degeneration.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Introwellness_2.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_Diabetic_PDR_Laser.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Monovision_Contact_Lenses_for_Presbyopia_-_Are_They_Right_for_You.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Anti-Reflective_Coatings_-_What_Are_The_Real_Benefits.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/best-worst-fish-for-your-health.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/hugh-acheson-makes-ramp-jam.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Hyperopia_Farsightedness_-_How_Does_It_Impact_Your_Vision.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Moringa-_The_Next_Superfood.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/CU_Studios_Courtney_2.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Health_and_Wellness_2.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Dry_Eye_Disease_-_What_Is_It_and_Why_Does_It_Occur.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/brain-diseases-manifest-in-retina-of-the-eye.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/amandabyramhempseeds.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/roasted_squash_pomegranate_salad_wild_dish.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/food_choices_040616.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/IW_-_Cataract_Surgery_-_Heres_What_To_Expect.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Retina_Wet_AMD_Medication_Injection.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/169-03-reaching-goals-with-mindfulness.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Introwellness_3.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/school_eye_exam_080114.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/The_Best_Benefits_of_Eating_Pumpkin.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Treatment_for_Dry_Eye2.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/success-rates-and-complications-of-lasik.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Transitions_Lenses_-_A_Testimonial_From_a_1st_Time_Wearer.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/risk-factors-prevention-for-age-related-macular-degeneration.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Carrots_and_Healthy_Eye_Sight.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/iw___new_daily_contact_lenses_for_astigmatism_strawberries_equalized.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/what-are-the-treatments-for-pink-eye.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Toric_Contact_Lenses_for_Astigmatism.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/Ryan_Corte_-_Diabetic_Retinopathy_-_What_Is_It_and_Are_You_At_Risk.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/content/videos/diet_trends_062216.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/ads/videos/lipiflow1.mp4",
    "https://cu-qa.s3.amazonaws.com/tv/ads/videos/Understanding_Astigmatism_Correcting_Astigmatism__Cataracts.mp4",
    "https://cu-qa.s3.amazonaws.com/doctors/doc-3.jpg",
    "https://cu-qa.s3.amazonaws.com/extra_staffs/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg"
];

var external = 'usb:1';
var bufferPath = 'file://internal/buffer';
var mediaPath = 'file://' + external + '/media';

mediaUrls.sort(function sortFn() {
    return Math.round(Math.random()) ? 1 : -1;
});

///

console.info('Timeout');


setTimeout(start, 6000);

///

function start() {
    console.info('Start');
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