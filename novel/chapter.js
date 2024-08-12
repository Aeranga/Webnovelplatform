
document.querySelector('.next-chapter-btn').addEventListener('click', function() {
    alert('Redirecting to the next chapter...');
    href = 'chapter-2.html';
});

// Function to handle "TOC" button click
document.querySelector('.toc-btn').addEventListener('click', function() {
    alert('Redirecting to the Table of Contents...');
    href = 'toc.html';
});
