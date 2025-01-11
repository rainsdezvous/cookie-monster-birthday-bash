// JavaScript for Escape Room - Room 3

document.getElementById('password-5').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const password = document.getElementById('answer-5').value.trim();
  
    if (password === 'c3RvbmU=') { // Replace w pass
      window.location.href = 'final.html'; // Navigate to the next room
    } else {
      document.getElementById('feedback5').textContent = 'Incorrect password! Try again.';
      document.getElementById('feedback5').style.color = 'red';
    }
  });