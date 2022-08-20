import { ImportCategoryController } from "./ImportCategoryControllers";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { CategoryRespository } from "../../repositories/implementations/CategoriesRepository";


export default (): ImportCategoryController=>{
    const categoryRepository = new CategoryRespository()
    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
    const importCategoryController = new ImportCategoryController(importCategoryUseCase);

    return importCategoryController
}