import { Inject } from "@nestjs/common";
import { KnexConfig } from "../KnexConfig/knexConfig";

const cars = [];
export class CarsRepository {
  @Inject()
  private readonly knexConfig: KnexConfig;

  getCars(user_id) {
    const knex = this.knexConfig.instance;
    return knex.select("*").from("cars").where({ created_by: user_id });
  }

  createCars(cars, user_id) {
    const knex = this.knexConfig.instance;
    const { title, price, color } = cars;

    return knex("cars").insert({
      title,
      price,
      color,
      created_by: user_id,
    });
  }

  getOne(cars, user_id) {
    const knex = this.knexConfig.instance;
    const { id } = cars;
    return knex.select("*").from("cars").where({ created_by: user_id, id });
  }

  deleteCars(cars, user_id) {
    const knex = this.knexConfig.instance;
    const { id: cars_id } = cars;
    return (
      knex("cars")
        .returning("*")
        .where({ created_by: user_id, id: cars_id })
        .del()
    );
  }

  updateCars(cars, updateCars, cars_id) {
    const knex = this.knexConfig.instance;

    return knex("cars")
      .returning("*")
      .where({ created_by: cars_id, id: cars.id })
      .update(updateCars);
  }
}
