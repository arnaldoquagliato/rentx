import {Router} from "express";
import { createCategoryController } from "../modules/cars/useCases/CreateCategory";
import { listCategoryController } from "../modules/cars/useCases/ListCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, resp) => {
    return createCategoryController.handle(req,resp)
})


categoriesRoutes.get("/", (req, resp) => {
    return listCategoryController.handle(req, resp)
})

export { categoriesRoutes }