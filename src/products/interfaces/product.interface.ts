import { Document } from 'mongoose';

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly qty: number;
    readonly imageUrl: string;
}