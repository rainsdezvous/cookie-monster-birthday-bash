// JavaScript for Escape Room - Room 2

document.getElementById('password-2').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const password = document.getElementById('answer-2').value.trim();
  
    if (password === 'mx5L2') { // Replace w pass
      window.location.href = 'room3.html'; // Navigate to the next room
    } else {
      document.getElementById('feedback2').textContent = 'Incorrect password! Try again.';
      document.getElementById('feedback2').style.color = 'red';
    }
  });
  