// script.js
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitButton = document.getElementById('submitButton');
    const emailField = document.getElementById('email');
    const responseMessage = document.getElementById('responseMessage');
  
    // Disable the submit button and change its text
    submitButton.disabled = true;
    submitButton.textContent = 'Please wait...';
  
    // Simulate an asynchronous operation (e.g., sending the email to a server)
    setTimeout(() => {
        // Update the UI after a successful "subscription"
        responseMessage.textContent = 'Thank you! Your submission has been received!';
        responseMessage.classList.remove('hidden');
        emailField.value = '';
        submitButton.disabled = false;
        submitButton.textContent = '';
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  