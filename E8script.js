document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://api.artic.edu/api/v1/artworks';

    // Function to fetch artworks from the API
    function fetchArtworks() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayArtworks(data.data))
            .catch(error => console.error('Error fetching artworks:', error));
    }

    // Function to display artworks on the webpage
    function displayArtworks(artworks) {
        const artworksContainer = document.getElementById('artworks-container');

        artworks.forEach(artwork => {
            const artworkDiv = document.createElement('div');
            artworkDiv.classList.add('artwork');

            const title = document.createElement('h2');
            title.textContent = artwork.title;

            const imageUrl = artwork.image_id
                ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/300,/0/default.jpg`
                : 'placeholder.jpg';

                const image = document.createElement('img');
                image.src = imageUrl;
                image.alt = artwork.title;
    
                const artist = document.createElement('p');
                artist.textContent = `Artist: ${artwork.artist_display || 'Unknown'}`;
    
                const year = document.createElement('p');
                year.textContent = `Year: ${artwork.date_display || 'Unknown'}`;
    
                const description = document.createElement('p');
                description.textContent = artwork.description || 'No description available.';
    
                artworkDiv.appendChild(title);
                artworkDiv.appendChild(image);
                artworkDiv.appendChild(artist);
                artworkDiv.appendChild(year);


            artworksContainer.appendChild(artworkDiv);
        });
    }

    // Call the fetchArtworks function when the page loads
    fetchArtworks();
});
