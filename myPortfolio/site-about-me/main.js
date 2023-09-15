function scrollToCenter(element) {
    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    window.scrollTo({
      behavior: 'smooth',
      top: elementRect.top + scrollTop - (window.innerHeight / 2) + (elementRect.height / 2),
    });
  }

// Получаем ссылки на элементы списка по их id
const aboutMeLink = document.getElementById('about-me-link');
const skillsLink = document.getElementById('skills-link');
const educationLink = document.getElementById('work-experience-link');
const coursesLink = document.getElementById('courses-link');

// Получаем соответствующие блоки по их id
const aboutMeBlock = document.getElementById('about-me');
const skillsBlock = document.getElementById('skills');
const educationBlock = document.getElementById('work-experience');
const coursesBlock = document.getElementById('courses');

// Добавляем обработчики событий для каждого элемента списка
aboutMeLink.addEventListener('click', () => {
    scrollToCenter(aboutMeBlock);
});

skillsLink.addEventListener('click', () => {
    scrollToCenter(skillsBlock);
});

educationLink.addEventListener('click', () => {
    scrollToCenter(educationBlock);
});

coursesLink.addEventListener('click', () => {
    scrollToCenter(coursesBlock);
});