// JavaScript for Escape Room - Room 1

document.getElementById('password-1').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const password = document.getElementById('answer-1').value.trim();
  
    if (password === 'Yml0L') { // Replace w pass
      window.location.href = 'room2.html'; // Navigate to the next room
    } else {
      document.getElementById('feedback').textContent = 'Incorrect password! Try again.';
      document.getElementById('feedback').style.color = 'red';
    }
  });
  