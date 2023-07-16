/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function (knex) {
  await knex('posts').del()
  await knex('posts').insert([
    {
      // id: 1,
      title: 'Salomlashish odobi',
      content: "Userlar faqat hammaning tasdiqlangan va o'zining tasdiqlanmagan postlarini ko'rishi mumkin",
      user_id: 3,
      is_verified: true,
      verified_by: 2
    },
    {
      // id: 2,
      title: 'Ikkinchi post',
      content: "Adminlar barcha postlarni ko'ra oladi",
      user_id: 4
    },
    {
      // id: 3,
      title: 'Oxirgi post',
      content: "Role 'admin' bo'lganlarni default 'super_admin' qo'shadi",
      user_id: 3,
      is_verified: true,
      verified_by: 2
    }
  ]);
};
