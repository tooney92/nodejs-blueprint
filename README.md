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
* [Credit](#credit)
* [File Naming Convention](#file-naming-convention)
* [Annoncements](#annoncements)


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

Preview the link to the folder structure with this link: https://www.figma.com/file/dARqutlGSUljTwUDETKCGe/folder-struture-medex?node-id=0%3A1
	
## Setup
To run this project, install it locally using npm:

## File Naming Convention

## Credit
