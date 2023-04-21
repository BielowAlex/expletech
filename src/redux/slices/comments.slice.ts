import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IComment } from '../../types';
import { postsService } from '../../services';

interface IState {
  comments: IComment[],
  isCommentsLoaded: boolean
}

const getAll = createAsyncThunk<IComment[], { id:string } >(
  'commentsSlice/getAll',
  async ({ id }) => {
    const { data } = await postsService.getPostComments(id);

    return data;
  },
);

const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState: {
    comments: [],
    isCommentsLoaded: false,
  } as IState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state:IState) => {
        state.isCommentsLoaded = false;
        state.comments = [];
      })
      .addCase(getAll.fulfilled, (state:IState, action:PayloadAction<IComment[]>) => {
        state.comments = action.payload;
        state.isCommentsLoaded = true;
      });
  },
});

const {
  reducer: commentsReducer,
} = commentsSlice;

const commentsActions = {
  getAll,
};

export {
  commentsReducer,
  commentsActions,
};
