 import { Category } from "../entites/Category";

 
 interface ICreateRepositoryDTO {
     name: string,
     description: string,
 }

 interface ICategoryRepository{
     findByName(name: string): any;
     list(): any;
     create({name , description}: ICreateRepositoryDTO): any;
 }

export { ICategoryRepository, ICreateRepositoryDTO }