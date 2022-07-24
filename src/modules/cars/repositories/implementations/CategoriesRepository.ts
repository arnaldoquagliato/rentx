import { Category } from "../../model/Category"
import { ICategoryRepository, ICreateRepositoryDTO } from "../ICategoryRepository";



class CategoryRespository implements ICategoryRepository{
    
    private categories: Category[]

    private static INSTANCE: CategoryRespository;

    private constructor(){
        this.categories = []
    }


    public static getInstance(): CategoryRespository{
        if(!CategoryRespository.INSTANCE){
            CategoryRespository.INSTANCE = new CategoryRespository()
        }

        return CategoryRespository.INSTANCE
    }

    findByName(name: string): Category | boolean{
        const category =  this.categories.find(category => category.name === name);
        
        if(category) return category
        
        return false
    }

    create({name, description}: ICreateRepositoryDTO):void{
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

     this.categories.push(category)
    }

    list(){
        return this.categories;
    }

   
}


export {CategoryRespository}