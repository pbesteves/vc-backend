import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: String,
    dscription: String,
    qty: Number,
    imageUrl: String,
})