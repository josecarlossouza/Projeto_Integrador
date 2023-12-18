function updateCirclePosition() {
    const carousel = document.querySelector('.carousel');
    const card = carousel.querySelector('.card.active');
    const circle = document.querySelector('.circle');
    const circleRadius = 90; // Pixels

    if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const carouselRect = carousel2.getBoundingClientRect();
        const circleLeft = cardCenterX - carouselRect.left - circleRadius;
        const circleTop = cardCenterY - carouselRect.top - circleRadius;
        circle.style.left = `${circleLeft}px`;
        circle.style.top = `${circleTop}px`;
    }
}

const carousel = document.querySelector('.carousel');
carousel.addEventListener('scroll', updateCirclePosition);



function updateCircleSpanPosition() {
    const circleSpan = document.querySelector('.circle span');
    const circle = document.querySelector('.circle');
    const circleSpanRadius = 25; // Pixels

    if (circle) {
        const circleRect = circle.getBoundingClientRect();
        const circleCenterX = circleRect.left + circleRect.width / 2;
        const circleCenterY = circleRect.top + circleRect.height / 2;
        const circleSpanLeft = circleCenterX - circleSpanRadius;
        const circleSpanTop = circleCenterY - circleSpanRadius;
        circleSpan.style.left = `${circleSpanLeft}px`;
        circleSpan.style.top = `${circleSpanTop}px`;
    }
}

const circle = document.querySelector('.circle');
circle.addEventListener('scroll', updateCircleSpanPosition);

// const circle = document.querySelector('.circle');
// const spans = document.querySelectorAll('.circle span');
// const images = document.querySelectorAll('.card .img img');

// function updateCircleSize() {
//     // Obter as dimensões da imagem
//     const imageWidth = images[0].offsetWidth;
//     const imageHeight = images[0].offsetHeight;

//     // Calcular o tamanho do círculo com base nas dimensões da imagem
//     const circleSize = Math.max(imageWidth, imageHeight) * 1.2; // Ajuste conforme necessário

//     // Aplicar as dimensões ao círculo
//     circle.style.width = `${circleSize}px`;
//     circle.style.height = `${circleSize}px`;

//     // Calcular o raio para a animação
//     const radius = circleSize / 2;

//     // Atualizar a animação dos spans
//     spans.forEach((span, index) => {
//         const rotate = (360 / spans.length) * index;
//         span.style.setProperty('--rotate', `${rotate}deg`);
//         span.style.height = `${radius * 2}px`;
//     });
// }

// // Chamar a função de atualização no carregamento da página e sempre que a imagem for carregada
// window.addEventListener('load', updateCircleSize);
// window.addEventListener('resize', updateCircleSize);