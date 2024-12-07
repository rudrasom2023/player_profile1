document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Infinite ticker animation
    const ticker = document.querySelector('.ticker-content');
    if (ticker) {
        const clone = ticker.cloneNode(true);
        ticker.parentNode.appendChild(clone);
    }

    // Add animation to stats on scroll
    const stats = document.querySelectorAll('.stat-item .value');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    stats.forEach(stat => {
        stat.style.opacity = 0;
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = 'all 0.6s ease';
        observer.observe(stat);
    });

    // Add hover effect to table rows
    const tableRows = document.querySelectorAll('.stats-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.01)';
            row.style.transition = 'transform 0.2s ease';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'scale(1)';
        });
    });
});