require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie } = require("./movies/function");

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
    // code for list all movies
  } else if (yargsinput.update) {
    //code for update actor
  } else if (yargsinput.delete) {
    // code for delete a movie
  } else {
    console.log("Unrecognised command");
  }
  await mongoose.disconnect();
}

app(yargs.argv);
