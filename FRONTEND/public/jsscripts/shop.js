var buyButton = document.getElementById('buyButton');
var popup = document.getElementById('popup');

function showPopup() {
    popup.style.display = 'block';
}

 buyButton.addEventListener('click', function() {
    showPopup();
});

document.getElementById('buyerBtn').addEventListener('click', function() {
    window.location.href = "buyerdetails.html";
    
    // Redirect or perform action for Buyer
});

document.getElementById('sellerBtn').addEventListener('click', function() {
    window.location.href = "sellerclientdets.html";
    
    // Redirect or perform action for Seller
});

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}