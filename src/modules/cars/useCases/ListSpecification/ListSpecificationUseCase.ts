import { Specification } from "../../model/Specification";
import { ISpecificationRepository} from '../../repositories/ISpecificationRepository'

class ListSpecificationUseCase{
    constructor(private specificationRepository: ISpecificationRepository){}

    execute(){
        return this.specificationRepository.list()    
    }
}



export {ListSpecificationUseCase}