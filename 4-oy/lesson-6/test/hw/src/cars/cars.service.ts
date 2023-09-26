import { Injectable } from '@nestjs/common';
import { CarsRepository } from './cars.repo';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async getCars() {
    return this.carsRepository.getCars();
  }

  async createCar(car) {
    let newCourse = this.carsRepository.createCar(car);

    return {
      msg: 'Create car',
      newCourse,
    };
  }

  async deleteCar(car_id) {
    let foundedCar = this.carsRepository.getOne(car_id);

    if (!foundedCar) {
      return { msg: 'Car topilmadi' };
    }
    this.carsRepository.deleteCar(car_id);
    return {
      msg: 'Car deleted!',
    };
  }

  async updateCar(car_id, updateCar) {
    let foundedCar = this.carsRepository.getOne(car_id);

    if (!foundedCar) {
      return {
        msg: 'Car not found!',
      };
    }
    let res = this.carsRepository.updateCar(car_id, updateCar);

    return {
      msg: 'Course updated!',
      res
    };
  }
}
