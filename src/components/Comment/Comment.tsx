import React from 'react';

import './Comment.scss';

interface IProps {
  email:string,
  body:string,
}

const Comment:React.FC<IProps> = ({ email, body }) => (
  <div className="comment">
    <div className="comment-avatar">
      <img
        className="comment-avatar__img"
        src="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80"
        width="50"
        height="50"
        alt="man"
      />
    </div>
    <div className="comment-info">
      <div className="comment-email">{email.toLowerCase()}</div>
      <p className="comment-text">{body}</p>
    </div>
  </div>
);

export { Comment };
