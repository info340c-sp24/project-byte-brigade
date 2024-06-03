import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const { name: hikeName } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        try {
            const storedComments = JSON.parse(localStorage.getItem('comments')) || {};
            setComments(storedComments[hikeName] || []); 
        } catch (error) {
            console.error('Error fetching comments form localStorage:', error);
        }
    }, [hikeName]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const comment = event.target.comment.value.trim();

        if (!name || !comment) {
            alert('Please enter both name and comment.');
            return;
        }

        const newComment = { name, comment };
        const updatedComments = [...comments, newComment];

        try {
            const storedComments = JSON.parse(localStorage.getItem('comments')) || {};
            storedComments[hikeName] = updatedComments;

            setComments(updatedComments);
            localStorage.setItem('comments', JSON.stringify(storedComments));
        } catch (error) {
            console.error('Error saving comments to localStorage:', error);
        }

        event.target.name.value = '';
        event.target.comment.value = '';
    };

    return (
        <div>
            <div className="comments">
                <h2>Comments</h2>
                {comments.length > 0 ? (
                    comments.map((commentObj, index) => (
                        <div key={index}>
                            <strong>{commentObj.name}</strong>: {commentObj.comment}
                        </div>
                    ))
                ) : (
                    <p>No hiker comments yet. Be the first to leave your tips!</p>
                )}
            </div>
            <div className="comment-form">
                <h2>Add Your Comments</h2>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Hiker Name: </label><br />
                    <input type="text" id="name" name="name" required /><br />
                    <label htmlFor="comment">Tell us about your trek!:</label><br />
                    <textarea id="comment" name="comment" rows="4" cols="50" required></textarea><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Comments;