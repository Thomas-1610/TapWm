document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Adiciona a classe temporária para animação
            targetElement.classList.add('highlight');
            setTimeout(() => {
                targetElement.classList.remove('highlight');
            }, 2000); // Duração da animação em milissegundos
        });
    }
});