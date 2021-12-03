import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  roles: string[];
}
export class UserUpdateDto {
  @ApiProperty()
  password: string;

  @ApiProperty()
  roles: string[];
}

export class UsersListDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  id?: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  roles: string[];
}
