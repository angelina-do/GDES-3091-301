function getRandomPosition(existingPositions) {
    const maxWidth = window.innerWidth - 250;
    const maxHeight = window.innerHeight - 250;

    let attempts = 0;
    while (attempts < 50) {
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        const isCollision = existingPositions.some(position => {
            const distance = Math.hypot(randomX - position.left, randomY - position.top);
            return distance < 250;
        });

        if (!isCollision) {
            return { left: randomX, top: randomY };
        }

        attempts++;
    }

    return { left: maxWidth / 2, top: maxHeight / 2 };
}

function createBlob(existingPositions, link, textContent) {
    const blobContainer = document.getElementById('blob-container');
    const blob = document.createElement('a');
    const position = getRandomPosition(existingPositions);

    blob.href = link || 'https://www.example.com';
    blob.classList.add('animated-blob');
    blob.style.left = position.left + 'px';
    blob.style.top = position.top + 'px';

    blob.addEventListener('click', (event) => {
        window.location.href = blob.href;
    });

    blob.textContent = textContent || 'Click Me!';

    blobContainer.appendChild(blob);
    existingPositions.push(position);
}

const existingPositions = [];

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

