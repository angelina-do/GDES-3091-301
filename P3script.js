document.addEventListener('DOMContentLoaded', function () {
    const sun = document.getElementById('sun');
    const sunset = document.getElementById('sunset');
    let isDragging = false;
  
    // Set the data to enable drag-and-drop
    sun.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('text/plain', '');
      isDragging = true;
    });
  
    // Move the sun while dragging
    sun.addEventListener('drag', function (e) {
      if (isDragging) {
        const yPos = e.clientY - sun.clientHeight / 2;
  
        // Set the sun's position based on the drag
        sun.style.top = `${Math.min(Math.max(yPos, 0), window.innerHeight - sun.clientHeight)}px`;
  
        // Check if the sun is above half of the page
        if (yPos < window.innerHeight / 2) {
          // Change to moon and switch to night scenery
          sun.classList.add('moon');
          sunset.style.background = 'linear-gradient(to bottom, #0a0a2a, #19194e, #0a0a2a)';
  
          // Add stars to the night scenery
          createStars();
        } else {
          // Remove moon class and switch back to day scenery
          sun.classList.remove('moon');
          sunset.style.background = 'linear-gradient(to bottom, #ff6600, #ff9933, #ffcc66, #ffd699, #ffdbb2)';
  
          // Remove stars
          removeStars();
        }
      }
    });
  
    // Stop dragging when releasing the mouse
    document.addEventListener('dragend', function () {
      isDragging = false;
    });
  
    // Function to create stars
    function createStars() {
      const numberOfStars = 10; // Adjust the number of stars as needed
  
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * (window.innerHeight - 20)}px`; // Ensure stars are within the visible area
        sunset.appendChild(star);
      }
    }
  
    // Function to remove stars
    function removeStars() {
      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => star.remove());
    }
  });
  