document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Simple interaction script to animate skills on view
document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.style.transform = 'scale(0)';
        setTimeout(() => {
            skill.style.transform = 'scale(1)';
        }, 300);
    });
});
