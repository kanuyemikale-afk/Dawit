// Get references to the elements
const statusElement = document.getElementById('status');
const courseTitleElement = document.getElementById('courseTitle');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const courseChangeButton = document.getElementById('coursechange');

// Event listener for the Login button
loginButton.addEventListener('click', function() {
    statusElement.textContent = ' Online'; // Change status to online
    statusElement.classList.remove('offline'); // Remove offline class
    statusElement.classList.add('online'); // Optionally, you can add an online class for styling
});

// Event listener for the Logout button
logoutButton.addEventListener('click', function() {
    statusElement.textContent = ' Offline'; // Change status to offline
    statusElement.classList.remove('online'); // Remove online class
    statusElement.classList.add('offline'); // Optionally, you can add an offline class for styling
});

// Event listener for the Change Course button
courseChangeButton.addEventListener('click', function() {
    courseTitleElement.textContent = 'Course: Advanced JavaScript'; // Change course title
});