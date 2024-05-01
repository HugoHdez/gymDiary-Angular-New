export interface User {
  id: number;
  email: string;
  name: string;
  surname: string;
  username: string;
  birthdate: Date;
  gender: Gender;
  weight: number;
  height: number;
}

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
}
