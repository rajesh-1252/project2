import mongoose, { Schema } from "mongoose";

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    }
});

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        name:{
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        }, 
        path:{
            type: String,
        }, 
    },
    instructions:{
        type: Array,
        required: true,
    },
    ingredient: [ingredientSchema],
    likes: {
        type: Number,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


export default mongoose.model('recipe',RecipeSchema)