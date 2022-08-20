import { CategoryRespository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


export default():ListCategoryController => {
    const categoryRepository = new CategoryRespository();
    const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
    const listCategoryController = new ListCategoryController(listCategoryUseCase);

    return listCategoryController
}

