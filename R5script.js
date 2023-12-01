document.addEventListener('DOMContentLoaded', function () {
    const bookshelf = document.getElementById('bookshelf');

    // Sample book data (you can replace this with your own data)
    const books = [
        { title: 'Book 1', content: 'A website can be metaphorically compared to either a physical or virtual library.' },
        { title: 'Book 2', content: 'In the case of a physical bookstore, it highlights the idea that a website is a place where information, products, or services are displayed and made accessible to visitors.' },
        { title: 'Book 3', content: 'Similar to a physical store, a website is designed to attract, engage, and serve its audience.' },
        { title: 'Book 4', content: 'On the other hand, comparing a website to a virtual library emphasizes the wealth of information and resources it holds.' },
        { title: 'Book 5', content: 'Like a library, a website organizes and categorizes information for easy navigation, allowing users to explore and access a variety of content.' },
        { title: 'Book 6', content: 'The metaphor also implies that a website can be a place for learning and discovery, offering a vast array of knowledge and experiences.' },
        
        // Add more books as needed
    ];

    // Dynamically create book elements
    books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.textContent = book.title;

        // Open the book on click
        bookElement.addEventListener('click', function () {
            alert(`Title: ${book.title}\nContent: ${book.content}`);
        });

        bookshelf.appendChild(bookElement);
    });
});
