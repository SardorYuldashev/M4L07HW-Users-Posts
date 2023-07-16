import bcryptjs from 'bcryptjs';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      // id: 1,
      first_name: 'Sardor',
      last_name: 'Yuldashev',
      username: 'sardorbek',
      password: bcryptjs.hashSync('123456', 10),
      role: 'super_admin'
    },
    {
      // id: 2,
      first_name: 'Imron',
      last_name: 'Abdusalimov',
      username: 'imron',
      password: bcryptjs.hashSync('123456', 10),
      role: 'admin'
    },
    {
      // id: 3,
      first_name: 'Sherzod',
      last_name: 'Arziyev',
      username: 'sherzod',
      password: bcryptjs.hashSync('123456', 10),
      role: 'user'
    },
    {
      // id: 4,
      first_name: 'Aziz',
      last_name: 'Nabiyev',
      username: 'aziz',
      password: bcryptjs.hashSync('123456', 10),
      role: 'user'
    },
    {
      // id: 5,
      first_name: 'Obid',
      last_name: "Xo'jayev",
      username: 'obid',
      password: bcryptjs.hashSync('123456', 10),
      role: 'user'
    }
  ]);
};
