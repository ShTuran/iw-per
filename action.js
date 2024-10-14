// JavaScript for hover effect on project items
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#f00';
        item.style.cursor = 'pointer';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#eee';
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting the form.');
        event.preventDefault();
    } else {
        alert('Thank you for reaching out! Your message has been sent.');
    }
});
