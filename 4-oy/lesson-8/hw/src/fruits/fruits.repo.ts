import { Inject } from "@nestjs/common";
import { KnexConfig } from "../KnexConfig/knexConfig";

export class FruitsRepository {
  @Inject()
  private readonly knexConfig: KnexConfig;

  getFruits(user_id) {
    const knex = this.knexConfig.instance;
    return knex.select("*").from("fruits").where({ created_by: user_id });
  }

  createCars(fruit, user_id) {
    const knex = this.knexConfig.instance;
    const { title, price } = fruit;

    return knex("fruits").insert({
      title,
      price,
      created_by: user_id,
    });
  }

  getOne(fruit, user_id) {
    const knex = this.knexConfig.instance;
    const { id } = fruit;
    return knex.select("*").from("fruits").where({ created_by: user_id, id });
  }

  deleteFruit(fruit, user_id) {
    const knex = this.knexConfig.instance;
    const { id: fruit_id } = fruit;
    return knex("fruits")
      .returning("*")
      .where({ created_by: user_id, id: fruit_id })
      .del();
  }

  updateFruit(fruit, updateFruit, fruit_id) {
    const knex = this.knexConfig.instance;

    return knex("fruits")
      .returning("*")
      .where({ created_by: fruit_id, id: fruit.id })
      .update(updateFruit);
  }
}
