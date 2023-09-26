import { CarsRepository } from './cars.repo';
export declare class CarsService {
    private carsRepository;
    constructor(carsRepository: CarsRepository);
    getCarses(user: any): Promise<any>;
    getCars(course: any, { user_id }: {
        user_id: any;
    }): Promise<any>;
    createCars(cars: any, user: any): Promise<{
        msg: string;
    }>;
    deleteCars(cars: any, { user_id }: {
        user_id: any;
    }): Promise<{
        msg: string;
    }>;
    updateCars(cars: any, updateCars: any, { user_id }: {
        user_id: any;
    }): Promise<{
        msg: string;
    }>;
}
