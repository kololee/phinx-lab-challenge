import { Module } from '@nestjs/common';
import { PokemonBattleController } from './pokemon-battle.controller';
import { PokemonBattleService } from './pokemon-battle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonBattle } from './pokemon-battle.entity';
import { Pokemon } from 'src/pokemon/pokemon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PokemonBattle]),
    TypeOrmModule.forFeature([Pokemon]),
  ],
  controllers: [PokemonBattleController],
  providers: [PokemonBattleService],
})
export class PokemonBattleModule {}
