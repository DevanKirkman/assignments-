document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.getElementById('resume-link');
    const resumeDropdown = document.getElementById('resume-dropdown');

    resumeLink.addEventListener('click', function(event) {
        event.preventDefault();
        resumeDropdown.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#resume-link')) {
            if (resumeDropdown.classList.contains('show')) {
                resumeDropdown.classList.remove('show');
            }
        }
    });
});
