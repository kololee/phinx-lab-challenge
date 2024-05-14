import { MigrationInterface, QueryRunner } from 'typeorm';

/* Insert this list of pokemon into the pokemon table
[
    {
      "id": "pokemon-1",
      "name": "Pikachu",
      "attack": 4,
      "defense": 3,
      "hp": 3,
      "speed": 6,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
    },
    {
      "id": "pokemon-2",
      "name": "Charmander",
      "attack": 4,
      "defense": 3,
      "hp": 3,
      "speed": 4,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
    },
    {
      "id": "pokemon-3",
      "name": "Squirtle",
      "attack": 3,
      "defense": 4,
      "hp": 3,
      "speed": 3,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
    },
    {
      "id": "pokemon-4",
      "name": "Bulbasur",
      "attack": 4,
      "defense": 3,
      "hp": 3,
      "speed": 3,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
    },
    {
      "id": "pokemon-5",
      "name": "Eevee",
      "attack": 4,
      "defense": 3,
      "hp": 4,
      "speed": 5,
      "type": "Type",
      "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
    }
  ]*/

export class InitData1715699938647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "pokemon"("name", "attack", "defense", "hp", "speed", "type", "imageUrl") VALUES ('Pikachu', 4, 3, 3, 6, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png')`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon"("name", "attack", "defense", "hp", "speed", "type", "imageUrl") VALUES ('Charmander', 4, 3, 3, 4, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png')`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon"("name", "attack", "defense", "hp", "speed", "type", "imageUrl") VALUES ('Squirtle', 3, 4, 3, 3, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png')`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon"("name", "attack", "defense", "hp", "speed", "type", "imageUrl") VALUES ('Bulbasur', 4, 3, 3, 3, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png')`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon"("name", "attack", "defense", "hp", "speed", "type", "imageUrl") VALUES ('Eevee', 4, 3, 4, 5, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "pokemon" WHERE "name" = 'Pikachu'`);
    await queryRunner.query(
      `DELETE FROM "pokemon" WHERE "name" = 'Charmander'`,
    );
    await queryRunner.query(`DELETE FROM "pokemon" WHERE "name" = 'Squirtle'`);
    await queryRunner.query(`DELETE FROM "pokemon" WHERE "name" = 'Bulbasur'`);
    await queryRunner.query(`DELETE FROM "pokemon" WHERE "name" = 'Eevee'`);
  }
}
