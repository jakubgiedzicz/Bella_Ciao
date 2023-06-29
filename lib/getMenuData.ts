import clientPromise from "./mongodb";
export async function getData() {
  try {
    const client = await clientPromise
    const db = client.db("Bella_Ciao")
    const menu = await db
    .collection("menu")
    .find({})
    .toArray()
    
    return {
      props: { menu: JSON.parse(JSON.stringify(menu)) }
    }
  } catch (e) {
    console.error(e)
  }
}