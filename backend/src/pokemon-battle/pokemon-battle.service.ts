import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonBattle } from './pokemon-battle.entity';
import { Repository } from 'typeorm';
import { Pokemon } from 'src/pokemon/pokemon.entity';
import { CreateBattleDto } from './dto/create-battle.dto';

@Injectable()
export class PokemonBattleService {
  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>,
    @InjectRepository(PokemonBattle)
    private pokemonBattleRepository: Repository<PokemonBattle>,
  ) {}

  async findAll(): Promise<PokemonBattle[]> {
    return this.pokemonBattleRepository.find();
  }

  /*
  - El pokemon con la velocidad más alta hace el primer ataque, si son iguales, el pokemon con el ataque más alto va primero.
  - Para calcular el daño, resta la defensa del ataque (ataque-defensa). La diferencia es el daño. Si el ataque es igual o menor que la defensa el daño es 1.
  - El daño lo restas del HP.
  - Los pokemon pelearán por turnos. Todos los turnos serán calculados in el mismo request. Es por esto por lo que el endpoint debe retornar la data del ganador en la misma llamada.
  - El ganador es el que se reste el HP del enemigo a cero. 
  */

  async battleBetweenTwoPokemons(
    contenders: CreateBattleDto,
  ): Promise<PokemonBattle> {
    const pokemon1 = await this.pokemonRepository.findOne({
      where: { id: contenders.challenger },
    });
    const pokemon2 = await this.pokemonRepository.findOne({
      where: { id: contenders.contender },
    });
    const firstAttacker: Pokemon =
      pokemon1.speed === pokemon2.speed
        ? Math.random() < 0.5
          ? pokemon1
          : pokemon2
        : Math.max(pokemon1.speed, pokemon2.speed) === pokemon1.speed
          ? pokemon1
          : pokemon2;
    const secondAttacker: Pokemon =
      firstAttacker === pokemon1 ? pokemon2 : pokemon1;

    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      const damage1: number =
        firstAttacker.attack - secondAttacker.defense <= 0
          ? 1
          : firstAttacker.attack - secondAttacker.defense;
      const damage2: number =
        secondAttacker.attack - firstAttacker.defense <= 0
          ? 1
          : secondAttacker.attack - firstAttacker.defense;

      pokemon1.hp -= damage2;
      pokemon2.hp -= damage1;
    }

    const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;

    const newPokemonBattle = this.pokemonBattleRepository.create({
      challenger: pokemon1,
      contender: pokemon2,
      winner: winner,
    });

    return this.pokemonBattleRepository.save(newPokemonBattle);
  }
}
