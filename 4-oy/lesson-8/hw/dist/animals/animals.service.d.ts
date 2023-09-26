import { AnimalsRepository } from './animals.repo';
export declare class AnimalsService {
    private animalsRepository;
    constructor(animalsRepository: AnimalsRepository);
    getAnimals(user: any): Promise<any>;
    getAnimal(animals: any, { user_id }: {
        user_id: any;
    }): Promise<any>;
    createAnimals(animals: any, user: any): Promise<{
        msg: string;
    }>;
    updateAnimal(animal: any, updateAnimal: any, { user_id }: {
        user_id: any;
    }): Promise<{
        msg: string;
    }>;
    deleteAnimal(animal: any, { user_id }: {
        user_id: any;
    }): Promise<{
        msg: string;
    }>;
}
