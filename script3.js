// JavaScript for Escape Room - Room 3

document.getElementById('password-3').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const password = document.getElementById('answer-3').value.trim();
  
    if (password === 'Nvcm5') { // Replace w pass
      window.location.href = 'room4.html'; // Navigate to the next room
    } else {
      document.getElementById('feedback3').textContent = 'Incorrect password! Try again.';
      document.getElementById('feedback3').style.color = 'red';
    }
  });
  