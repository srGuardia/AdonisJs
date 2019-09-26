"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", 'TaskController.index');
Route.post('/add', 'TaskController.store')
Route.on("/add").render("add");
Route.get('/task/:id', 'TaskController.detail')
Route.get('/remove/:id', 'TaskController.remove')
