import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AarhusService } from './aarhus/aarhus.service';
import { AalborgService } from './aalborg/aalborg.service';
import { MUNICIPALITY_SERVICE } from './interfaces/municipality';

@Module({
  imports: [],
  controllers: [AppController],
  
  providers: [
    {
      provide: MUNICIPALITY_SERVICE,
      useClass: AalborgService,
    },
    AalborgService,
    AarhusService
  ],
  exports: [MUNICIPALITY_SERVICE],
})
export class AppModule {}
