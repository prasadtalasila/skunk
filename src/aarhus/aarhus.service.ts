import { Injectable } from '@nestjs/common';
import Municipality from 'src/interfaces/municipality';

@Injectable()
export class AarhusService implements Municipality {
  name(): string {
    return "Aarhus Municipality";
  }
}
