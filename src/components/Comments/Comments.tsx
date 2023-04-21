import React from 'react';

import { CommentsList } from '../CommentsList';

import './Comments.scss';

const Comments:React.FC = () => (
  <div className="comments">
    <div className="container comments-container">
      <div className="comments-title">
        <h2 className="comments-title__text">
          Comments
        </h2>
      </div>
      <CommentsList />
    </div>
  </div>

);

export { Comments };
