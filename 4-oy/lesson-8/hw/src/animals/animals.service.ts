import { Injectable, NotFoundException } from '@nestjs/common';
import { AnimalsRepository } from './animals.repo';

@Injectable()
export class AnimalsService {
  constructor(private animalsRepository: AnimalsRepository) {}

  async getAnimals(user) {
    const { user_id } = user;
    return this.animalsRepository.getAnimals(user_id);
  }

  async getAnimal(animals, { user_id }) {
    let res = await this.animalsRepository.getOne(animals, user_id);
    if (res.length == 0)
      return new NotFoundException(`Fruit ${animals.id} not found!`);

    return res;
  }

  async createAnimals(animals, user) {
    const { user_id } = user;
    let newCourse = await this.animalsRepository.createAnimals(
      animals,
      user_id
    );
    return {
      msg: "Create animals",
    };
  }

  async updateAnimal(animal, updateAnimal, { user_id }) {
    let result = await this.animalsRepository.updateAnimals(
      animal,
      updateAnimal,
      user_id
    );

    if (result.length == 0) {
      return {
        msg: "Animal not found!",
      };
    }

    return {
      msg: "animal updated!",
    };
  }

  async deleteAnimal(animal, { user_id }) {
    let res = await this.animalsRepository.deleteAnimals(animal, user_id);
    if (res.length == 0) {
      return { msg: "animals topilmadi" };
    }
    return {
      msg: "animals deleted!",
    };
  }
}
