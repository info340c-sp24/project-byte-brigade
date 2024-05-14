function saveCommentLocally(name, comment) {
    const existingComments = JSON.parse(localStorage.getItem('comments')) || [];

    existingComments.push({name, comment });

    localStorage.setItem('comments', JSON.stringify(existingComments));
}

function fetchComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    const commentsContainer = document.getElementById('comments');

    commentsContainer.innerHTML = '';
    comments.forEach((commentObj) => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${commentObj.name}</strong>: ${commentObj}.comment}`;
        commentsContainer.appendChild(commentElement);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    saveCommentLocally(name, comment);

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';

    fetchComments();
}

const commentForm = document.getElementById('comment-form');

commentForm.addEventListener('submit', handleFormSubmit);

fetchComments();