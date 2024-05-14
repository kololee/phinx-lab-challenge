import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Pokemon } from 'src/pokemon/pokemon.entity';

@Entity({ name: 'pokemon_battles' })
@Index(['created_at'])
export class PokemonBattle {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.battles, { eager: true })
  @JoinColumn({ name: 'challenger_id' })
  challenger: Pokemon;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.battles, { eager: true })
  @JoinColumn({ name: 'contender_id' })
  contender: Pokemon;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.battles, { eager: true })
  @JoinColumn({ name: 'winner_id' })
  winner: Pokemon;
}
