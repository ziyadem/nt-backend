import { AnimalsService } from "./animals.service";
interface IAnimals {
    title: string;
    color: string;
}
export declare class AnimalsController {
    private animalsService;
    constructor(animalsService: AnimalsService);
    getAnimals(user: any): Promise<any>;
    getAnimal(animals: any, user: any): Promise<any>;
    createAnimals(animals: IAnimals, user: any): Promise<{
        msg: string;
    }>;
    deleteFruit(animals: any, user: any): Promise<{
        msg: string;
    }>;
    updateAnimal(animal: any, updateAnimal: any, user: any): Promise<{
        msg: string;
    }>;
}
export {};
