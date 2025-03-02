import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";
export async function getItem(id: string) {
  try {
    const objId = new ObjectId(id);
    const client = await clientPromise
    const db = client.db("bella-ciao-menu")
    const item = await db
    .collection("menu")
    .findOne({ "_id": objId })
    
    return {
      item
    }
  } catch (e) {
    console.error(e)
  }
}