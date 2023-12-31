import bcryptjs from 'bcryptjs';
import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const verifyPost = async ({ id, admin }) => {
  const post = await db('posts').where({ id }).first();

  if (!post) {
    throw new NotFoundError('Maqola topilmadi');
  };

  return (
    await db('posts')
      .where({ id })
      .update({ is_verified: true, verified_by: admin })
      .returning('*')
  )[0];
};
