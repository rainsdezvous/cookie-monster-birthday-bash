// JavaScript for Escape Room - Room 3

document.getElementById('password-4').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const password = document.getElementById('answer-4').value.trim();
  
    if (password === 'lcmVk') { // Replace w pass
      window.location.href = 'room5.html'; // Navigate to the next room
    } else {
      document.getElementById('feedback4').textContent = 'Incorrect password! Try again.';
      document.getElementById('feedback4').style.color = 'red';
    }
  });
  