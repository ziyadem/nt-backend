import { Inject } from "@nestjs/common";
import { KnexConfig } from "../KnexConfig/knexConfig";

export class AnimalsRepository {
  @Inject()
  private readonly knexConfig: KnexConfig;

  getAnimals(user_id) {
    const knex = this.knexConfig.instance;
    return knex.select("*").from("animals").where({ created_by: user_id });
  }

  createAnimals(animals, user_id) {
    const knex = this.knexConfig.instance;
    const { title, color } = animals;

    return knex("animals").insert({
      title,
      color,
      created_by: user_id,
    });
  }

  getOne(animals, user_id) {
    const knex = this.knexConfig.instance;
    const { id } = animals;
    return knex.select("*").from("animals").where({ created_by: user_id, id });
  }

  deleteAnimals(animals, user_id) {
    const knex = this.knexConfig.instance;
    const { id: animals_id } = animals;
    return knex("fruits")
      .returning("*")
      .where({ created_by: user_id, id: animals_id })
      .del();
  }

  updateAnimals(animals, updateAnimals, animals_id) {
    const knex = this.knexConfig.instance;

    return knex("animals")
      .returning("*")
      .where({ created_by: animals_id, id: animals.id })
      .update(updateAnimals);
  }
}
