import fs from 'fs'
import {parse} from "csv-parse";
import { ICategoryRepository } from '../../repositories/ICategoryRepository';


interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {

    constructor(private categoryRepository: ICategoryRepository){}

    loadCategory(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);

            const categories: IImportCategory[] = [];

            const parseFile = parse()

            stream.pipe(parseFile)

            parseFile.on("data", async(line) => {
                const [name, description] = line;
                console.log(name, description,3)

                categories.push({
                    name,
                    description
                });
            })
            .on("end", () =>{
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on("error", (e) => {
                reject(e)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void>{
       const categories = await this.loadCategory(file)

       categories.map((category) => {
           const {name, description} = category
           
           const existCategory  = this.categoryRepository.findByName(name)

           if(!existCategory){
               this.categoryRepository.create({
                   name,
                   description
               })
           }

       })


       console.log(categories)
    }
}


export {ImportCategoryUseCase}