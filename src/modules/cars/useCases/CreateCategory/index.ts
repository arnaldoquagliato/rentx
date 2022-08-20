import { CategoryRespository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



export default ():CreateCategoryController => {
    const categoryRepository = new CategoryRespository();

    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    return createCategoryController;
}

