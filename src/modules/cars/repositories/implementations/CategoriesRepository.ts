import { getRepository, Repository } from "typeorm";
import { Category } from "../../entites/Category"
import { ICategoryRepository, ICreateRepositoryDTO } from "../ICategoryRepository";



class CategoryRespository implements ICategoryRepository{
    private repository: Repository<Category>;
    
    private static INSTANCE: CategoryRespository;

    private constructor(){
        this.repository = getRepository(Category)
    }


    public static getInstance(): CategoryRespository{
        if(!CategoryRespository.INSTANCE){
            CategoryRespository.INSTANCE = new CategoryRespository()
        }

        return CategoryRespository.INSTANCE
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