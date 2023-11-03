import {Request, Response} from "npm:express@4.18.2";
import  Person  from "../db/tpersona.ts";

const postContactos = async (req:Request, res: Response)  => {
    try{
        const {DNI, name, email, codigopostal, ISO} = req.body;

        if(!DNI || !name || !email || !codigopostal || !ISO){
                res.status(500).send("Name name, email, codigopostal or ISO are required");
                return;
        }
        
        const alreadyExists = await Person.findOne({DNI});
        if(alreadyExists){
            res.status(400).send("The client already exists");
            return;
        }
    
        const newPerson = new Person({DNI, name, email, codigopostal, ISO});
        await newPerson.save();

        res.status(200).send({
            DNI: newPerson.DNI,
            name: newPerson.name,
            email: newPerson.email,
            codigopostal: newPerson.codigopostal,
            ISO: newPerson.ISO,
        })

    }catch(error){
        res.status(500).send(error.message);
        return
    }
}

export default postContactos;