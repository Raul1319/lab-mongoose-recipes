const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {

    return Recipe.create({ title: "Cheesecake", level: "Easy Peasy", ingrediets: ["sugar", "flour", "eggs", "vainilla", "Philadephia cheese", "liquid cream", "butter"], cusine: "New York", dishType: "desert", duration: 90, creator: "Raúl Rodrigues" })
  })

  .then(response => {
    console.log(response.title);
  })

  .then(() => {
    return Recipe.insertMany(data)
  })

  .then(response => {
    response.forEach(recipe => {
      console.log(recipe.title);
    })
  })

  .then(() => {
    return Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  })

  .then(response => {
    console.log("LETS GO", response.duration);
  })

  .then(() => {
    mongoose.connection.close(() => {
      console.log("close!");
      process.exit(0)
    })
  })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });
