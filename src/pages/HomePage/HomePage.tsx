import React from 'react';
import { Comments, PostsList } from '../../components';

const HomePage:React.FC = () => (
  <main className="content">
    <PostsList />
    <Comments />
  </main>
);

export { HomePage };
