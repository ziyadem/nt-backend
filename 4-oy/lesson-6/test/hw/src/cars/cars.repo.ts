let cars = [
  {
    id: 1,
    title: 'react',
    price: 12000,
    color: 'red',
  },
  {
    id: 2,
    title: 'Vue',
    price: 14000,
    color: 'grey',
  },
  {
    id: 3,
    title: 'Angular',
    price: 14000,
    color: 'black',
  },
  {
    id: 4,
    title: 'Nodejs',
    price: 13000,
    color: 'blue',
  },
];

export class CarsRepository {
  getCars() {
    return cars;
  }

  createCar(car) {
    cars.push({ ...car, id: car.length + 1 });

    return { ...car, id: cars.length + 1 };
  }

  getOne(car_id) {
    return cars.find((c) => c.id === +car_id);
  }

  deleteCar(car_id) {
    cars.forEach((c, idx) => {
      if (c.id == car_id) {
        cars.splice(idx, 1);
      }
    });
    return {
      car_id,
    };
  }

  updateCar(car_id, updateCar) {
    let { title, price,color } = updateCar;
    cars.forEach((c, idx) => {
      if (c.id == car_id) {
        c.title = title ? title : c.title;
        c.price = price ? price : c.price;
        c.color = color ? color : c.color;
      }
    });

    return {
      car_id,
    };
  }
}
