import { Controller, Get, Inject } from '@nestjs/common';
import Municipality from './interfaces/municipality';
import { MUNICIPALITY_SERVICE } from './interfaces/municipality';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private configService: ConfigService,
    @Inject(MUNICIPALITY_SERVICE) private readonly municipality: Municipality) {}

  @Get()
  getHello(): string {
    return this.municipality.name();
  }
}
