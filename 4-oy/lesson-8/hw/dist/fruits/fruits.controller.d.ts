import { FruitsService } from "./fruits.service";
interface IFruit {
    title: string;
    price: string;
}
export declare class FruitsController {
    private fruitsService;
    constructor(fruitsService: FruitsService);
    getFruits(user: any): Promise<any>;
    getFruit(fruits: any, user: any): Promise<any>;
    createFruit(fruit: IFruit, user: any): Promise<{
        msg: string;
    }>;
    deleteFruit(fruit: any, user: any): Promise<{
        msg: string;
    }>;
    updateFruit(fruit: any, updatedFruit: any, user: any): Promise<{
        msg: string;
    }>;
}
export {};
