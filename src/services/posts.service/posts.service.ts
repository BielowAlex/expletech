import { AxiosResponse } from 'axios';
import { axiosService } from '../axios.service';
import { urls } from '../../constants';
import {
  IAddedPost, IComment, IPost, IPostBody, IUser,
} from '../../types';

type Res<T> = Promise<AxiosResponse<T>>;

const postsService = {
  getPosts: ():Res<IPost[]> => axiosService.get(urls.posts),
  addPosts: (data:IPostBody):Res<IAddedPost> => axiosService.post(urls.posts, JSON.stringify(data)),
  getPostComments: (id:string):Res<IComment[]> => axiosService.get(`${urls.posts}/${id}/comments`),
  getAuthor: (id:string):Res<IUser> => axiosService.get(`${urls.users}/${id}`),
};

export { postsService };
