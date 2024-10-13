import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AarhusService } from './aarhus/aarhus.service';
import { AalborgService } from './aalborg/aalborg.service';
import { MUNICIPALITY_SERVICE } from './interfaces/municipality';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: MUNICIPALITY_SERVICE,
      useFactory: (configService: ConfigService) => {
        const municipality = configService.get<string>('MUNICIPALITY');
        if (municipality === 'aarhus') {
          return new AarhusService();
        } else if (municipality === 'aalborg') {
          return new AalborgService();
        }
        throw new Error('Unknown municipality');
      },
      inject: [ConfigService],
    },
    AalborgService,
    AarhusService
  ],
  exports: [MUNICIPALITY_SERVICE],
})
export class AppModule {}
