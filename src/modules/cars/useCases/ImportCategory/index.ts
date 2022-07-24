import { ImportCategoryController } from "./ImportCategoryControllers";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { CategoryRespository } from "../../repositories/implementations/CategoriesRepository";

const categoryRepository = CategoryRespository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export {importCategoryController}