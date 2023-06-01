document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
  
    var nameError = document.getElementById("nameError");
    var phoneError = document.getElementById("phoneError");
  
    // Name validation
    if (nameInput.value.length < 3 || nameInput.value.length > 30) {
      nameError.innerHTML = "Name must be between 3 and 30 characters.";
      nameInput.classList.add("error");
    } else {
      nameError.innerHTML = "";
      nameInput.classList.remove("error");
    }
  
    // Phone number validation
    var phonePattern = /^\d{10}$/; // Matches exactly 10 digits
    if (!phonePattern.test(phoneInput.value)) {
      phoneError.innerHTML = "Phone number must be a 10-digit number.";
      phoneInput.classList.add("error");
    } else {
      phoneError.innerHTML = "";
      phoneInput.classList.remove("error");
    }
  }
  