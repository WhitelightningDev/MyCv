

// Smooth scroll to the bottom of the screen when the anchor button is clicked
document.querySelector('.intro-contact').addEventListener('click', function(event) {
    event.preventDefault();
    const footer = document.querySelector('footer'); // Replace 'footer' with the ID or class of the element you want to scroll to
    footer.scrollIntoView({ behavior: 'smooth' });
});


// Function to open Google Maps with the address
function openGoogleMaps() {
    // Replace "123 Example Street, Cityville, Country" with the desired address
    const address = "44 Boundary Road, Mountainside, Gordon's Bay, Cape Town";
    
    // Create the Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    
    // Open Google Maps in a new tab
    window.open(googleMapsUrl, "_blank");
}


// Function to open Gmail
function openGmail() {
    // Replace "mailto:youremail@gmail.com" with your Gmail address
    const gmailAddress = "https://mail.google.com/";

    // Open Gmail in a new tab
    window.open(gmailAddress, "_blank");
}

