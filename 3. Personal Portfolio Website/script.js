const roles = ["Web Developer" , "UI/UX Designer"];
const rotator = document.getElementById('roleRotator');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; 

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
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeRoles, typingSpeed);
}

// Initialize with first role
window.addEventListener('DOMContentLoaded', () => {
    rotator.textContent = ''; 
    setTimeout(typeRoles, 1000); 
});