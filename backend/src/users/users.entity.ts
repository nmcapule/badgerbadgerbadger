import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  @ApiProperty({ readOnly: true })
  id: number;

  @Column({ name: 'email' })
  @ApiProperty()
  email: string;

  @Column({ name: 'display_name ' })
  @ApiProperty()
  displayName: string;
}
