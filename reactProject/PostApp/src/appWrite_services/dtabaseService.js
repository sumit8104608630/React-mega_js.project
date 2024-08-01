import config from "../config";
import { Client,ID,Databases,Storage,Query } from "appwrite";
export class databases{
     client=new Client()
     databases;
     storage;
     constructor(){
        this.client
        .setEndpoint(config.endPoint_url)
        .setProject(config.projectId);
        this.databases=new Databases(this.client);
        this.storage=new Storage(this.client);
     }
     async createPost({title,slug,content,image,status,user}){
        try{
            return await this.databases.createDocument(config.databaseId,config.bucketId,slug,{
                title,content,image,status,user
            })
        }catch(error){
            console.error(error)
        }
     }
     async updateDatabase(slug,{title,content,image,status}){
        try{
            return await this.databases.updateDocument(config.databaseId,config.collectionId,slug,{
                title,content,image,status
            })
        }catch(error){
            console.error(error)

        }
     }
     async deleteData(slug){
        try{
await this.databases.deleteData(config.databaseId,config.collectionId,slug,)
        return true
        }catch(err){
            console.error(err)
        }
     }
     async getPost(slug){
        try{
            return await this.databases.getDocument(config.databaseId,config.collectionId,slug)
        }catch(error){
            console.error(error)
        }
     }
     async getPosts(queries=[Query.equal("status","active")]){
        try{
           return await this.databases.listDocuments(config.databaseId,config.collectionId,queries) 
        }catch(err){
            console.error(err)
        }
     }
     async upload(file){
        try{
            return await this.storage.createFile(
                config.bucketId,
                ID.unique(),
                file,
            )
        }catch(err){
            console.log(err)
        }
     }
     async deleteFile(fileId){
        try{
            await this.storage.deleteFile(config.bucketId,fileId)
            return true
        }catch(error){
            console.error(error)
        }

    }
        getFilePreview(fileId){
            return this.storage.getFilePreview(
                config.collectionId,
                fileId
            )
        }
    
} 

const service=new databases();
export default service