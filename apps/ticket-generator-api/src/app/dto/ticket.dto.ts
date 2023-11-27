import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TicketDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  generalTickets: number;

  @IsNotEmpty()
  @IsNumber()
  seniorTickets: number;

  @IsNotEmpty()
  @IsNumber()
  childTickets: number;

  @IsNotEmpty()
  @IsNumber()
  idCard: number;
}
