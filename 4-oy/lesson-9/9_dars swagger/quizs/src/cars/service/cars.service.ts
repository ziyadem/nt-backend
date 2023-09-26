import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsRepository } from '../repository/cars.repo';
import { CreateOrUpdateCarsDto, CurrentUserDto } from '../dto/cars.dto';


@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async getCarses(user:CurrentUserDto) {
    return this.carsRepository.getCars(user);
  }

  async getCars(course:CreateOrUpdateCarsDto, user:CurrentUserDto) {
    let res = await this.carsRepository.getOne(course, user);
    if (res.length == 0)
      return new NotFoundException(`Cars  not found!`);

    return res;
  }

  async createCars(cars, user) {
    const { user_id } = user;
    let newCourse = await this.carsRepository.createCars(cars, user_id);
    return {
      msg: 'Create course',
    };
  }

  async deleteCars(cars, { user_id }) {
    let res = await this.carsRepository.deleteCars(cars, user_id);
    if (res.length == 0) {
      return { msg: 'cars topilmadi' };
    }
    return {
      msg: 'cars deleted!',
    };
  }

  async updateCars(cars, updateCars, user) {
    let result = await this.carsRepository.updateCars(
      cars,
      updateCars,
      user,
    );

    if (result.length == 0) {
      return {
        msg: 'Cars not found!',
      };
    }

    return {
      msg: 'Cars updated!',
    };
  }
}
