/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-07-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-07-2017
 */

 import { IEnvironment } from "./env-model";

 export const devVariables:IEnvironment = {
   environmentName: 'Development Environment',
   ionicEnvName: 'dev',

   // Front-end
   apiEndpoint: 'http://localhost:8080',

   // Back-end
   dbHost: 'mongodb://localhost:27017',
   dbName: 'test'
 };
