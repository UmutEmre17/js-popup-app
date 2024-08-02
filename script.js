document.addEventListener("DOMContentLoaded", function() {
  var openPopupBtn = document.getElementById('openPopup');
  var closeFirstPopupBtn = document.getElementById('closeFirstPopup');
  var revealCodeBtn = document.getElementById('revealCode');
  var closeSecondPopupBtn = document.getElementById('closeSecondPopup');
  const copyBtn = document.querySelector('.insCopy-btn');
  const couponCode = document.querySelector('.coupon-code');
  var firstPopup = document.getElementById('first-insPopup');
  var secondPopup = document.getElementById('second-insPopup');
  const ErrorMessage = document.querySelector('.insError-message');
  const phoneNumberInput = document.getElementById('phoneNumber')

  // Hide both popups initially
  firstPopup.style.display = 'none';
  secondPopup.style.display = 'none';


  copyBtn.addEventListener('click', () => {
    // Get the text content of the coupon code element
    const code = couponCode.textContent;
  
    // Use the navigator.clipboard API to copy the text to the clipboard
    navigator.clipboard.writeText(code)
     .then(() => {
        console.log('Copied to clipboard!');
      })
     .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  });

  openPopupBtn.addEventListener('click', function() {
    firstPopup.style.display = 'flex';
    resetErrorMessage();
  });

  closeFirstPopupBtn.addEventListener('click', function() {
    firstPopup.style.display = 'none';
    resetErrorMessage();
  });

  revealCodeBtn.addEventListener('click', function() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var countryCode = document.getElementById('countryCode').value;
    
    // Regular expression to validate phone number format (example for US)
    var phoneRegex = /^\+\d{1,3}\d{10}$/;

    if (phoneNumber && phoneRegex.test(countryCode + phoneNumber)) {
        firstPopup.style.display = 'none';
        secondPopup.style.display = 'flex';
        resetErrorMessage();
    } else {
        document.getElementById('phoneNumber').classList.add('invalid-input');
        ErrorMessage.style.display = 'block';        
    }
});

  closeSecondPopupBtn.addEventListener('click', function() {
    secondPopup.style.display = 'none';
    resetErrorMessage();
  });

  function resetErrorMessage() {
    
    if (phoneNumberInput) {
      phoneNumberInput.classList.remove('invalid-input');
    }
    if (ErrorMessage) {
      ErrorMessage.style.display = 'none';
    }
  }
});
