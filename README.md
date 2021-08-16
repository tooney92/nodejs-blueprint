# Nodejs Blueprint
A nodejs blueprint inspired by the team at https://redis.com/. 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Npm Packages](#npm-packages)
* [Folder Structure](#folder-structure)
* [Setup](#setup)
* [File Naming Convention](#file-naming-convention)
* [Annoncements](#annoncements)
* [Credit](#credit)


## General info
This project serves as a blueprint for nodejs developers using the express framework. One of the strong points of developing solutions with nodejs & express is the fluidity that it affords. This however can also become a problem over time especially when collaboratoring on a project with other developers. Another issues arises with practice of having everything done in the controller. 

This blueprint implements the Data Access Object design pattern which abstracts the fetch and transformation of data to the relevant concerns. In short, the essence of this blue print lies in the separation of concerns while harnessing the powers of dependency injections. With this scaffold, it doesnt matter the size fo the team, everyone will follow the same structure. 
	
## Technologies
* nodejs
* expressjs
* mongoDB

## Npm Packages

### The npm packages found in this blueprint are grouped below:

* security:
    * dotenv:
    * helmet:
    * jsonwebtoken:
    * cors
    
* utilities:
    * lodash
    * express
    * cors
    * uuid
    * node-input-validator
    * nodemon

* logging:
   * winston
   * winston-daily-rotate-file
   * morgan
    

## Folder Structure

Preview the [folder structure](https://www.figma.com/file/dARqutlGSUljTwUDETKCGe/nodejs-blue-print?node-id=0%3A1). I used figma to design the structure.  
	
## Setup

* initial setup: 
   * ensure you have mongodb setup on your system. MongoDB is the default DBMS used for this blue print. You can however use other DBMS. The bluelprint is designed to allow you use any DB of your choice so long as you have the implimentations in the 
   * create a DB called ```sampleDB```. This is required because in the ```.env``` file, we have the database connection string pointing to ```sampleDB``` as the initial DB. You of course change this to any DB name.  
   
* step 1: clone the repo.
* step 2: navigate to the directory and run ```npm i``` from your terminal.
* step 3: run ```npm run dev``` to start your application. The default port will be 3000. 

## File Naming Convention

The files in your ```impl``` folder should be named as follows: ```<object>_dao_<database>_impl.js```. For instance, in the sample setup, if you navigate to ```src --> DAO --> impl --> mongoDB```, you will see this file: ```user_dao_mongoDb_impl.js```. This file is named with the pattern mentioned above: ```<object>_dao_<database>_impl.js```. You may wonder,  "why this is neccesary?". To answer your question, lets have a look at the ```DAO``` folder. In this folder,  you will see this file: ```daoloader.js```. The contents of the file are as follows:

```
const config = require('better-config');

/**
 * Load an implementation of a specified DAO.
 * @param {string} daoName - the dao name
 * @param {string} daoFolder - the DAO folder
 * @returns {Object} - the DAO implemenation for the currently configured database.
 */
 const loadMongoDao = (daoName, daoFolder) => {
    const currentDataBase = config.get('application.mainDataBase');
    return require(`./impl/${currentDataBase}/${daoFolder}/${daoName}_dao_${currentDataBase}_impl`);

  };

module.exports = {
//   loadDao,
  loadMongoDao
};

```
At this line: ```const currentDataBase = config.get('application.mainDataBase');```, we are getting the whatever we had provided as our ```mainDatabase``` in the config.json located in the root direcotry of this blueprint. Next, we have this line of code: ```return require(`./impl/${currentDataBase}/${daoFolder}/${daoName}_dao_${currentDataBase}_impl`);```. What we are doing in this line are as follows: 

* require the file depending on what was passed to the ```loadMongoDao``` function. This function takes 2 parameters, the ```daoName``` and the ```daoFolder```. These are simply the object(```daoName```) we want to load its implementations, and the folder(```daoFolder```) it is located. You can see this ````./impl/${currentDataBase}/${daoFolder}/${daoName}_dao_${currentDataBase}_impl``` as a way of telling node: "go to the impl folder, in that folder, navigate to the ```currentDataBase``` gotten from our ```config.get('application.mainDataBase')```. Next, navigate to the subfolder which is the ```daoFolder``` provided  to the ```loadMongoDao``` function and then finally load up the file with the ```daoName``` provided to the ```loadMongoDao``` function. 

* return whatever was exported in that file as the implementations. If you look at  ```src --> DAO --> impl --> mongoDB --> user_dao_mongoDb_impl.js``` you will notice we are adding  4 functions into our ```module.exports```. 


## Annoncements

* The typescript implementation of this blueprint is being developed. 

## Credit

Special shoutout to the [awesome redis team](https://redis.com/) who open sourced the project structure for one courses I took at the [redis university](https://university.redislabs.com/). From the moment I saw the structure, I knew that was the right way to go. I have built on what they have and I hope it makes your development much better. 

