/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   21-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   alexandrerocca
 * @Last modified time: 2017-07-19T09:57:30+02:00
*/

import * as mongoose from 'mongoose';
// Import MongoDB config
import { DB_HOST, DB_NAME } from "../../config";
declare var process:any;

/*
  Use TypeScript with mongoose models
  See https://github.com/Appsilon/styleguide/wiki/mongoose-typescript-models
  and https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6 for more info about
  Mongoose Interface & Generic Types declaraton.
*/
// Define MongoDB path url
const MONGODB_URI:string = process.env.MONGODB_URI || `${DB_HOST}/${DB_NAME}`;

export const mongoDbConnect = ()=>{

	return new Promise((resolve,reject)=>{
			// Connect to MongoDB with Mongoose

			mongoose.connect(MONGODB_URI, <any>{
					useMongoClient: true
				}, (err) => {
					if (err) { reject(`Error connecting to MongoDB! -> ${MONGODB_URI}`)}
					else{  resolve(`MongoDB Ready! -> ${MONGODB_URI}`); }
			});
	})

}
