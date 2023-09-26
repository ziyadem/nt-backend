import { FruitsRepository } from "./fruits.repo";
export declare class FruitsService {
    private fruitRepository;
    constructor(fruitRepository: FruitsRepository);
    getFruits(user: any): Promise<any>;
    getFruit(fruit: any, { user_id }: {
        user_id: any;
    }): Promise<any>;
    createFruit(fruit: any, user: any): Promise<{
        msg: string;
    }>;
    updateFruit(fruit: any, updateFruit: any, { user_id }: {
        user_id: any;
    }): Promise<{
        msg: string;
    }>;
    deleteFruit(fruit: any, { user_id }: {
        user_id: any;
    }): Promise<{
        msg: string;
    }>;
}
