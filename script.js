const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const validUsername = 'your_username';
    const validPassword = 'your_password';

    if (username === validUsername && passwword === validPassword) {
        message.textContent = 'Login successful!';
    } else {
        message.textContent = 'Invalid username or password';
    }
});