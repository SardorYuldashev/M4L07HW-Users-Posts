import db from '../../db/index.js';

export const listPosts = async (user) => {
  let posts

  if (user.role === 'user') {
    posts = (await db('posts').where({ is_verified: true, is_deleted: false }).select('*'));

    posts = [...(await db('posts').where({ user_id: user.id, is_verified: false, is_deleted: false }).select('*')), ...posts];

    return posts;
  };

  posts = db('posts').where({ is_deleted: false }).select('*');

  return posts;
};