document.addEventListener('DOMContentLoaded', function() {

    // --- Animação de Fade-in ao Rolar a Página ---
    const observerOptions = {
        root: null, // observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // aciona quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // para a observação após a animação
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que devem ter a animação
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(el => observer.observe(el));


    // --- Rolagem Suave para links de navegação ---
    // (O comportamento CSS `scroll-behavior: smooth;` já cuida disso de forma nativa na maioria dos navegadores modernos)
    // Se precisar de suporte para navegadores mais antigos ou mais controle, um código JS seria adicionado aqui.
    // Para este projeto, o CSS é suficiente e mais performático.
});