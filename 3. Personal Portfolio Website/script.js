const roles = ["Web Developer", "Python Programmer", "UI/UX Designer"];
const rotator = document.getElementById('roleRotator');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Reduced for smoother typing

function typeRoles() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        rotator.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        rotator.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Delay before typing next role
    }

    setTimeout(typeRoles, typingSpeed);
}

// Initialize with first role
window.addEventListener('DOMContentLoaded', () => {
    rotator.textContent = ''; // Clear initial content
    setTimeout(typeRoles, 1000); // Start after 1 second delay
});