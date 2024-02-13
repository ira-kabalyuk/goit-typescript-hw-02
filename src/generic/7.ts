
/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type RoleDescription = {
  [key: string]: string;
};

const roleDescription: RoleDescription = {
  [UserRole.admin]: 'Адміністратор',
  [UserRole.editor]: 'Редактор',
  [UserRole.guest]: 'Гість',
};


// Замініть наступний код на версію за допомогою Record
type RoleDescriptionType = Record<string, string>;
  
const RoleDescription: RoleDescriptionType = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

export {};