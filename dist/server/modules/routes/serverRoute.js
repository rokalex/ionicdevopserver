"use strict";
/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   24-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   alexandrerocca
 * @Last modified time: 2017-07-19T12:28:50+02:00
*/
exports.__esModule = true;
var express = require("express");
var log_1 = require("../log");
var app = express();
var ServerRoutes = (function () {
    function ServerRoutes() {
    }
    ServerRoutes.prototype.routes = function () {
        // Index Server
        app.get('/', log_1.log, function (req, res) {
            res.status(200);
            res.json([{ api: 'Hello Alexandre!' }]);
        });
        return app;
    };
    return ServerRoutes;
}());
exports.ServerRoutes = ServerRoutes;
