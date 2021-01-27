import { connectToDatabase } from './mongodb';

export const Insert = async (collectionName, document) => {
    const { db } = await connectToDatabase()
    const ret = await db.collection(collectionName).insertOne(document);
    return ret.insertedId;
}

export const Get = async (collectionName, query) => {
    const { db } = await connectToDatabase()
    const ret = await db.collection(collectionName).findOne(query);
    return ret;
}

export const GetAll = async (collectionName, query) => {
    const { db } = await connectToDatabase()
    const array = await db.collection(collectionName).find(query).toArray();
    return array;
}

export const Delete = async (collectionName, _id) => {
    const { db } = await connectToDatabase()
    await db.collection(collectionName).deleteOne({ _id });
}

export const Update = async (collectionName, document) => {
    const { db } = await connectToDatabase()
    await db.collection(collectionName).updateOne({ _id: document._id }, { ...document }, { upsert: false });
    return document;
}