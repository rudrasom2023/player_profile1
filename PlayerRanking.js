document.addEventListener('DOMContentLoaded', function() {
    const formatButtons = document.querySelectorAll('.format-btn');
    const rankingTables = document.querySelectorAll('.rankings-table tbody');

    // Sample data for rankings (you would typically fetch this from an API)
    const rankingsData = {
        test: {
            batting: [
                { rank: 11, name: "99", country: "40"},
            ]
        },
        odi: {
            batting: [
                { rank: 12, name: "0", country: "33"},
            ]
        },
        t20i: {
            batting: [
                { rank: 1, name: "--", country: "--"},
            ]
        }
    };
    function updateRankings(format) {
        const categories = ['batting', 'bowling', 'allrounder'];
        categories.forEach((category, index) => {
            const tableBody = rankingTables[index];
            tableBody.innerHTML = ''; // Clear existing rows

            rankingsData[format][category].forEach(player => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${player.rank}</td>
                    <td>${player.name}</td>
                    <td>${player.country}</td>
                `;
                tableBody.appendChild(row);
            });
        });
    }

    formatButtons.forEach(button => {
        button.addEventListener('click', function() {
            formatButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            updateRankings(this.dataset.format);
        });
    });

    // Initialize with Test rankings
    updateRankings('test');

    // Add hover effect to table rows
    rankingTables.forEach(table => {
        table.addEventListener('mouseover', function(e) {
            if (e.target.tagName === 'TD') {
                e.target.parentElement.style.transform = 'scale(1.02)';
                e.target.parentElement.style.transition = 'transform 0.2s ease';
            }
        });

        table.addEventListener('mouseleave', function(e) {
            if (e.target.tagName === 'TD') {
                e.target.parentElement.style.transform = 'scale(1)';
            }
        });
    });

    // Animate career highlight cards on scroll
    const highlightCards = document.querySelectorAll('.highlight-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    highlightCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});