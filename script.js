const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volunteer-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const captcha = formData.get('captcha');
        const message = formData.get('message');

        if (captcha != 21) {
            console.log('CAPTCHA validation failed. Please try again.');
            return;
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('CAPTCHA:', captcha);
        console.log('Message:', message);

        form.reset();
    });
});
