import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1715699253976 implements MigrationInterface {
  name = 'NewMigration1715699253976';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "type" varchar NOT NULL, "imageUrl" varchar NOT NULL, CONSTRAINT "UQ_1cb8fc72a68e5a601312c642c82" UNIQUE ("name"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1cb8fc72a68e5a601312c642c8" ON "pokemon" ("name") `,
    );
    await queryRunner.query(
      `CREATE TABLE "pokemon_battles" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "challenger_id" integer, "contender_id" integer, "winner_id" integer)`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dbb3f642eb89f860a2f5052cff" ON "pokemon_battles" ("created_at") `,
    );
    await queryRunner.query(`DROP INDEX "IDX_dbb3f642eb89f860a2f5052cff"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_pokemon_battles" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "challenger_id" integer, "contender_id" integer, "winner_id" integer, CONSTRAINT "FK_43738ec4e603f72916d22ce6a81" FOREIGN KEY ("challenger_id") REFERENCES "pokemon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5c4d0c2ea7de01110c0a5312750" FOREIGN KEY ("contender_id") REFERENCES "pokemon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_179a9b42c1f16fbddedff871c52" FOREIGN KEY ("winner_id") REFERENCES "pokemon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_pokemon_battles"("id", "created_at", "challenger_id", "contender_id", "winner_id") SELECT "id", "created_at", "challenger_id", "contender_id", "winner_id" FROM "pokemon_battles"`,
    );
    await queryRunner.query(`DROP TABLE "pokemon_battles"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_pokemon_battles" RENAME TO "pokemon_battles"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dbb3f642eb89f860a2f5052cff" ON "pokemon_battles" ("created_at") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_dbb3f642eb89f860a2f5052cff"`);
    await queryRunner.query(
      `ALTER TABLE "pokemon_battles" RENAME TO "temporary_pokemon_battles"`,
    );
    await queryRunner.query(
      `CREATE TABLE "pokemon_battles" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "challenger_id" integer, "contender_id" integer, "winner_id" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "pokemon_battles"("id", "created_at", "challenger_id", "contender_id", "winner_id") SELECT "id", "created_at", "challenger_id", "contender_id", "winner_id" FROM "temporary_pokemon_battles"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_pokemon_battles"`);
    await queryRunner.query(
      `CREATE INDEX "IDX_dbb3f642eb89f860a2f5052cff" ON "pokemon_battles" ("created_at") `,
    );
    await queryRunner.query(`DROP INDEX "IDX_dbb3f642eb89f860a2f5052cff"`);
    await queryRunner.query(`DROP TABLE "pokemon_battles"`);
    await queryRunner.query(`DROP INDEX "IDX_1cb8fc72a68e5a601312c642c8"`);
    await queryRunner.query(`DROP TABLE "pokemon"`);
  }
}
