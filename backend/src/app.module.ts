import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonBattleModule } from './pokemon-battle/pokemon-battle.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    PokemonModule,
    PokemonBattleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
