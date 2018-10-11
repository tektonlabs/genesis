# Welcome to node-temgen!

A node template generator for Rest Api application with Express.js, it is made as a boilerplate of initial setup for production, minimizing the effort of doing this time-consuming job.

It comes loaded and setup with mongoose as a ORM for MongoDB Databases or Sequelize for SQL Databases, also have setup winston and morgan for handle logging, and a set of usefull dependecies that a web application in node should have.

Also comes with mocha, chai, supertest and nyc(istanbul) setup, for testing and code coverage, it have Airbnb javaScript style guide preset and Eslint configured, and a yaml file for CI/CD in gitlab, is ready to deploy in any cloud service prefered.

## Installation

    npm install -g node-temgen

## Quick Start

To get the base project of your choice generated, go to your terminal an cd to your projects folder then simply run:

    node-temgen

It will output:

    What base project template would you like to generate?
        >express-mongo
         express-sql

Use your arrows key to select up and down them input your project name like:

    Project name: my-awesome-app
Then cd to your `my-awesome-app` project folder and run:

    npm install
You can check if averything is correct by running `npm start` and visiting in your browser `http://localhost:3000/hello` if every thing is Ok you will see:

    { message: 'Hello World!!' }

Then you need to create a .env.local and add your enviroment variables as you can see in .env file intructions, for papertrail, you can create an account at `https://papertrailapp.com/login` and configure it in your project so you can have a free log service, pass in host and port to your .env or .env.local file and launch your app to any cloud service.

And that's it, happy coding!!

------
**TODO**: add a template with view engine with hbs and any other usefull tool that I don't know yet xD.