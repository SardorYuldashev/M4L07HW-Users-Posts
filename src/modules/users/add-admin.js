import bcryptjs from 'bcryptjs';
import db from '../../db/index.js';

export const addAdmin = async (payload) => {
  const hashedPassword = await bcryptjs.hash(payload.password, 10);

  const result = await db('users')
    .insert({ ...payload, password: hashedPassword, role: 'admin' })
    .returning('*');

  return result[0];
};