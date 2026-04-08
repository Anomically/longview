document.addEventListener('DOMContentLoaded', () => {
    console.log("Longview Engine: Berhasil dimuat!");

    // 1. SISTEM NAVIGASI AKTIF
    // Mengidentifikasi halaman mana yang sedang dibuka dan memberikan tanda di menu
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--accent-color)';
            link.style.borderBottom = '2px solid var(--accent-color)';
            link.style.fontWeight = 'bold';
        }
    });

    // 2. ALGORITMA PENCARIAN ARTIS (Untuk artist.html)
    // Mencocokkan input pengguna dengan data nama artis di halaman
    const artistSearch = document.getElementById('artistSearch');
    
    if (artistSearch) {
        artistSearch.addEventListener('keyup', (e) => {
            const searchValue = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                const artistName = card.querySelector('h3').textContent.toLowerCase();
                const genre = card.querySelector('.tag').textContent.toLowerCase();

                // Logika: Tampilkan jika nama atau genre cocok dengan pencarian
                if (artistName.includes(searchValue) || genre.includes(searchValue)) {
                    card.style.display = "block";
                    card.style.animation = "fadeIn 0.3s ease";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // 3. INTERAKSI CARD (Feedback Visual)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-5px)";
            card.style.transition = "0.3s ease";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0)";
        });
    });
});