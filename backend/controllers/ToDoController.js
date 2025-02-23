import ToDo from "../Model/ToDoSchema.js";

const createToDoList = async(req,res)=>{
const {Title , Description} = req.body;
try{
const ToDoList = await ToDo.create({Title, Description})
res.status(200).json(ToDoList)
}catch(error){
    console.log(error);
    res.status(404).json({
        message: "Failed to Create To do List",
    })
}}

export default createToDoList;