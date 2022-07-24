import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}


class CreateSpecificationSerice {

    constructor(private  specificationsRepository: ISpecificationRepository){}

    execute({name, description}: IRequest): void{

        const specificationAlredyExists = this.specificationsRepository.findByName(name)
        
        if(specificationAlredyExists)
            throw new Error("Especificação ja existe.");
            

        this.specificationsRepository.create({
            name,
            description
        })
    }
}


export {CreateSpecificationSerice}