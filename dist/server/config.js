"use strict";
/**
 * @Author: alexandrerocca
 * @Date:   2017-07-15T01:15:00+02:00
 * @Last modified by:   alexandrerocca
 * @Last modified time: 2017-07-19T09:52:52+02:00
 */
exports.__esModule = true;
var development_1 = require("../environments/development");
var production_1 = require("../environments/production");
function environmentConfig() {
    var env = development_1.devVariables;
    if (process.env.NODE_ENV === 'prod') {
        env = production_1.prodVariables;
    }
    return env;
}
exports.environmentConfig = environmentConfig;
exports.SECRET_TOKEN_KEY = 'this is a bad secret sentence';
exports.DB_NAME = environmentConfig().dbName;
exports.DB_HOST = environmentConfig().dbHost;
exports.BCRYPT_ROUND = 10;
exports.PASSWORD_MIN_LENGHT = 6;
exports.JWT_EXPIRE = 86400000;
