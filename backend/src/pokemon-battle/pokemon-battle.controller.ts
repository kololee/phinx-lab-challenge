import { Body, Controller, Post } from '@nestjs/common';
import { PokemonBattleService } from './pokemon-battle.service';
import { PokemonBattle } from './pokemon-battle.entity';
import { CreateBattleDto } from './dto/create-battle.dto';

@Controller('pokemon-battle')
export class PokemonBattleController {
  constructor(private readonly pokemonBattleService: PokemonBattleService) {}

  @Post()
  async create(@Body() contenders: CreateBattleDto): Promise<PokemonBattle> {
    return this.pokemonBattleService.battleBetweenTwoPokemons(contenders);
  }
}
