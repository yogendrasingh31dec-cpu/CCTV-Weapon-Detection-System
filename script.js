const counters = document.querySelectorAll('[data-target]');

const animateCounter = (el) => {
  const target = Number(el.dataset.target);
  let current = 0;
  const step = Math.ceil(target / 40);

  const update = () => {
    current += step;
    if (current >= target) {
      el.textContent = `${target}${target === 24 ? 'h' : target === 5 ? 's' : ''}`;
      return;
    }

    el.textContent = `${current}${target === 24 ? 'h' : target === 5 ? 's' : ''}`;
    requestAnimationFrame(update);
  };

  update();
};

counters.forEach((counter) => animateCounter(counter));

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thank you! Your request has been submitted successfully.';
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
