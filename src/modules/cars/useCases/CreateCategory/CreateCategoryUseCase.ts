import { CategoryRespository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";


interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {

    constructor(private categoryRepository: ICategoryRepository){}

    execute({name, description}: IRequest): void{

        const categoryAlredyExits = this.categoryRepository.findByName(name)

        if(categoryAlredyExits)
            throw new Error("Category alredy exists !");
    
    
        this.categoryRepository.create({name,description})
    }
}


export {CreateCategoryUseCase}