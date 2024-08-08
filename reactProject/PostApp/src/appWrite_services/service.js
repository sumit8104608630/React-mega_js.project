import config from "../config";
import { Client, Account, ID } from "appwrite";

export class Architecture {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.endPoint_url)
            .setProject(config.projectId);
        this.account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {
        try {
            const account = await this.account.create(ID.unique(), email, password, name);
            if (account) {
                // Handle login component
                return this.login({ email, password });
            } else {
                return account;
            }
        } catch (error) {
            console.log('Create Account Error:', error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log( error);
        }
    }

    async checkLogin() {
        try {
            let user= await this.account.get();
           // console.log(user)
            return user
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





// async function testService() {
//     try {
//         // Creating a new account
//         const newUser = await service.createAccount({
//             name: 'John Doe',
//             email: 'john@example.com',
//             password: 'password123'
//         });
//         console.log('New User:', newUser);

//         // Logging in
//         const session = await service.login({
//             email: 'john@example.com',
//             password: 'password123'
//         });
//         console.log('Session:', session);

//         // Checking if logged in
//         const user = await service.checkLogin();
//         console.log('Logged In User:', user);

//         // Logging out
//         const logout = await service.logOut();
//         console.log('Logout:', logout);
//     } catch (error) {
//         console.log('Test Service Error:', error);
//     }
// }

// testService();


const service = new Architecture();
export { service };
