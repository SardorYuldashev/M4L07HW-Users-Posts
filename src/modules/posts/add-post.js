import db from '../../db/index.js';

export const addPost = async (id, payload) => {
  const result = await db('posts')
    .insert({ user_id: id, ...payload })
    .returning('*');

  return result[0];
};