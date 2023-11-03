import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import getContactos from "./resolvers/getContactos.ts";
//import getInfo from "./resolvers/getInfo.ts";
import postContactos from "./resolvers/postContactos.ts";
import putContactos from "./resolvers/putContactos.ts";
import deletePerson from "./resolvers/deleteContacto.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL")

if(!MONGO_URL){
    console.log("No mongo URL found");
    Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
    
const app = express();
app.use(express.json());
app
    .get("/api/contactos", getContactos)
    //.get("/api/contactos/:DNI", getInfo)
    .post("/api/contactos", postContactos)
    .put("/api/contactos/:DNI", putContactos)
    .delete("/api/contactos/:DNI", deletePerson)
    
app.listen(3000);

