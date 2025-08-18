document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.testimonial-card');

    // Dados dos depoimentos (sem o campo "label")
    const testimonials = [
        {
            img: "./public/db1a8d40-ebde-4e11-8cf6-548947adbef4.jpg",
            text: "Graças às coisas que eu aprendi com você, consegui subir pro plat. Antes tava com 50% de win rate na jg, hj subiu pra 58%. Enfim, só queria agradecer por ter me ensinado tudo que sei sobre o palhaço.",
            name: "Arroz com 2 rr",
            tag: "#BR1"
        },
        {
            img: "./public/shaco45.jpg",
            text: "Muito obrigado pelos ensinamentos Titi. Seu coach e o PDF foram essenciais pra que eu conseguisse voltar pro Mestre.",
            name: "VIRA LATA",
            tag: "#URSS"
        },
        {
            img: "./public/Screenshot_149.png",
            text: "Complemento: Sobre o PowerPoint do Shaco foi muito efetivo, fiz até alguns vídeos para mandar para o Titiltei de como fiz o clear e dei o gank em sequência.",
            name: "Caike",
            tag: "#BR1"
        }
    ];

    let currentIndex = 0;

    function renderCards() {
        for (let i = 0; i < cards.length; i++) {
            const tIndex = (currentIndex + i) % testimonials.length;
            const t = testimonials[tIndex];
            const card = cards[i];

            card.innerHTML = `
                <div class="testimonial-image-container">
                    <img src="${t.img}" alt="Depoimento de ${t.name}" class="testimonial-image" loading="lazy">
                </div>
                <div class="testimonial-info">
                    <p class="testimonial-text">${t.text}</p>
                    <div class="testimonial-author">
                        <span class="author-name">${t.name}</span>
                        <span class="author-tag">${t.tag}</span>
                    </div>
                </div>
            `;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        renderCards();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        renderCards();
    }

    document.querySelector('.carousel-button.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-button.prev').addEventListener('click', prevSlide);

    renderCards();
});
