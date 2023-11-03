import mongoose from "npm:mongoose@7.6.3";
import { Persona } from "../type.ts";


const schema = mongoose.Schema;
const PersonaSchema = new schema(
    {
        DNI: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        codigopostal: {type: Number, required: true},
        ISO:{type: String, required: true},
        },
    {timestamps: false}
);

export type Person = mongoose.Document & Omit<Persona, "id">;

export default mongoose.model<Persona>("Person", PersonaSchema);