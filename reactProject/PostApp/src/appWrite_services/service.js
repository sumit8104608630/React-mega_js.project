import config from "../config";
import { Client, Account,ID } from "appwrite";
//import { logOut } from "../redux_part/auth_store";

export class architecture{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(config.endPoint_url)
        .setProject(config.projectId);
        this.account=new Account(this.client)
    }
    async createAccount({name,email,password}) {
        try{
        const account=await this.account.create(ID.unique(),name,email,password);
         if(account){
            // handel login component
            return this.Login({email,password})
         }
         else{
            return account;
         }
        }
        catch(error){
            console.log(error);
        }
    }
    async Login({email,password}){
        try{
          return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            console.log(error);
        }
    }

    async check_login(){
        try{
            return await this.account.get()
        }catch(err){console.log(err)}
        return null
    }
    async logOut(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            console.log(error);
        }
    }
}
const service=new architecture()
export {service};