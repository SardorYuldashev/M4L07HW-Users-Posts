import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removalAdmin = async ({ id }) => {
  const user = await db('users').where({ id }).first();

  if (!user) {
    throw new NotFoundError('Foydalanuvchi topilmadi');
  };

  return (
    await db('users')
      .where({ id })
      .update({ role: 'user' })
      .returning('*')
  )[0];
};