# Nodejs Blueprint
A nodejs blueprint inspired by the team at https://redis.com/. 

DAO naming style ==> 
explain routes loading
explain /api in app.js
auth requirement

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
Project is created with:
* nodejs
* expressjs
* mongoDB

## Npm Packages

### The npm packages found in this code are grouped below:

* security:
    * dotenv:
    * helmet:
    * jsonwebtoken:
    * uuid
    * cors
    
* utilities:
    * lodash
    * express
    * cors

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

## Credit
