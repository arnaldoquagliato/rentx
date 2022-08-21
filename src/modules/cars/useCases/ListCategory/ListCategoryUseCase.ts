import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";


class ListCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository){}

    async execute(): Promise<Category[]>{
        const categories = await this.categoryRepository.list();
        
        return categories
    }
}


export {ListCategoryUseCase}