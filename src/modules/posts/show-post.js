import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showPost = async ({ id }, user) => {
  const post = await db('posts').where({ id, is_deleted: false }).first();

  if (!post) {
    throw new NotFoundError('Maqola topilmadi');
  };

  if (user.role === 'user') {
    if (post.user_id === user.id) {
      return post;
    };

    if (post.user_id !== user.id && post.is_verified == false) {
      throw new NotFoundError('Maqola topilmadi');
    };
  }

  return post;
};