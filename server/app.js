import express from 'express';
import setupViewEngine from './setupViewEngine';
import addParsers from './addParsers';
import addRoutes from './routes/addRoutes';

var app = express();

setupViewEngine(app);

addParsers(app);

addRoutes(app);

module.exports = app;
