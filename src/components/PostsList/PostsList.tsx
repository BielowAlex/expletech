import React from 'react';

import { PostsListNav } from '../PostsListNav';
import { Post } from '../Post';

import './PostsList.scss';
import { useAppDispatch } from '../../hooks';
import { postsActions } from '../../redux/slices';

const PostsList: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(postsActions.getPosts());
  }, [dispatch]);

  return (
    <section className="posts">
      <div className="container posts-container">
        <div className="posts-list">
          <Post />
        </div>
      </div>
      <PostsListNav />
      <div className="posts-back">
        <img
          src="https://images.unsplash.com/photo-1680700944902-edc222f7157c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="city"
          className="posts-back__img"
        />
      </div>
    </section>
  );
};

export
{
  PostsList,
};
