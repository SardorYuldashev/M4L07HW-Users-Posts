import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showPost = async ({ id }) => {
  const post = await db('posts').where({ id, is_deleted: false }).first();

  if (!post) {
    throw new NotFoundError('Foydalanuvchi topilmadi');
  };

  return post;
};