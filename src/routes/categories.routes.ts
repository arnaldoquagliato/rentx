import {Router} from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/CreateCategory";
import { listCategoryController } from "../modules/cars/useCases/ListCategory";
import { importCategoryController } from "../modules/cars/useCases/ImportCategory";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",

})

categoriesRoutes.post("/", (req, resp) => {
    return createCategoryController.handle(req,resp)
})


categoriesRoutes.get("/", (req, resp) => {
    return listCategoryController.handle(req, resp)
})

categoriesRoutes.post("/import", upload.single("file"),(req, resp) => {
    return importCategoryController.handle(req, resp)
})
export { categoriesRoutes }