import React from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postsActions } from '../../redux/slices';

const Post:React.FC = () => {
  const { currentPost: { body, userId, title }, author, currentPostId } = useAppSelector((state) => state.postsReducer);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (userId) {
      dispatch(postsActions.getAuthor(userId.toString()));
    }
  }, [userId, currentPostId, dispatch]);
  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <div className="post-body">
        <div className="post-body__head">
          <span className="post-body__quotes">&quot;</span>
          <div className="post-body__head-line" />
        </div>
        <p className="post-body__quote">{body}</p>
        <div className="post-body__bot">
          <div className="post-body__bot-line" />
          <span className="post-body__quotes">&quot;</span>
        </div>
      </div>
      <Link className="post-author" to="/">
        posted by @
        {author && author.username}
      </Link>
    </div>
  );
};

export { Post };
