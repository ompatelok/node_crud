const BlogModel = require('../models/blog.model')

//create new blog and save
exports.create = async (reg,res)=>{
    if(req.body.title && req.body.description){
        const blog = new BlogModel({
            title: req.body.title,
            description: req.body.description
        });
        await blog.save().then((data)=>{
            res.send({
                message:"Blog created successfully",
                 blog: data,
        });
    }).catch(err=>{
        console.log('Error in saving blog',err);
                res.status(400).send({message:`Error in saving blog ${err}`
                });
    });
    }else{
        res.status(400).send({message:"fileds are empty"});
    }
};

//find all the blogs
exports.findAll = async (req,res)=>{
    // const blog = await BlogModel.find();
    BlogModel.find().then(data=>{
        res.send({message:"Blogs data",blogs:data});
    }).catch(err=>{
        console.log('Erroe in fetching data',err);
            res.status(400).send({message:`Error in fetchinh blog ${err}`});
    });
};

//find one base on id
exports.findOne = (req,res)=>{
    const id = req.params.id;
    BlogModel.findBy(id)
    .then(data=>{
        if(!data)
            res.status(400).send({message:"No blog found with "+id})
        else
        res.send({message:"Data found", blog:data})
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Some issue in fetching data with blog id:"+id})
    })
}

//update based on id
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:'Please provide data to update'})
    }
    const id = req.params.id;
    BlogModel.findByIdAndUpdate(id,req.body,{
        useFrindAndModify:false
    })
    .then(data=>{
        if(!data)
            res.status(400).send({message:"No blog found with id:"+id})
        else
        res.send({message:"Blog updated successfully"})
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Some issue in Updateing data with blog id:"+id})
    })

}

//delete
exports.delete = (req,res)=>{
const id = req.params.id;
    BlogModel.findByIdAndRemove(id)
    .then(data=>{
        if(!data)
            res.status(400).send({message:"No blog found with id:"+id})
        else
        res.send({message:"Blog deleted successfully"})
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Some issue in Deleting data with blog id:"+id})
    })
}