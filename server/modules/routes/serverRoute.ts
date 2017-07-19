/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   24-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   alexandrerocca
 * @Last modified time: 2017-07-19T12:28:50+02:00
*/

import * as express from 'express';
import { log } from '../log';


const app = express();

export class ServerRoutes {

    routes() {
      // Index Server
     app.get('/', log, (req, res)=>{
        res.status(200);
        res.json([{api: 'Hello Alexandre!'}]);
       });
      return app;
    }
}
