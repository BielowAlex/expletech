import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IAddedPost, IPost, IPostBody, IUser,
} from '../../types';
import { postsService } from '../../services';

interface IState {
  isFormOpen: boolean
  isPostAdded: boolean
  posts: IPost[]
  currentPost: IPost
  currentPostId: number
  author:IUser,
}

const initialState: IState = {
  isFormOpen: false,
  isPostAdded: false,
  posts: [],
  currentPost: {} as IPost,
  currentPostId: 0,
  author: {} as IUser,
};

const addPost = createAsyncThunk<IAddedPost, IPostBody>(
  'postsSlice/addPost',
  async (inputData) => {
    const { data } = await postsService.addPosts(inputData);

    return data;
  },
);

const getPosts = createAsyncThunk<IPost[], void>(
  'postsSlice/getPosts',
  async () => {
    const { data } = await postsService.getPosts();

    return data;
  },
);

const getAuthor = createAsyncThunk<IUser, string>(
  'postsSlice/getAuthor',
  async (id) => {
    const { data } = await postsService.getAuthor(id);

    return data;
  },
);

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    formToggle: (state: IState, action: PayloadAction<boolean>) => {
      state.isFormOpen = action.payload;
    },
    setCurrentPost: (state:IState, action:PayloadAction<{ post:IPost, id:number }>) => {
      state.currentPost = action.payload.post;
      state.currentPostId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPost.fulfilled, (state: IState) => {
        state.isPostAdded = true;
        state.isFormOpen = false;
      })
      .addCase(getPosts.fulfilled, (state: IState, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
        state.currentPost = action.payload[0];
      })
      .addCase(getAuthor.fulfilled, (state: IState, action: PayloadAction<IUser>) => {
        state.author = action.payload;
      });
  },
});

const {
  reducer: postsReducer,
  actions: { formToggle, setCurrentPost },
} = postsSlice;

const postsActions = {
  formToggle,
  getPosts,
  addPost,
  getAuthor,
  setCurrentPost,
};

export {
  postsReducer,
  postsActions,
};
