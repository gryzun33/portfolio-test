// menu
const body = document.body;
const burgerBtn = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = sideMenu.querySelector('.side-menu__close-btn');
const menuItems = sideMenu.querySelectorAll('li');

function toggleMenu() {
  overlay.classList.toggle('overlay_active');
  sideMenu.classList.toggle('side-menu_open');
  body.classList.toggle('no-scroll');
}

burgerBtn.addEventListener('click', () => {
  toggleMenu();
});

overlay.addEventListener('click', () => {
  toggleMenu();
});

closeBtn.addEventListener('click', () => {
  toggleMenu();
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
});

// form
const form = document.querySelector('.contacts__form');
const respMessage = document.querySelector('.form__response');

function showResponse(response) {
  if (response) {
    respMessage.innerText = 'Сообщение отправлено успешно!';
  } else {
    respMessage.innerText = 'Произошла ошибка. Попробуйте позже.';
  }

  respMessage.classList.add('form__response_visible');
  setTimeout(() => {
    respMessage.classList.remove('form__response_visible');
  }, 3000);
}

async function sendFormData(formData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Error during sending data to the server');
    }

    const data = await response.json();
    console.log('Response:', data);
    showResponse(true);
  } catch (error) {
    console.error('Error:', error);
    showResponse(false);
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  await sendFormData(data);

  form.reset();
});
