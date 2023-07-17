import db from '../../db/index.js';
import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';

export const appointAdmin = async ({ id }) => {
  const user = await db('users').where({ id }).first();

  if (!user) {
    throw new NotFoundError('Foydalanuvchi topilmadi');
  };

  if (user.role === 'admin') {
    throw new BadRequestError(`Foydalanuvchining roli avvaldan admin`);
  };

  return (
    await db('users')
      .where({ id })
      .update({ role: 'admin' })
      .returning('*')
  )[0];
};