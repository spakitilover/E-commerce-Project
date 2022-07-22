import { IsDate, IsEmail, IsString } from 'class-validator';

export class UsersDto {
  @IsString()
  name: string;
  @IsString()
  firstname: string;
  @IsString()
  lastname: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsDate()
  createdAt: Date;
}
