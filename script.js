
const inputFields = document.querySelectorAll('input[type="text"]');

inputFields.forEach((input) => {
  const errorIcon = input.nextElementSibling;
  const errorTooltip = errorIcon.nextElementSibling;
  

  input.addEventListener("input", function () {
  
    if (isNaN(this.value) || this.value==='') {
    
      errorIcon.style.display = "inline-block";
    } else {
  
      errorIcon.style.display = "none";
      errorTooltip.style.display = "none";
    }
  });

  errorIcon.addEventListener("mouseenter", function () {

    errorTooltip.style.display = "block";
  });

  errorIcon.addEventListener("mouseleave", function () {

    errorTooltip.style.display = "none";
  });
});

const ageSelect = document.getElementById('age'); 
function showErrorIcon() {
  const errorIcon = document.querySelector('.age-error-icon');
  errorIcon.style.display = "inline-block";
}
function hideErrorIcon() {
  const errorIcon = document.querySelector('.age-error-icon');
  errorIcon.style.display = "none";
}
function showAgeErrorMessage() {
  const errorMessage = document.querySelector('.age-error-message');
  errorMessage.style.display = "block";
}

function hideAgeErrorMessage() {
  const errorMessage = document.querySelector('.age-error-message');
  errorMessage.style.display = "none";
}

ageSelect.addEventListener('change', function() {
  if (this.value === '') {
    showErrorIcon();
    showAgeErrorMessage();
  } else {
    hideErrorIcon();
    hideAgeErrorMessage();
  }
});

document.querySelector('.age-error-icon').addEventListener('mouseenter', function() {
  showAgeErrorMessage();
});
document.querySelector('.age-error-icon').addEventListener('mouseleave', function() {
  hideAgeErrorMessage();
});



function validateForm() {
    const age = document.getElementById("age").value;
  
    let valid = true;
  
    if (!age) {
      showErrorIcon("age", "Age is mandatory");
      valid = false;
    }
  
    const numericInputs = ["income", "extraIncome", "deductions"];
    numericInputs.forEach(inputId => {
      const value = parseFloat(document.getElementById(inputId).value);
      if (isNaN(value)) {
        valid = false;
        showErrorIcon(inputId, "Please enter a valid number");
      }
    });
  
    return valid;
  }

function calculateTax(age, income, extraIncome, deductions) {
  let taxableIncome = income + extraIncome - deductions;
  let taxRate;
  if (taxableIncome <= 8) {
    return 0;
  } else {
    if (age === "<40") {
      taxRate = 0.3;
    } else if (age === "40-60") {
      taxRate = 0.4;
    } else {
      taxRate = 0.1;
    }
    let x = (taxableIncome - 8) * taxRate;
    return x;
  }
}
function displayModal(tax) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  if(tax===0) {
    modalContent.textContent = 'No tax';
    modal.style.display = "block";
  }
  else {
    modalContent.textContent = `Your Overall income will be ${tax.toFixed(2)} Lakhs after tax deductions`;
    modal.style.display = "block";
  }
}

document.getElementById("submitBtn").addEventListener("click", function () {
  if (validateForm()) {
    const age = document.getElementById("age").value;
    const income = parseFloat(document.getElementById("income").value);
    const extraIncome = parseFloat(
      document.getElementById("extraIncome").value
    );
    const deductions = parseFloat(document.getElementById("deductions").value);
    const tax = calculateTax(age, income, extraIncome, deductions);
    displayModal(tax);
  }
});
document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

function displayInfoBox(infoBoxId) {
  const infoBox = document.getElementById(infoBoxId);
  infoBox.style.display = "block";
}

function hideInfoBoxes() {
  const infoBoxes = document.querySelectorAll(".info-box");
  infoBoxes.forEach((infoBox) => {
    infoBox.style.display = "none";
  });
}
const infoIcons = document.querySelectorAll(".info-icon");
infoIcons.forEach((icon) => {
  icon.addEventListener("mouseover", function () {
    const infoBoxId = `${icon.id}Box`;
    hideInfoBoxes();
    displayInfoBox(infoBoxId);
  });

  icon.addEventListener("mouseout", function () {
    const infoBoxId = `${icon.id}Box`;
    const infoBox = document.getElementById(infoBoxId);
    infoBox.style.display = "none";
  });
});
