# RetinopathyAnalytics


Create a .gitignore file

- gitignore is used to ignore the file which you dont want to commit. 

touch .gitignore
vim .gitignore

Add nodemodules: 
/node_modules/*


To run the project:
- Download the project
- npm install
- npm install -g http-server
- http-server
- Even better, use: npm install -g live-server 
- live-server


The advantage of using live-server is that, you can easily test for changes(It automatically publishes the changes made locally). Whereas when you use http-server, you need to start and stop the node. 


>Project Plan :
- Home : Show all the project details
- TryMe : Allows you to upload a image to the server. The server does some analysis on the image and sends the prediction back to the client. 
- Statistics : We are currently analyzing nearly 60000 retina images. Statistics shows a table with analyzed data. 
