document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/*
document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has already accepted cookies
    if (!localStorage.getItem('cookies-accepted')) {
        // Show the cookie banner if the user hasn't accepted cookies
        document.getElementById('cookie-banner').style.opacity = '1';
        document.getElementById('cookie-banner').style.bottom = '0';  // Make the banner visible just above the footer
    }

    // Listen for the "Learn more" link click
    document.getElementById('cookie-banner').addEventListener('click', function (event) {
        if (event.target.tagName.toLowerCase() === 'a') {
            // Set a flag in localStorage to indicate consent has been given
            localStorage.setItem('cookies-accepted', 'true');

            // Fade the cookie banner out (after the link is clicked)
            document.getElementById('cookie-banner').style.opacity = '0';
            document.getElementById('cookie-banner').style.bottom = '-50px'; // Move the banner below the footer
        }
    });
});

*/

    