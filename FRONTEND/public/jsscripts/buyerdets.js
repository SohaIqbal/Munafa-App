document.addEventListener('DOMContentLoaded', function() {
    const deliveryForm = document.getElementById('deliveryForm');
    const confirmation = document.getElementById('confirmation');

    deliveryForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simulate form submission and display confirmation
        confirmation.classList.remove('hidden');
        deliveryForm.reset();
    });
});
