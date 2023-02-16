import express from "express"
const router = express.Router()
import multer, { diskStorage } from "multer";
import path from "path"
import {addRecipe, updateRecipe, singleRecipe, allRecipe, deleteRecipe} from "../controller/recipeController.js"


//TODO: study why its not working and why it return buffer..
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './upload')
//     },
    
//     filename: function(req, file, cb){
//             console.log('path',path.extname(file.filename));
//            cb(null, path.extname(file.originalname)) 
//         }
// });


// const upload = multer({Storage: storage});
const upload = multer({dest: 'public/images/'},{Storage: diskStorage({
    filename: function(req,file,cb){
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)        
        cb(null, new Date.now().toISOString() + ext)
    }
})});

    // upload recipe
router.route('/upload').post(upload.single('image'),addRecipe)

    //get all recipe
router.route('/').get(allRecipe)

    //get single recipe, update recipe, 
router.route('/:id').get(singleRecipe).patch(upload.single('image'),updateRecipe).delete(deleteRecipe)

export default router;