import config from "../config";
import { Client, Account, ID } from "appwrite";

export class Architecture {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.endPoint_url)
            .setProject(config.projectId);
            console.log(this.client)

        this.account = new Account(this.client);
        console.log(this.account)
        console.log(config.endPoint_url)
    }

    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log('Create Account Error:', error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log( error);
        }
    }


    async checkLogin() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }



    async logOut() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log('Logout Error:', error);
        }
    }
}

const service = new Architecture();
export { service };
