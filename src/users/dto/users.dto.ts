import { IsString, IsNumber, IsEmail, IsPhoneNumber } from 'class-validator';

export class UsersDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  address: string;

  @IsPhoneNumber()
  phone: number;

  @IsString()
  country: string;
}
