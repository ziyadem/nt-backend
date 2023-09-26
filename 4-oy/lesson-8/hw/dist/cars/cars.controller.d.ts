import { CarsService } from "./cars.service";
interface ICars {
    title: string;
    price: string;
    color: string;
}
export declare class CarsController {
    private courseService;
    constructor(courseService: CarsService);
    getCarses(user: any): Promise<any>;
    getCars(course: any, user: any): Promise<any>;
    createCars(cars: ICars, user: any): Promise<{
        msg: string;
    }>;
    deleteCars(cars: any, user: any): Promise<{
        msg: string;
    }>;
    updateCars(cars: any, updatedCars: any, user: any): Promise<{
        msg: string;
    }>;
}
export {};
