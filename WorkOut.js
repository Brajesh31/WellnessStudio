document.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelectorAll('.item');
    const desired = document.querySelector('#des');

    item.forEach(item => {
        item.addEventListener('click', () => {
            desired.innerHTML = `${item.textContent}`;
        });
    });

    const k1 = document.getElementById('k1');
    const k2 = document.getElementById('k2');
    const k3 = document.getElementById('k3');
    const k4 = document.getElementById('k4');
    const k5 = document.getElementById('k5');
    const k6 = document.getElementById('k6');
    const k7 = document.getElementById('k7');
    const k8 = document.getElementById('k8');

    const para1 = document.getElementById('para1');
    const para2 = document.getElementById('para2');

    k1.addEventListener('click', () => {
        para1.textContent = `A zero-fat workout, commonly referred to as a fat-burning or cardio workout, is designed to maximize calorie expenditure and enhance cardiovascular health without necessarily building bulky muscles. These workouts typically include high-intensity activities such as running, cycling, swimming, and high-intensity interval training (HIIT). These exercises are efficient in burning calories because they elevate the heart rate and keep it elevated for a sustained period, leading to increased metabolic rate even after the workout is finished. Additionally, incorporating activities like jumping rope, aerobic classes, and dancing can provide a fun yet effective way to achieve a leaner body composition. The primary goal of these workouts is to create a calorie deficit, which is essential for fat loss.`;
    });

    k1.addEventListener('click',()=>{
        para2.textContent='Incorporating a zero-fat workout routine into one’s lifestyle offers numerous health benefits beyond just weight management. Regular engagement in these activities improves cardiovascular endurance, strengthens the heart, and enhances lung capacity. It also contributes to better mental health by releasing endorphins, which are natural mood lifters. Consistency is key, and it’s advisable to combine these workouts with a balanced diet rich in nutrients to support overall health and recovery. Furthermore, for optimal results, it is beneficial to include strength training exercises a few times a week to maintain muscle mass, which further aids in boosting metabolism. Overall, a well-rounded approach that includes zero-fat workouts can lead to improved fitness levels, a healthier heart, and a more toned physique';
    });
  
    k2.addEventListener('click', () => {
        para1.textContent = `A pro workout, often associated with advanced fitness enthusiasts and athletes, is an intense exercise regimen designed to push the limits of physical performance. These workouts typically incorporate a combination of high-intensity interval training (HIIT), advanced strength training techniques, and sport-specific exercises to maximize strength, power, endurance, and agility. Pro workouts are meticulously planned to target all major muscle groups, ensuring balanced development and preventing injuries. They often involve heavy weights, complex compound movements like deadlifts, squats, and bench presses, and plyometric exercises to enhance explosive power. Additionally, these workouts may include functional training to improve overall athletic performance and reduce the risk of injuries by mimicking real-life movements.`
    });   

    k2.addEventListener('click',()=>{
        para2.textContent=`Engaging in pro workouts demands a high level of commitment, discipline, and knowledge about proper form and recovery strategies. Nutrition plays a crucial role, with a focus on high-quality protein intake for muscle repair and growth, along with adequate carbohydrates and fats to fuel intense training sessions. Recovery is equally important, involving not only rest days but also active recovery techniques such as stretching, foam rolling, and sometimes even professional massages. Supplementation with vitamins, minerals, and performance enhancers like creatine or branched-chain amino acids (BCAAs) is often integrated into a pro workout plan to support optimal performance and recovery. Overall, a pro workout regimen is designed to achieve peak physical conditioning and performance, requiring a strategic and holistic approach to fitness.`;
    });

    k3.addEventListener('click', () => {
        para1.textContent = `
        Endurance building workouts are designed to enhance an individual's ability to sustain prolonged physical activity, improving both cardiovascular and muscular endurance. These workouts typically involve activities that elevate the heart rate over an extended period, such as running, cycling, swimming, and rowing. Incorporating a mix of steady-state cardio and interval training, endurance workouts challenge the body's aerobic and anaerobic systems, promoting efficient oxygen use and energy production. Gradual progression in workout intensity and duration is key to building endurance, allowing the body to adapt and improve its capacity to perform longer and more challenging activities without fatigue.`
    });   

    k3.addEventListener('click',()=>{
        para2.textContent=`Muscular endurance is equally important in these routines, focusing on the ability of muscles to perform repetitive actions over time. This can be achieved through high-repetition resistance training exercises, such as bodyweight movements (push-ups, squats, lunges) or light weightlifting with more repetitions. Incorporating compound exercises that engage multiple muscle groups helps to build overall stamina and functional fitness. Adequate recovery, hydration, and nutrition play vital roles in endurance training, as they help repair muscles, replenish energy stores, and prevent overtraining. With consistent and well-structured endurance-building workouts, individuals can significantly enhance their overall fitness, stamina, and resilience, making everyday activities and sports participation more enjoyable and less exhausting.`;
    });

    k4.addEventListener('click', () => {
        para1.textContent = `Workouts tailored for individuals with diabetes are crucial for managing blood glucose levels and improving overall health. These exercise routines typically focus on a combination of aerobic activities, resistance training, and flexibility exercises. Aerobic exercises, such as walking, swimming, cycling, and dancing, help to improve cardiovascular health and increase insulin sensitivity, enabling more effective blood sugar control. Incorporating moderate-intensity aerobic exercise for at least 150 minutes per week, as recommended by health guidelines, can significantly reduce the risk of cardiovascular diseases, which are common complications of diabetes.`
    });   

    k4.addEventListener('click',()=>{
        para2.textContent=`Resistance training, involving weightlifting or bodyweight exercises like squats and push-ups, plays a critical role in maintaining muscle mass and strength, which can be particularly beneficial for those with type 2 diabetes. Building muscle mass helps the body utilize glucose more effectively, thereby reducing blood sugar levels. Additionally, flexibility and balance exercises such as yoga or tai chi can improve joint mobility, reduce stress, and enhance overall well-being. It's important for individuals with diabetes to monitor their blood sugar levels before and after exercise, stay hydrated, and consult healthcare professionals to tailor a workout plan that meets their specific needs and ensures safety. With a balanced and consistent exercise regimen, people with diabetes can manage their condition more effectively and enjoy a higher quality of life.`;
    }); 
    
    k5.addEventListener('click', () => {
        para1.textContent = `Workouts for individuals who are overweight are designed to promote weight loss, improve cardiovascular health, and enhance overall fitness levels. These exercise routines typically emphasize a combination of cardiovascular exercises, strength training, and flexibility activities. Cardiovascular exercises, such as walking, jogging, swimming, and cycling, are particularly effective for burning calories and improving heart health. Engaging in moderate to vigorous aerobic activities for at least 150 minutes per week can help create a calorie deficit, leading to weight loss. Additionally, these exercises enhance stamina and energy levels, making daily activities easier and more enjoyable.`
    });   

    k5.addEventListener('click',()=>{
        para2.textContent=`Strength training is another critical component of a workout regimen for those who are overweight. Lifting weights or performing bodyweight exercises like squats, lunges, and push-ups helps build muscle mass, which in turn boosts metabolism and increases the number of calories burned at rest. Muscle tissue burns more calories than fat tissue, so increasing muscle mass can significantly aid in weight management. Furthermore, incorporating flexibility and balance exercises such as yoga or pilates can improve joint mobility, reduce the risk of injuries, and alleviate stress. A well-rounded workout plan that includes a variety of exercises can help overweight individuals achieve sustainable weight loss, improve their overall health, and enhance their quality of life.`;
    });

    k6.addEventListener('click', () => {
        para1.textContent = `Workouts designed for individuals with joint pain focus on low-impact exercises that enhance mobility, strengthen muscles, and reduce discomfort without exacerbating the pain. One of the most effective forms of exercise for joint pain is swimming or water aerobics. The buoyancy of the water supports the body, reducing the stress on joints while allowing for a full range of motion. This environment is particularly beneficial for those with arthritis or chronic joint pain, as it provides resistance for muscle strengthening without the high impact of traditional weight-bearing exercises. Additionally, activities such as walking, cycling, and using an elliptical machine offer cardiovascular benefits without placing undue stress on the joints.`
    });   

    k6.addEventListener('click',()=>{
        para2.textContent=`Strength training is also crucial in managing joint pain. Building muscle around affected joints can provide better support and stability, which helps alleviate pain and prevent further injury. Gentle weightlifting or resistance band exercises focusing on major muscle groups should be done under proper guidance to ensure correct form and prevent strain. Flexibility exercises, such as yoga and stretching routines, can improve joint function and reduce stiffness. Incorporating these exercises into a regular fitness regimen not only helps in managing pain but also enhances overall joint health and functionality. It is essential for individuals with joint pain to consult healthcare professionals before starting any new workout routine to tailor exercises to their specific needs and limitations.`;
    });
    
    k7.addEventListener('click', () => {
        para1.textContent = `Workouts during pregnancy are highly beneficial for both the mother and the developing baby. Engaging in regular physical activity can help maintain a healthy weight, improve mood, boost energy levels, and promote better sleep. Low-impact exercises such as walking, swimming, and prenatal yoga are particularly recommended as they are gentle on the joints while providing cardiovascular benefits. These activities help strengthen the muscles, enhance flexibility, and improve overall circulation without putting too much strain on the body. Additionally, prenatal yoga and Pilates focus on core strength, which can alleviate common pregnancy-related issues like back pain and improve posture.`
    });   

    k7.addEventListener('click',()=>{
        para2.textContent=`Strength training, when done with appropriate modifications, can also be a part of a pregnancy workout routine. Light to moderate weightlifting under professional guidance helps maintain muscle tone and prepares the body for the physical demands of labor and delivery. It is crucial for pregnant women to listen to their bodies and avoid high-impact or contact sports that could lead to falls or abdominal trauma. Always consult with a healthcare provider before starting or continuing any exercise regimen during pregnancy to ensure that the chosen activities are safe for both mother and baby. Proper hydration, avoiding overheating, and wearing comfortable, supportive clothing are also important considerations for exercising during this period.`;
    });

    k8.addEventListener('click', () => {
        para1.textContent = `Workouts can be a powerful tool in managing and alleviating stress. Physical activity triggers the release of endorphins, which are natural mood lifters, and can help improve overall well-being. Engaging in regular exercise can reduce levels of the body's stress hormones, such as adrenaline and cortisol, while simultaneously stimulating the production of endorphins. Activities like aerobic exercises, including running, swimming, cycling, or even brisk walking, are particularly effective. These exercises increase heart rate, improve cardiovascular health, and provide a constructive way to channel energy and tension. Moreover, the rhythmic nature of these activities can serve as a form of moving meditation, allowing the mind to relax and focus away from stressors.`
    });   

    k8.addEventListener('click',()=>{
        para2.textContent=`In addition to aerobic exercises, mind-body practices such as yoga and tai chi are highly beneficial for stress relief. These workouts combine physical movement with breath control and meditation, promoting a state of relaxation and mindfulness. Yoga, for instance, involves various poses and stretches that enhance flexibility, strength, and balance, while also encouraging deep breathing and mental clarity. Tai chi, with its slow and deliberate movements, helps reduce stress by fostering a sense of peace and centeredness. Both practices can improve sleep, reduce symptoms of anxiety and depression, and increase overall resilience to stress. Incorporating these types of exercises into a daily routine can create a buffer against the pressures of daily life, leading to a healthier, more balanced lifestyle.`;
    });

    const openPopupBtn = document.getElementById('my-account-btn');
    const closePopupButton = document.getElementById('closePopupButton');
    const signIn = document.getElementById('signIn');

    openPopupBtn.addEventListener('click', () => {
        signIn.style.display = 'block';
    });

    closePopupButton.addEventListener('click', () => {
        signIn.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === signIn) {
            signIn.style.display = 'none';
        }
    });
});