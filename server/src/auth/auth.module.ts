import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { LocalStrategyService } from './passport/local-strategy/local-strategy.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { JwtStrategyService } from './passport/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, LocalStrategyService, JwtStrategyService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
