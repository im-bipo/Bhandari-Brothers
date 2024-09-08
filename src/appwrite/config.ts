import { Account, Client, Storage, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NODE_ENV_PROJECT_ID || '');

export const DATABASE_ID = process.env.NODE_ENV_DATABASE_ID || ''
export const JOBS_COLLECTION_ID = process.env.NODE_ENV_JOBS_COLLECTION_ID || ''
export const APPLICATIONS_COLLECTION_ID = process.env.NODE_ENV_APPLICATIONS_COLLECTION_ID || ''
export const USERPROFILES_COLLECTION_ID = process.env.NODE_ENV_USERPROFILES_COLLECTION_ID || ''
export const RESUME_BUCKET_ID = process.env.NODE_ENV_RESUME_BUCKET_ID || ''

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };
