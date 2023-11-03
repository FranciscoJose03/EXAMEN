import {Request, Response} from "npm:express@4.18.2";
import  Person  from "../db/tpersona.ts";

const putContactos = async (req:Request, res: Response)  => {
    try{
        const dni = req.params;
        const {name, email, codigopostal, ISO} = req.body;
        if(!name || !email || !codigopostal || !ISO){
            res.status(500).send("Name, email, codigo postal or ISO are required");
            return;
        }
        const existsychange = await Person.findOneAndUpdate(dni, {
            name: name,
            email: email,
            codigopostal: codigopostal,
            ISO: ISO,
        });

        if(!existsychange){
            res.status(404).send("Fallo en el update")
        }

        res.status(200).send("Se realizo el update correctamente")
    }catch(error){
        res.status(500).send(error.message)
    }
    
}

export default putContactos;