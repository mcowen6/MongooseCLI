require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, readMovie } = require("./movies/function");

const { db } = require("./movies/model");
const MovieCollection = require("./movies/model");

async function app(yargsinput) {
  if (yargsinput.create) {
    // put code here for create
    await createMovie({
      title: yargsinput.title,
      actor: yargsinput.actor,
      director: yargsinput.director,
      rating: yargsinput.rating,
    });
  } else if (yargsinput.read) {
    console.log("Entering read");
    // const findFilter = {};
    let resultsTable = [];
    // code for list all movies
    const results = await readMovie();
    for (i = 0; i < results.length; i++) {
      resultsTable.push({
        title: results[i].title,
        actor: results[i].actor,
        director: results[i].director,
        rating: results[i].rating,
      });
    }
    // console.log(results);
    console.table(resultsTable);
  } else if (yargsinput.update) {
    console.log("Entering update");
    //code for update actor
    await MovieCollection.updateOne(
      { title: yargsinput.title },
      { $set: { actor: yargsinput.actor } }
    );
  } else if (yargsinput.delete) {
    console.log("Entering delete");
    // code for delete a movie
    await MovieCollection.deleteOne({ title: yargsinput.title });
  } else {
    console.log("Unrecognised command");
  }
  await mongoose.disconnect();
}

app(yargs.argv);
