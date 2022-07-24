import { ListSpecificationController } from "./ListSpecificationConstroller";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase"
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository);
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);

export {listSpecificationController}
