const User = require('../models/User');
module.exports = (function(){

    const getAll = async function(req,res){
        const max_return = 3;
        let data= []
        if(req.query.page){
            const skip = (req.query.page -1 )* max_return;
            data = await User.find({}).skip(skip).limit(max_return)
        }else {
            data = await User.find({})
        }
        
        res.send(data);
    }

    const find = async function(req, res){
        const data=  await User.findById(req.params.id);
        res.send(data);
    }

    const add = async function(req,res) {

        
        // saving
        const {email,firstName,lastName} = req.body;
        const data=  await User.create({email,firstName,lastName});
        res.send(data);
    }

    const update = async function(req,res) {
        const {email,firstName,lastName} = req.body;
        const data =  await User.update(
            {_id: req.params.id},
            {email,firstName,lastName},
            {new:true}
        );
        res.send(data);
    }

    const remove = async function(req,res) {
        const data=  await User.remove({_id: req.params.id});
        res.send(data);
    }

    const search = async function(req, res){
        const data = await User.find({
         $or:[
             {firstName : { $regex: req.params.input }},
             {lastName : { $regex: req.params.input }},
             {email : { $regex: req.params.input }}
         ]   
        })
        res.send(data);
    }

    const seed = async function(req,res){
        
        const data = await User.create([
            {
                firstName: 'albert',
                lastName :'eistein',
                email: 'ae@relativity.com'
            },
            {
                firstName: 'marie',
                lastName :'curie',
                email: 'mc@radiation.com'
            },
            {
                firstName: 'issac',
                lastName :'newton',
                email: 'in@gravity.com'
            },
            {
                firstName: 'galileo',
                lastName :'galilei',
                email: 'gg@astronomy.com'
            },
        ])
        res.send(data)
    }

    return {
        getAll,
        find,
        add,
        update,
        remove,
        seed,
        search
    }
})();