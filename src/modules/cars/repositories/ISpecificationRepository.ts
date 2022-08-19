import { Specification } from "../entites/Specification";


interface  ISpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface  ISpecificationRepository {
    create({name, description}: ISpecificationRepositoryDTO):void
    findByName(name: string): Specification | boolean
    list():Specification[]
}
export {ISpecificationRepositoryDTO, ISpecificationRepository}