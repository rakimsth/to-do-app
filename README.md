# to_do_project

## Introduction

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
$ In one terminal, run `yarn start`
$ In another terminal, run `yarn client`
```

## Use

You can check the Swagger api documentation in the browser using this link `http://localhost:3000/documentation`

as well as test the Code coverage using

`yarn coverage`

This is the part where I stop writing and let you explore & have some fun 👍

## Questions

If you have any questions, feel free to get in touch on email `rakimsth@gmail.com`!
