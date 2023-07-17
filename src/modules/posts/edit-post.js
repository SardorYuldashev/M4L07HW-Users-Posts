import db from '../../db/index.js';
import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';

export const editPost = async ({ id, author_id, ...changes }) => {

  const post = await db('posts').where({ id }).first();

  if (!post) {
    throw new NotFoundError('Maqola topilmadi');
  };

  if (post.user_id !== author_id) {
    throw new BadRequestError("Faqat o'z maqolangizni tahrirlay olasiz");
  };

  return (
    await db('posts')
      .where({ id })
      .update({ ...changes })
      .returning('*')
  )[0];
};
