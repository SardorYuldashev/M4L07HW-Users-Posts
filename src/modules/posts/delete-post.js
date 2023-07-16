import db from '../../db/index.js';
import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';

export const deletePost = async ({ id, user }) => {

  const post = await db('posts').where({ id }).first();

  if (!post) {
    throw new NotFoundError('Maqola topilmadi');
  };

  if (post.user_id !== user.id && user.role === 'user') {
    throw new BadRequestError("Faqat o'z maqolangizni o'chira olasiz");
  };

  return (
    await db('posts')
      .where({ id })
      .update({ is_deleted: true })
      .returning('*')
  )[0];
};
