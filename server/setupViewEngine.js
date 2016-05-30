import express from "express";
import path from "path";
import favicon from "serve-favicon";

export default function (app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');

    app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

    app.use(express.static(path.join(__dirname, 'public')));

};