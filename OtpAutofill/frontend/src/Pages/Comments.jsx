import React, { useState, useEffect } from 'react';

// Replace with your backend URL
const apiUrl = 'http://localhost:3000/comments';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    
    const fetchComments = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [comments]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      try {
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: commentText }),
        });

        if (response.ok) {
          const newComment = await response.json();
          setComments([...comments, newComment]);
          setCommentText('');
        } else {
          console.error('Failed to add comment');
        }
      } catch (error) {
        console.error('Error creating comment:', error);
      }
    }
  };

  return (
    <div className='overflow-hidden' id='Comments'>
      <div className='ml-44 text-slate-200 text-2xl font-bold mb-3'>Comments</div>
      <div className='border-2 w-screen border-neutral-900 mb-10 border-opacity-40'></div>
    
      <div className="bg-custmBgcomments p-5 h-auto w-10/12 ml-32 rounded-2xl pt-3 pb-5 mb-10 mx-auto">
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            className="w-full h-24 p-2 border border-customcommentsborder rounded-xl text-slate-300 focus:outline-none focus:ring-2 focus:ring-customcommentsborder bg-customComments resize-none"
            placeholder="Add a public comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <button
              type="button"
              className="text-gray-500 mr-2"
              onClick={() => setCommentText('')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"

            >
              Comment
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="bg-custmBgcomments p-4 rounded-lg shadow-sm">
              <div className="flex items-start space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-300">User {index + 1}</p>
                  <p className="text-slate-300">{comment.content}</p>
                  <div className="text-sm text-slate-300 mt-1">
                    <button className="mr-2 hover:underline">Like</button>
                    <button className="hover:underline">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
