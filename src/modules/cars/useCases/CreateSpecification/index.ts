import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const categoryRepository = SpecificationRepository.getInstance()

const createCategoryUseCase = new CreateSpecificationUseCase(categoryRepository);

const createSpecificationController = new CreateSpecificationController(createCategoryUseCase);



export {createSpecificationController}

