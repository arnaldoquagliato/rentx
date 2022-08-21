import { Specification } from "../../entities/Specification";
import { ISpecificationRepository, ISpecificationRepositoryDTO } from "../ISpecificationRepository";
import { CategoryRespository } from "./CategoriesRepository";


class SpecificationRepository implements ISpecificationRepository {
    
    private  specifications: Specification[]

    private static INSTANCE: SpecificationRepository;
    
    constructor() {
        this.specifications = []
    }

    public static getInstance(): SpecificationRepository{
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }

        return SpecificationRepository.INSTANCE;
    }
    


    create({ name, description }: ISpecificationRepositoryDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        })

        this.specifications.push(specification)
    }

    findByName(name: string): boolean | Specification {
        const specification = this.specifications.find(specification => specification.name === name)

        if(!specification) return false

        return specification
    }

    list(): Specification[]{
        return this.specifications
    }
}

export {SpecificationRepository}