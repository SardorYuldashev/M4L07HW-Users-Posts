/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function (knex) {
  await knex('posts').del()
  await knex('posts').insert([
    {
      // id: 1,
      title: "18 iyul kuni harorat 43 darajagacha ko'tariladi",
      content: `Toshkent shahri. Havo biroz bulutli bo'ladi, yog'ingarchilik kutilmaydi. Shamol sharqdan 5-10 m/s tezlikda esadi. Harorat kechasi +22...+24 daraja, kunduzi +38...+40 daraja bo'ladi.
      Qoraqalpog'iston Respublikasi va Xorazm viloyati. Havo o'zgarib turadi, kechasi va ertalab ba'zi joylarda qisqa muddatli yomg'ir yog'adi, momaqaldiroq bo'ladi. Shamol g'arbdan 7-12 m/s tezlikda esadi, ba'zi joylarda 15-20 m/s gacha kuchayishi, ayrim joylarda chang-to'zon bilan kuzatilishi mumkin. Harorat kechasi +18...+23 daraja, kunduzi +30...+35 daraja bo'ladi.`,
      user_id: 4,
      is_verified: true,
      verified_by: 2
    },
    {
      // id: 2,
      title: `Ispaniyaning Palma orolida yong'in tufayli 4000 kishi evakuatsiya qilindi`,
      content: `Bir kun avval o'rmon yong'ini sodir bo'lgan Ispaniyaning Kanar orollari arxipelagidagi Palma orolida 4000 dan ortiq odam evakuatsiya qilindi. Bu haqda 16 iyul, yakshanba kuni mahalliy hokimiyat xabar berdi.
      Yong'inlarni o'chirishga 300 ga yaqin o't o'chiruvchilar, shuningdek, 11 vertolyot va samolyotlar jalb etilgan. «Yong'in shamol, iqlim sharoiti va issiqlik tufayli juda tez tarqaldi», dedi Kanar orollari mintaqaviy hukumati prezidenti Fernando Klavixo o'z bayonotida. Mahalliy hokimiyat ma'lumotlariga ko'ra, 4700 gektardan ortiq maydon yong'indan zarar ko'rgan.`,
      user_id: 4
    },
    {
      // id: 3,
      title: `Tinch okeanida uch oy suzib yurgan dengizchi qutqarildi`,
      content: `Tinch okeanida 51 yoshli avstraliyalik Tim Sheddok qutqarildi, u iti bilan birga uch oy davomida ochiq okeanda o'z kemasida suzib yurgan. Bu haqda 16 iyul, yakshanba kuni Avstraliyaning 9 News telekanali xabar berdi. 
      Sheddok aprel oyida Meksikaning La-Pas portidan katamaranda yo'lga chiqqan. U Tinch okeanidagi Fransiya Polineziyasi arxipelagiga qadar 6000 km masofani bosib o'tishni rejalashtirgan. Uning iti Bella kemada u bilan birga bo'lgan.      
      Sayohat boshlanganidan bir necha hafta o'tgach, ular katamarandagi elektronika va radio aloqalarini o'chirib qo'yib, kemani boshqarib bo'lmaydigan holatga keltirgan bo'ronga duch kelgan. Sheddok va uning iti 6 iyul kuni baliq ovlash kemasidagi vertolyot tomonidan aniqlanmaguncha, uch oy davomida ochiq okeanda suzib yurgan.`,
      user_id: 8,
      is_verified: true,
      verified_by: 3
    },
    {
      // id: 4,
      title: `Viloyatlarda reanimatologlarning maoshi keskin pasayib ketdi. Muammo nimada?`,
      content: `O'tgan oyda kuzatilgan o'qituvchilarning ta'til pullari kamayishi bilan bog'liq muammo ortidan endi shifokorlar ham maoshi qisqarganidan shikoyat qilmoqda.

      Respublika viloyatlarida tuman va shaharlardagi shifoxonalarning anesteziologik reanimatologoya bo'limlari vrachlarining maoshlari 20 foizgacha qisqarib ketgan. Bu muammo Toshkent shahri va Toshkent viloyatidan boshqa hududlardagi shifoxonalarda kuzatilmoqda. Kun.uz tahririyatga kelib tushgan murojaatlar asosida vaziyatni o'rgandi.
      
      Shu paytgacha shahar va tuman markazlaridagi shoshilinch tibbiy bo'limlari xodimlariga ish haqi Vazirlar Mahkamasining 2005 yildagi 276-sonli qarori asosida to'lanardi.`,
      user_id: 8
    },
    {
      // id: 5,
      title: `Erdo'g'an Shvetsiyaning NATOga a'zoligini ma'qulladi. Bu nimani anglatadi?`,
      content: `2022 yil yozida, Rossiyaning Ukrainaga keng ko'lamli bosqini fonida, Shvetsiya va Finlandiya NATOga a'zo bo'lib kirish uchun zayavka topshirgandi. Alyans qoidalariga ko'ra, bu murojaatlar barcha ishtirokchi davlatlar tomonidan ma'qullanishi talab etiladi, ammo Turkiya ikki mamlakatni ham Kurdiston ishchi partiyasini qo'llashda ayblab (Anqara bu partiyani «terrorchilik tashkiloti» deb biladi), qarshi chiqdi. Finlandiya barcha shartlarni bajardi va allaqachon alyans a'zosiga aylandi, ammo Shvetsiya bilan bog'liq vaziyat murakkab tus oldi. NATOning Vilnyusdagi sammiti arafasida Rajab Toyyib Erdo'g'an agar Turkiya Yevroittifoqqa qabul qilinsa, uning mamlakati Shvetsiyaning alyansga q'shilishiga rozi bo'lishini aytdi. Ammo bir necha soat o'tib baribir Stokholmning zayavkasini qo'llashga rozilik berdi. «Meduza» sharqshunos Ruslan Suleymanovdan Erdo'g'an nega aynan bunday harakat qilgani va bu unga yaqinda bo'lib o'tgan saylovlarda yo'qotishi mumkin bo'lgan hokimiyatni saqlab qolishda qanday ko'mak berishi borasida so'radi.`,
      user_id: 6,
      is_verified: true,
      verified_by: 2
    },
    {
      // id: 6,
      title: `O'zbekiston olmasi asosan Qozog'iston bozoriga eksport qilinmoqda`,
      content: `2023 yilning yanvar-may oylarida O'zbekiston 7 ta davlatga qiymati 1,8 mln AQSh dollariga teng bo'lgan 4,4 ming tonna olma eksport qilgan. 

      Statistika agentligi ma'lumotlariga ko'ra, olma eksporti 2022 yilning mos davri bilan solishtirilganda 702 tonnaga kamaygan.
      
      2023 yilning 5 oyida O'zbekiston eng ko'p olma eksport qilgan davlatlar orasida Qozog'iston yetakchilik qilyapti – 2,5 ming tonna.
      
      Ushbu ko'rsatkich qolgan davlatlar kesimida quyidagicha ko'rinishga ega:
      
      Rossiya – 764 tonna;
      Turkmaniston – 649 tonna;
      Qirg'iziston – 444 tonna;
      Tojikiston – 125 tonna.`,
      user_id: 6
    },
    {
      // id: 7,
      title: `O'zbekistonda 1 km yo'l 950 ming dollarga tushadi. Boshqa davlatlarda-chi? `,
      content: `Agar yo'llarni xalqaro va mahalliy ahamiyatiga qarab toifalasak, 1-toifadagi yo'llar yirik xalqaro avtomagistrallar bo'lsa, bizning o'zimiz va ko'zimiz o'rgangan 4 polosali yo'llar 3- va 4-toifadagi yo'llar hisoblanadi. Avtomobil yo'llar qo'mitasining endilikda sobiq rahbari Abdurahmon Abduvaliyev ham (1 km = 950 ming AQSh dollari) aynan shunday toifadagi yo'llarni nazarda tutgan edi. 

      Boshqa davlatlarda... 
      
      2022 yil ma'lumotlariga ko'ra, Rossiyada 3-toifadagi 1 kmli yo'lni qurish uchun 56 mln rubl (hozirda taxminan 620 ming AQSh dollari) sarflanar ekan. “Rossiya transporti” nashrining qo'shimcha qilishicha, AQShda bu ko'rsatkich 270 million rublga (qariyb 3 mln dollar), Xitoyda esa 226 million rublga (2,5 mln dollar) yetadi. `,
      user_id: 7,
      is_verified: true,
      verified_by: 2
    },
    {
      // id: 8,
      title: `AQSh, Janubiy Koreya va Yaponiya raketalarga qarshi qo'shma mashg'ulot o'tkazdi`,
      content: `16 iyul, yakshanba kuni AQSh, Janubiy Koreya va Yaponiya Shimoliy Koreyadan kelayotgan yadroviy va raketa tahdidlariga qarshi qo'shma harbiy-dengiz kuchlari mudofaa mashg'ulotlarini o'tkazdi, deb xabar berdi Janubiy Koreya vakillari.

      Janubiy Koreya harbiy-dengiz kuchlariga ko'ra, Yapon dengizining xalqaro suvlarida bo'lib o'tgan manyovrlarda Amerikaning Aegis ko'p funksiyali axborot va boshqaruv tizimi bilan jihozlangan uchta – har bir mamlakatdan bittadan esminets qatnashgan. Harbiylar ma'lumotiga ko'ra, mashg'ulotlarda Shimoliy Koreya ballistik raketasi uchirilishiga javoban ittifoqchilar harakati ko'rib chiqilgan, raketa parvozi esa kompyuter yordamida modellashtirilgan`,
      user_id: 7
    },
  ]);
};
