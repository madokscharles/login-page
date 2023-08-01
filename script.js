const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

const registerFormContainer = document.getElementById('registerFormContainer');
const registerForm = document.getElementById('registerForm');
const registerMessage = document.getElementById('registerMessage');

const registeredUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users if needed
];

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
        loginMessage.textContent = 'Login successful!'; // Change this message as needed
        // Here, you can add code to redirect to a different page or perform additional actions after successful login.
    } else {
        loginMessage.textContent = 'Invalid username or password';
    }
});

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Check if the username is already taken
    const isUsernameTaken = registeredUsers.some(user => user.username === newUsername);

    if (isUsernameTaken) {
        registerMessage.textContent = 'Username is already taken';
    } else {
        // Add the new user to the list of registered users
        registeredUsers.push({ username: newUsername, password: newPassword });
        registerMessage.textContent = 'Registration successful!'; // Change this message as needed
    }
});
