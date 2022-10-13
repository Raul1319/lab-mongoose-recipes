const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title:{
    type: String,
    enum: ["Eaysy Peasy", "Amateur Chef", "UltraPro Chef"],


  },
  ingredients:{
    type: [String]
  },
  cuisine:{
    type: String,
    require: true
  },
  dishType:{
    type: String,
    enum: ["breakfast", "main_course", "soup", "snack", "drink", "desert", "other"]
  },
  image:{
    type: String,
    default: " https://images.media-allrecipes.com/images/75131.jpg " 
  },
  duration:{
    type: Number,
    min: 0
  },
  creator:{
    type: String
  },
  created:{
    type: Date,
    default: new Date()
  }

});



const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
