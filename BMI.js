
function calculateBMI() {
    const category = document.getElementById('category').value;
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height);
    const resultDiv = document.getElementById('result');
    if (!isNaN(bmi)) {
        resultDiv.innerHTML = `<p>Your BMI is ${bmi.toFixed(2)}</p>` + getBMIStatus(bmi, category);
    } else {
        resultDiv.innerHTML = '<p>Please enter valid height and weight values.</p>';
    }
}

function getBMIStatus(bmi, category) {
    let status = '';
    if (category === 'adult') {
        if (bmi < 16.0) {
            status = '<p>Severely Underweight</p>';
        } else if (bmi >= 16.0 && bmi <= 18.4) {
            status = '<p>Underweight</p>';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = '<p>Normal</p>';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            status = '<p>Overweight</p>';
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            status = '<p>Moderately Obese</p>';
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            status = '<p>Severely Obese</p>';
        } else if (bmi >= 40.0) {
            status = '<p>Morbidly Obese</p>';
        }
    } else if (category === 'kid') {
        if (bmi < 14.0) {
            status = '<p>Severely Underweight</p>';
        } else if (bmi >= 14.0 && bmi <= 16.9) {
            status = '<p>Underweight</p>';
        } else if (bmi >= 17.0 && bmi <= 20.9) {
            status = '<p>Normal</p>';
        } else if (bmi >= 21.0 && bmi <= 24.9) {
            status = '<p>Overweight</p>';
        } else if (bmi >= 25.0) {
            status = '<p>Obese</p>';
        }

    } else if (category === "female") {
        if (bmi < 15.0) {
            status = '<p>Severely Underweight</p>';
        } else if (bmi >= 15.0 && bmi <= 17.4) {
            status = '<p>Underweight</p>';
        } else if (bmi >= 19.1 && bmi <= 23.0) {
            status = '<p>Normal</p>';
        } else if (bmi >= 24.0 && bmi <= 26.9) {
            status = '<p>Overweight</p>';
        } else if (bmi >= 26.0 && bmi <= 34.9) {
            status = '<p>Moderately Obese</p>';
        } else if (bmi >= 34.0 && bmi <= 38.9) {
            status = '<p>Severely Obese</p>';
        } else if (bmi >= 39.0) {
            status = '<p>Morbidly Obese</p>';
        }

    } else if (category === "male") {
        
            if (bmi < 16.0) {
                status = '<p>Severely Underweight</p>';
            } else if (bmi >= 16.0 && bmi <= 18.4) {
                status = '<p>Underweight</p>';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                status = '<p>Normal</p>';
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                status = '<p>Overweight</p>';
            } else if (bmi >= 30.0 && bmi <= 34.9) {
                status = '<p>Moderately Obese</p>';
            } else if (bmi >= 35.0 && bmi <= 39.9) {
                status = '<p>Severely Obese</p>';
            } else if (bmi >= 40.0) {
                status = '<p>Morbidly Obese</p>';
            }







    }
    return status;
}
