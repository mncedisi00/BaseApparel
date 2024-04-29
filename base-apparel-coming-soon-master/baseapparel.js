document.getElementById("Add-form").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();

    // Check if the email contains an "@" symbol
    if (email.indexOf("@") === -1) {
        // Display error message
        document.getElementById("error-message").style.display = "block";
        event.preventDefault(); // Prevent form submission
    }
});

// Listen for changes in the email input field
document.getElementById("email").addEventListener("input", function() {
    // Hide error message when user starts typing
    document.getElementById("error-message").style.display = "none";})