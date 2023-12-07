// Function to get a random position without collision from existing positions
function getRandomPosition(existingPositions) {
    // Adjusted to full viewport width and height
    const maxWidth = window.innerWidth - 250;
    const maxHeight = window.innerHeight - 250;

    let attempts = 0;
    while (attempts < 50) {
        // Generate random X and Y coordinates within the viewport
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        // Check for collision with existing positions
        const isCollision = existingPositions.some(position => {
            const distance = Math.hypot(randomX - position.left, randomY - position.top);
            return distance < 250;
        });

        // If no collision, return the random position
        if (!isCollision) {
            return { left: randomX, top: randomY };
        }

        attempts++;
    }

    // If 50 attempts are made and still colliding, return a default position
    return { left: maxWidth / 2, top: maxHeight / 2 };
}

// Function to create a blob element and append it to the blob container
function createBlob(existingPositions, link, textContent) {
    // Get the blob container element from the DOM
    const blobContainer = document.getElementById('blob-container');

    // Create a new anchor element
    const blob = document.createElement('a');

    // Get a random position for the blob without collision
    const position = getRandomPosition(existingPositions);

    // Set href, class, and position for the blob
    blob.href = link || 'https://www.example.com';
    blob.classList.add('animated-blob');
    blob.style.left = position.left + 'px';
    blob.style.top = position.top + 'px';

    // Add a click event listener to redirect to the specified link
    blob.addEventListener('click', (event) => {
        window.location.href = blob.href;
    });

    // Set the text content for the blob, default to 'Click Me!'
    blob.textContent = textContent || 'Click Me!';

    // Append the blob to the blob container and add its position to existingPositions
    blobContainer.appendChild(blob);
    existingPositions.push(position);
}

// Array to keep track of existing blob positions
const existingPositions = [];

// Create blobs with specified links and text content
createBlob(existingPositions, 'E2.html', 'E2: Grid');
createBlob(existingPositions, 'E3.html', 'E3: Fonts & Animation');
createBlob(existingPositions, 'E4.html', 'E4: Flexbox');
createBlob(existingPositions, 'E5.html', 'E5: Javascript');
createBlob(existingPositions, 'E6.html', 'E6: jQuery');
createBlob(existingPositions, 'E7.html', 'E7: Responsiveness');
createBlob(existingPositions, 'E8.html', 'E8: JSON');
createBlob(existingPositions, 'P1pg1.html', 'P1: Storybook');
createBlob(existingPositions, 'process-template.html', 'P1: Process Work');
createBlob(existingPositions, 'P2.html', 'P2: Poster');
createBlob(existingPositions, 'process-templateP2.html', 'P2: Process Work');
createBlob(existingPositions, 'P3.html', 'P3: Interaction');
createBlob(existingPositions, 'process-templateP3.html', 'P3: Process Work');
createBlob(existingPositions, 'R5.html', 'R5: My Website Is A Shifting House Next To A River Of Knowledge');
createBlob(existingPositions, 'process-templateIndex.html', 'Index: Process Work');

