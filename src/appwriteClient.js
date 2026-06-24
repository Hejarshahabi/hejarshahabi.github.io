import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6a3b888a0033b0c4d87f');

export const databases = new Databases(client);

// Export IDs for easy access
export const appwriteConfig = {
    databaseId: '6a3b88f5002e20fe5f72',
    collectionId: 'GalleryLikes',
};
