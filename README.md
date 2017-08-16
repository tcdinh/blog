# blog
## System Requirements
* Any OS
* Node.js
* MongoDB installed on default port

## Installation Notes
1. Use ```NPM install``` where the package.json file is in the root directory.
2. Use ```gulp``` to run the build processs.
3. Navigate to ```localhost:1111``` in a web browser to view the site.

## MongoDB Notes
1. Create a new database called ```blogData```.
2. Create 3 collections called ```images```, ```blogPosts```, and ```users```
3. Insert a ```{username : "your_username" ,  password : "your_password"}``` object into the users collection where. 

The blog posts and images are dynamically created so there is no need to manually insert any data into the blogPosts collection. 

## To-do
* Properly finish infinite scrolling pagination
* Finish image gallery CRUD opertions and create an image viewer component.
