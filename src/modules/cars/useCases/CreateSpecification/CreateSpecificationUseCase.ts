import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


interface IRequest {
    name: string,
    description: string
}

class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository){}

    execute({name, description}: IRequest): void{

        const specificationAlredyExist = this.specificationRepository.findByName(name)

        if(specificationAlredyExist)
            throw new Error("Category alredy exists !");
    
    
        this.specificationRepository.create({name,description})
    }
}


export {CreateSpecificationUseCase}