My partner Ayesha and I made a website for those who want to track their daily calories during each meal time or any time they consume anything.

For part 1 of this project:

Here is a link to the website: https://infr3120-fall25-project-uyqu.onrender.com/meals here is a link to the repo for this assignment: https://github.com/PiratheeshG/INFR3120-Fall25-Project


Info About the Pages:

The Home page was made using JavaScript and EJS provides navigation to the meals pages. 
The meals page was made using JavaScript, EJS, and Express. It allows users to view their meal entries while providing options to create(add), read, update (edit), and delete entries.
MongoDB was used to create the database to store each meal entry, each entry made on the website or on MongoDB itself has multiple text fields to fill out (date, foodItem, consumptionTime, calorieAmount, weightofFood, and date).

For part 2 of this project:
Here's links to our YouTube demo, the deployed webpage, and our repo for this project.

Youtube: https://www.youtube.com/watch?v=byjP6i5FWM8
Render: https://infr3120-fall25-project-part-2.onrender.com/
GitHub: https://github.com/PiratheeshG/INFR3120-Fall25-Project

The login.ejs and registration.ejs were created and connected the routes that authorize a user's credentials. The User.js was created with the help of mongoose and passport local mongoose, which hashes passwords and authenticates them. After logging in, the navbar updates to show Logout instead of Login, and the meal entries become visible after logging in.

For part 3 of this project:
Here's links to our YouTube demo, and our repo for this project.

Youtube: https://www.youtube.com/watch?v=tNVpGLwwzDQ
GitHub: https://github.com/PiratheeshG/INFR3120-Fall25-Project

The styling was done by Ayesha under main_nav.ejs, bottom_nav.ejs, list.ejs, header.ejs, index.ejs and the front end back end deployment was done by Piratheesh on AWS elestic Beanstalk and Render.

Extra Notes:
-This assignment was developed using a full stack setup which included Express.js and Node.js for the backend or server side, MongoDB for data storage, and Bootstrap/Font Awesome for the styling and icons on the actual webpage.
- all my code was found through the lectures besides the following:
-how to add a static logo, I figured out how to do that from this youtube video https://www.youtube.com/watch?v=CUQAt1xfUWI
- needed to deploy the database from the cloud cluster and therefore needed a way to hide my credentials using .env and .gitignore and this youtube video helped
https://www.youtube.com/watch?v=b3ne4Mkadoc
- I needed help formatting my uri under db.js and this source helped https://www.npmjs.com/package/dotenv
- Canva logo:
https://www.canva.com/design/DAG4cxTiX6w/6l7x4ZQ8FDwlEUCd5_L3rQ/edit

these links helped me for my styling of the website: 
to make my header and footer dark teal: Got from https://getbootstrap.com/docs/4.0/components/navbar/ 
under colour schemes did this under my main_nav.ejs and my bottom_nav.ejs to make my buttons/table different colours using the classes info, success, etc 
under my list.ejs I used https://getbootstrap.com/docs/5.3/content/tables/ 
to make make the body of the webpage teal I changed the background colour with inline css under header.ejs from https://www.w3schools.com/html/html_css.asp 
I centred everything on home page using text-center bootsrap class under index.ejs https://www.geeksforgeeks.org/bootstrap/how-to-center-the-text-in-bootstrap/ 
Image cropper, to make the logo more visually appealing and round out the corners I used https://round-corner.imageonline.co/#google_vignette 
