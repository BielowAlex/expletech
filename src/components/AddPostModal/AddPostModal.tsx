import React from 'react';

import { AddPostForm } from '../Forms';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { postsActions } from '../../redux/slices';

import './AddPostModal.scss';

const AddPostModal:React.FC = () => {
  const { isFormOpen } = useAppSelector((state) => state.postsReducer);
  const dispatch = useAppDispatch();

  return (
    <div className="post_modal" style={{ left: isFormOpen ? 0 : '-100%', opacity: isFormOpen ? 1 : 0 }}>
      <div className="post_modal-container">
        <div className="post_modal-head">
          <button className="post_modal-close" type="button" onClick={() => dispatch(postsActions.formToggle(false))}>
            <svg className="post_modal-close__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
        </div>
        <div className="post_modal-author">
          <div className="post_modal-author__avatar">
            <img
              className="author-avatar__img"
              src="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80"
              width="80"
              height="50"
              alt="man"
            />
          </div>
          <span className="post_modal-author__email">username@gmail.com</span>
        </div>
        <AddPostForm />
      </div>
    </div>
  );
};

export { AddPostModal };
