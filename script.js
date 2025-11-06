// Параметри для IntersectionObserver
const appearOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };

// Вибираємо всі секції та футер для анімації при скролі
const faders = document.querySelectorAll('section, footer');

// Створюємо IntersectionObserver для появи елементів
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return; // Якщо елемент не в зоні видимості, пропускаємо
        entry.target.classList.add('appear'); // Додаємо клас, який запускає CSS-анімацію
        observer.unobserve(entry.target); // Перестаємо спостерігати за цим елементом
    });
}, appearOptions);

// Починаємо спостереження за кожним елементом
faders.forEach(fader => appearOnScroll.observe(fader));
