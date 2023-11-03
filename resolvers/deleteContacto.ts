import { Request, Response } from "npm:express@4.18.2";
import Person from "../db/tpersona.ts";

const deletePerson = async (req: Request, res: Response) => {
    try{
        const {DNI} = req.params;
        const persona = await Person.findOneAndDelete({DNI}).exec();
        if(!persona){
            res.status(404).send("Person doesn't exists");
            return;
        }
        res.status(200).send("Person deleted");
    
    }catch(error){
        res.status(404).send(error.mesage);
        return;
    }
}

export default deletePerson;