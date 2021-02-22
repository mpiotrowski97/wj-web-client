export interface Role {
  label: string;
  value: string;
}

export const ROLE_USER = 'ROLE_USER';
export const ROLE_MODERATOR = 'ROLE_MODERATOR';
export const ROLE_ADMINISTRATOR = 'ROLE_ADMINISTRATOR';

export const ROLES: Role[] = [
  {
    label: 'User',
    value: ROLE_USER
  },
  {
    label: 'Moderator',
    value: ROLE_MODERATOR,
  },
  {
    label: 'Administrator',
    value: ROLE_ADMINISTRATOR
  }
];
