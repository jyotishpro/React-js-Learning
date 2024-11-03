const express = require('express')
const FormModel = require('./Mongo.cjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('',async(req,res)=>{
    const forms = await FormModel.find();
    res.json(forms)
})

app.post('/',async(req,res)=>{
    let datasace =new FormModel(req.body)
    let result = await datasace.save();
    
    console.log(result)

})
app.delete('/:id',async(req,res)=>{
    let {id} = req.params;
    let data = await FormModel.deleteOne({_id:id})
    res.send(data);
})

app.listen(3000)