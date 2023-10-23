export class UserCreateDto {
  name: string;
  surname: string;
  email: string;
  password: string;
  birtdate: Date;
}

export class UserLoginDto {
  email: string;
  password: string;
}