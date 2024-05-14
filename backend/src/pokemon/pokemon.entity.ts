import { PokemonBattle } from 'src/pokemon-battle/pokemon-battle.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'pokemon' })
@Index(['name'])
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  hp: number;

  @Column()
  speed: number;

  @Column()
  type: string;

  @Column()
  imageUrl: string;

  @OneToMany(
    () => PokemonBattle,
    (battle) => battle.challenger || battle.contender,
  )
  battles: PokemonBattle[];
}
