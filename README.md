# to_do_project

## Introduction

Simple Todo (Task) management application made by using MERN Stack. It includes swagger for documentation, Jest for testing controllers/routes and database mock.
Frontend is powered by React.js using hooks.

It includes following features:

- Should allow to create a task
- Should allow adding multiple subtasks to a parent task
- Should allow marking both task and subtask as done or undone
- Tasks and its subtasks should be displayed as accordion

## Requirements

- [Node](https://nodejs.org) `14` or newer
- [MongoDB]() `4.2.0` or newer

## Stack/Packages Used

- [axios]() for API Calls in front end
- [cors]() for enabling all origin cors operation
- [dotenv]() for using ENV files
- [mongoose]() for interacting with MongoDB

## Project structure

This project structure is by no means "**THE**" perfect project structure. It's just the one which is currently making more sense to me than any other else, after several tries. Long story short: I divide my apps by scenes, subdivided into "modules" that can use that scene's `components` (ie: `server & client`). All the folders except the client represent the server folders

## Make the magic happen

Just clone the repo and start (assuming you're using [Yarn](https://yarnpkg.com)):

```shell
$ yarn setup
$ change env.example folder to env folder and make appropriate changes to env file.
$ In one terminal, run `yarn start`
$ cd into client folder, replace . in .env.example
$ In another terminal, run `yarn client`
```

## Use

You can check the Swagger api documentation in the browser using this link `http://localhost:3000/documentation`

as well as test the Code coverage using

`yarn coverage`

This is the part where I stop writing and let you explore & have some fun 👍

## Questions

If you have any questions, feel free to get in touch on email `rakimsth@gmail.com`!
