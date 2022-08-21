import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category"
import { ICategoryRepository, ICreateRepositoryDTO } from "../ICategoryRepository";



class CategoryRespository implements ICategoryRepository{
    private repository: Repository<Category>;
    
    constructor(){
        this.repository = getRepository(Category)
    }

    async findByName(name: string): Promise<Category>{
        const category:any =  await this.repository.findOne({name});
        return category
    }

    async create({name, description}: ICreateRepositoryDTO):Promise<void>{
        const category = this.repository.create({
            description,
            name
        })
        await this.repository.save(category)
    }

    async list(): Promise<Category[]>{
        const categories =  await this.repository.find();
        return categories
    }

   
}


export {CategoryRespository}