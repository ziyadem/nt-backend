
import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsRepository } from './cars.repo';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async getCarses(user) {
    const { user_id } = user;
    return this.carsRepository.getCars(user_id);
  }

  async getCars(course, { user_id }) {
    let res = await this.carsRepository.getOne(course, user_id);
    if (res.length == 0)
      return new NotFoundException(`Cars ${course.id} not found!`);

    return res;
  }

  async createCars(cars, user) {
    const { user_id } = user;
    let newCourse = await this.carsRepository.createCars(cars, user_id);
    return {
      msg: "Create course",
    };
  }

  async deleteCars(cars, { user_id }) {
    let res = await this.carsRepository.deleteCars(cars, user_id);
    if (res.length == 0) {
      return { msg: "cars topilmadi" };
    }
    return {
      msg: "cars deleted!",
    };
  }

  async updateCars(cars, updateCars, { user_id }) {
    let result = await this.carsRepository.updateCars(
      cars,
      updateCars,
      user_id
    );

    if (result.length == 0) {
      return {
        msg: "Cars not found!",
      };
    }

    return {
      msg: "Cars updated!",
    };
  }
}

