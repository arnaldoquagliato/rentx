 import { Category } from "../model/Category";

 
 interface ICreateRepositoryDTO {
     name: string,
     description: string,
 }

 interface ICategoryRepository{
     findByName(name: string): Category | boolean;
     list(): Category[];
     create({name , description}: ICreateRepositoryDTO): void;
 }

export { ICategoryRepository, ICreateRepositoryDTO }