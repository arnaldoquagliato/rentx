import { CategoryRespository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoryRepository = CategoryRespository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);


export {listCategoryController}