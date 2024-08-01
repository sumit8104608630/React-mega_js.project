const config={
    endPoint_url:String(import.meta.env.VITE_APPWRITER_URL),
    projectId:String(import.meta.env.VITE_VITE_APPWRITER_PROJECT_ID),
    databaseId:String(import.meta.env.VITE_APPWRITER_DATABASE_ID),
    bucketId:String(import.meta.env.VITE_APPWRITER_BUCKET_ID),
    collectionId:String(import.meta.env.VITE_APPWRITER_COLLECTION_ID)
}
export default config;