import { Injectable, NotFoundException } from "@nestjs/common";
import { FruitsRepository } from "./fruits.repo";

@Injectable()
export class FruitsService {
  constructor(private fruitRepository: FruitsRepository) {}

  async getFruits(user) {
    const { user_id } = user;
    return this.fruitRepository.getFruits(user_id);
  }

  async getFruit(fruit, { user_id }) {
    let res = await this.fruitRepository.getOne(fruit, user_id);
    if (res.length == 0)
      return new NotFoundException(`Fruit ${fruit.id} not found!`);

    return res;
  }

  async createFruit(fruit, user) {
    const { user_id } = user;
    let newCourse = await this.fruitRepository.createCars(fruit, user_id);
    return {
      msg: "Create fruit",
    };
  }

  async updateFruit(fruit, updateFruit, { user_id }) {
    let result = await this.fruitRepository.updateFruit(
      fruit,
      updateFruit,
      user_id
    );

    if (result.length == 0) {
      return {
        msg: "Fruit not found!",
      };
    }

    return {
      msg: "Fruit updated!",
    };
  }

    async deleteFruit(fruit, { user_id }) {
      let res = await this.fruitRepository.deleteFruit(fruit, user_id);
      if (res.length == 0) {
        return { msg: "fruit topilmadi" };
      }
      return {
        msg: "fruit deleted!",
      };
  }
}
