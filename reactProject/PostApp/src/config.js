const config = {
    endPoint_url: String(import.meta.env.VITE_APPWRITE_URL).trim(),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID).trim(),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID).trim(),
    bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID).trim(),
    collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID).trim()
};

console.log('Trimmed VITE_APPWRITE_URL:', config.endPoint_url); 
export default config;
console.log('VITE_APPWRITE_URL:', import.meta.env.VITE_APPWRITE_URL);
console.log('VITE_APPWRITE_PROJECT_ID:', import.meta.env.VITE_APPWRITE_PROJECT_ID);
console.log('VITE_APPWRITE_DATABASE_ID:', import.meta.env.VITE_APPWRITE_DATABASE_ID);
console.log('VITE_APPWRITE_COLLECTION_ID:', import.meta.env.VITE_APPWRITE_COLLECTION_ID);
console.log('VITE_APPWRITE_BUCKET_ID:', import.meta.env.VITE_APPWRITE_BUCKET_ID);
