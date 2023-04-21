import React from 'react';

import { Comment } from '../Comment';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Loading } from '../Loading';
import { commentsActions } from '../../redux/slices';
import './CommentsList.scss';

const CommentsList:React.FC = () => {
  const { comments, isCommentsLoaded } = useAppSelector((state) => state.commentsReducer);
  const { currentPost } = useAppSelector((state) => state.postsReducer);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (currentPost.id) {
      dispatch(commentsActions.getAll({ id: currentPost.id.toString() }));
    }
  }, [currentPost.id, dispatch]);

  return (
    <div className="comments-list">
      {!isCommentsLoaded
        ? <Loading />
        : comments.map(({ id, body, email }) => <Comment key={id} body={body} email={email} />)}
    </div>
  );
};

export { CommentsList };
