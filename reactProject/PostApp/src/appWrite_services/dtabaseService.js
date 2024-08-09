import config from "../config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabasesService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.endPoint_url)
            .setProject(config.projectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, image, status, userId }) {
        try {
            return await this.databases.createDocument(config.databaseId, config.collectionId, slug, {
                title, content, image, status, userId
            });
        } catch (error) {
            console.error("Create Post Error:", error);
        }
    }

    async updateDatabase(slug, { title, content, image, status }) {
        try {
            return await this.databases.updateDocument(config.databaseId, config.collectionId, slug, {
                title, content, image, status
            });
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);        }
    }

    async deleteData(slug) {
        try {
            await this.databases.deleteDocument(config.databaseId, config.collectionId, slug);
            return true;
        } catch (error) {
            console.error("Delete Data Error:", error);
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.databaseId, config.collectionId, slug);
        } catch (error) {
            console.error("Get Post Error:", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(config.databaseId, config.collectionId, queries);
        } catch (error) {
            console.error("Get Posts Error:", error);
            return false
        }
    }

    async upload(file) {
        try {
            return await this.storage.createFile(config.bucketId, ID.unique(), file);
        } catch (error) {
            console.error("Upload File Error:", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.bucketId,
                 fileId
                );
            return true;
        } catch (error) {
            console.error("Delete File Error:", error);
            return false
        }
    }

    async getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(config.bucketId, fileId);
        } catch (error) {
            console.error("Get File Preview Error:", error);
        }
    }
}
const service = new DatabasesService();
export default service;
