import {Router} from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/ListSpecification";

const specificationsRoutes = Router();
const categoryRepository = new SpecificationRepository(); 

specificationsRoutes.post("/", (req, resp) => {
    return createSpecificationController.handle(req, resp);
})


specificationsRoutes.get("/", (req, resp) => {
    return listSpecificationController.handle(req, resp);
})

export { specificationsRoutes }