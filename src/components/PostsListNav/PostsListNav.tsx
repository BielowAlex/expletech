import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import './PostsListNav.scss';
import { postsActions } from '../../redux/slices';

const PostsListNav: React.FC = () => {
  const { author, posts, currentPostId } = useAppSelector((state) => state.postsReducer);
  const dispatch = useAppDispatch();

  const nextPost = () => {
    console.log(posts.length);
    if (currentPostId < posts.length - 1) {
      dispatch(postsActions.setCurrentPost({
        post: posts[currentPostId + 1],
        id: currentPostId + 1,
      }));
    }
  };

  const prevPost = () => {
    if (currentPostId > 1) {
      dispatch(postsActions.setCurrentPost({
        post: posts[currentPostId - 1],
        id: currentPostId - 1,
      }));
    }
  };

  return (
    <nav className="list_navigation">
      <button className="prev_btn" type="button" onClick={prevPost}>
        <svg className="prev_btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </button>
      <div className="author">
        <div className="author-avatar">
          <img
            className="author-avatar__img"
            src="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80"
            width="50"
            height="50"
            alt="man"
          />
        </div>
        <div className="author-bio">
          <div className="author-email">{author.email && author.email.toLowerCase()}</div>
        </div>
      </div>
      <button className="next_btn" type="button" onClick={nextPost}>
        <svg className="next_btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          />
        </svg>
      </button>
    </nav>
  );
};

export { PostsListNav };
