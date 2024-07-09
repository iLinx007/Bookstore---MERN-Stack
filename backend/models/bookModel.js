import mongoose from "mongoose";

const boolSchema = mongoose.Schema();

const Book = mongoose.model('Cat', {name: String});