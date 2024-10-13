import { Injectable } from '@nestjs/common';
import Municipality from 'src/interfaces/municipality';

@Injectable()
export class AalborgService implements Municipality {
  name(): string {
    return "Aalborg Municipality";
  }
}
