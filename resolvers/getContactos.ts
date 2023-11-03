import { Request, Response } from "npm:express@4.18.2";
import  Person  from "../db/tpersona.ts";

const getContactos = async(_req: Request, res: Response) => {
    try{
        const persona = await Person.find().exec();
        const mostrar = persona.map(item => {
            const almacen = [];
            almacen.push(item.name);
            almacen.push(item.DNI);
            return almacen;

        })
        res.status(200).send({mostrar});
    }catch(error){
        res.status(404).send(error.message);
        return;
    }
}

export default getContactos;