document.addEventListener('DOMContentLoaded', (event) => {
    const openPopupBtn = document.getElementById('my-account-btn');
    const closePopupButton= document.getElementById('closePopupButton');
    const signIn= document.getElementById('signIn');

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
document.addEventListener('DOMContentLoaded', (event) => {
    const openPopupBtn = document.getElementById('c1');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('popup');

    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    
    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
function calculateBMI() {
   
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid values for weight and height';
        return;
    }

    
    const bmi = weight / (height * height);

    let resultText = `Your BMI is ${bmi.toFixed(2)},`;
    if (bmi < 18.5) {
        resultText += 'You are underweight.';
    } else if (bmi < 24.9) {
        resultText += 'You have a normal weight.';
    } else if (bmi < 29.9) {
        resultText += 'You are overweight.';
    } else {
        resultText += 'You are obese.';
    }

    document.getElementById('result').textContent = resultText;
}
document.getElementById("c2").onclick =function DPbutton() {
    location.href = "DietPlans.html";
}
document.getElementById("c3").onclick =function WPbutton() {
    location.href = "WorkOut.html";
}