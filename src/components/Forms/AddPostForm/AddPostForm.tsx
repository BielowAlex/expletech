import React from 'react';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

import './AddPostForm.scss';
import { IPostFormData } from '../../../types';
import { useAppDispatch } from '../../../hooks';
import { postsActions } from '../../../redux/slices';

const schema = Joi.object({
  title: Joi.string().min(5).max(160).required()
    .label('Title'),
  desc: Joi.string().min(15).max(400).required()
    .label('desc'),
});

const AddPostForm:React.FC = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<IPostFormData>({ resolver: joiResolver(schema) });

  const setInputHeight = (event: React.ChangeEvent<HTMLTextAreaElement>, defaultWidth:string) => {
    const target = event.target;

    target.style.height = defaultWidth;
    target.style.height = `${target.scrollHeight}px`;
  };

  const addPost = (data:IPostFormData) => {
    const { title, desc } = data;

    dispatch(postsActions.addPost({ body: desc, title, userId: 1 }));
  };
  return (
    <form className="post_modal-form" onSubmit={handleSubmit((data) => addPost(data))}>
      <div className="post_modal-form__item">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="title" className="post_modal-form__lb">Title:</label>
        <input {...register('title')} className="post_modal-form__in" type="text" name="title" id="title" />
        {errors.title && <p className="post_modal-form__error">{errors.title.message}</p> }
      </div>
      <div className="post_modal-form__item">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="post_modal-form__lb" htmlFor="desc">Description:</label>
        <textarea
          {...register('desc')}
          className="post_modal-form__ta"
          name="desc"
          id="desc"
          required
          onChange={(event) => setInputHeight(event, '31px')}
        />
        {errors.desc && <p className="post_modal-form__error">{errors.desc.message}</p> }
      </div>
      <button className="post_modal-form__submit" type="submit">Send</button>
    </form>
  );
};

export { AddPostForm };
