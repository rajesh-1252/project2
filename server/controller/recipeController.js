import {BadRequestError} from "../errors/index.js"
import recipe from "../models/Recipe.js"
import {StatusCodes} from "http-status-codes";
import Recipe from "../models/Recipe.js";
import { json } from "express";

//TODO: image should to un-comment

//add Recipe

const addRecipe = async (req, res) => {
    
    const {title, instructions, ingredients} = req.body;
    console.log({title, instructions, ingredients });
    
    const name = req.file.originalname
    const type = req.file.mimetype
    const path = req.file.path
    
    if(!title ||  !instructions || !ingredients){
        throw new BadRequestError('please provide all values')
    }
    const parsedIngredient = JSON.parse(ingredients)
    
    const newRecipe = await recipe.create({
        title, image:{name: name, type: type, path: path },
        instructions: instructions, ingredient: parsedIngredient,
    });
    
    res.status(201).json({msg: "Recipe upload successfully"})
}


const updateRecipe = async(req, res) => {
    const {title, instructions, ingredients} = req.body;
    const {id} = req.params
    // console.log('req',req);

    if(req.file){
    var filename = req.file.originalname
    var type = req.file.mimetype
    var path = req.file.path
    } 

    const parsedIngredient = JSON.parse(ingredients)
        //set url in recipe id
    const recipe = await Recipe.findById({_id: id})

        recipe.title = title;
        if(req.file){
        recipe.image.name = filename;
        recipe.image.type = type;
        recipe.image.path = path;
        }
        recipe.instructions = instructions;
        recipe.ingredient = parsedIngredient;

        await recipe.save()
        
    res.json({msg: title, instructions, ingredients})
}


//get single Recipe
const singleRecipe = async(req, res) => {
    const {id} = req.params
    console.log('req',req);
    
    const recipe = await Recipe.findById({_id: id})

    res.json({msg: recipe})
}


//get all recipe
const allRecipe = async(req, res) => {

    const recipe = await Recipe.find()


    res.json({msg: recipe})
}


//delete Recipe
const deleteRecipe = async(req, res) => {
    const {id} = req.body;
    
    const recipe = await Recipe.delete({_id: id})

    res.json({msg: "Deleted successfully" })
}


export {addRecipe, updateRecipe, deleteRecipe, singleRecipe, allRecipe}