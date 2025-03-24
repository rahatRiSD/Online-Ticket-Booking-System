// Form validation function
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate username (should not be empty)
    if (username.trim() === "") {
      alert("Username is required.");
      return false;
    }
  
    // Validate password (should be at least 8 characters long)
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    // All validations passed
    return true;
  }
  