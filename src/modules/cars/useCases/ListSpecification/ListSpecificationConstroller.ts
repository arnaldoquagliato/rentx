import {Request, Response} from 'express'
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase){}

    handle(req: Request, resp: Response): Response{
        const all = this.listSpecificationUseCase.execute()

        return resp.json(all)
    }

}


export {ListSpecificationController}