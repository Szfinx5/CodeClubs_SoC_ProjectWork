# CODECLUB APP

## How the App Started

The original idea was born after various discussions between four School of Code students came together to discuss and find solutions to the problems the students might be facing in their day-to-day life within an intense learning environment. 

We quickly realised that it was very time consuming to arrange a date and place for the 150 students to meet, if they felt they needed extra time to understand a subject. 

With this app, we hope that all the students can find people who are at the same place in their journey quickly and efficiently while supporting each other in their struggles.

## About the App

CodeClub App is the place where all the School of Code students can come together and study together!
School of Code students can choose the subject they would like to revise and register their interest on the site. If they would like to guide others on their learning journey, they can achieve this goal by adding their name and availability on the “Volunteer to help” section. 

## Demo
Live demo: https://codeclubs.netlify.app      
Video tutorial: https://vimeo.com/725201751

### How the APP works (beta version)

When students visit the website, they can easily see who is interested in a specific subject and who might be available to offer some help on that specific subject. If there are no volunteers to help, the students still can communicate their learning needs with their peers who are interested in the same subject and arrange an agreeable time and date that suits them. 

1. STUDENTS INPUT.  
Students put their names in the input field for the subject they would like to recap.

2. LIST OF STUDENTS.  
All students can see who have the same subject interest, and can either contact each other (on slack) or organise a session with the info that everyone can see. Afterwards they can decide to participate in a preferred session. 

3. VOLUNTEERS INPUT.  
Students can volunteer to organise a session to help clarify a subject that they feel they have a better understanding of. They can put their names in the input field next to their preffered subject and chose their available days on the dropdown menu. 

4. SESSIONS ANNOUNCEMENTS.  
Once the volunteer submits, a card will appear on the announcement board.

5. ALL THE DATA WOULD BE ERASED.   
All the data would be erased on Saturday night ready for the next week's sessions.

### Where and when will the meetings take place?
The meetings will take place on the Main Zoom Channel rooms (if the permission is granted by the school) or individually arranged Google Meet Rooms. The meeting times will always be after School of Code, starting at 17:30 and the days include every weekday apart from Wednesdays. The pupils will be always more than welcome to arrange their own meeting times and spaces as well.

## Run Locally the Frontend

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-intercoders.git
```

Go to the project directory

```bash
  cd w9_frontend-project-intercoders
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm start
```





## APP Screenshots

![App Screenshot](https://i.ibb.co/yhm8wLy/App-screeshot.png)

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
 
## API Routes
The APIs aim to adhere to RESTful best practices. Here are the routes currently implemented. The API is currently hosted on Heroku.    
Live demo is available: https://intercoders.herokuapp.com/

* As we are using the free version of Heroku, from time to time the credentials might be changed on the server. If this is the case, please feel free to contact one of the authors and we would be more than happy to update them.

| Method | Path | Role | Expected props | Response |
|---|---|---|---|--|
| GET	| /waitinglist | Every students on the waiting list |  | {success: boolean, payload: [{id, studentname, keycourse}]} | 
| GET	| /waitinglist/'course' | Every student per course on the waiting list | {course} as :id | {success: boolean, payload: [{id, studentname, course}]} |
| POST | /waitinglist | Post a new student to the waiting list | {studentname, keycourse}	| {success: boolean, payload: string} |
| DELETE | /waitinglist |	Delete student from the waiting list | {studentname, keycourse}	| {success: boolean, payload: string}	|
| GET |	/announcement |	List every announcement | |  {success: boolean, payload: [{index, id, keycourse, volunteername, date, time}]} |
| POST |	/announcement |	Create a new announcement | {id, keycourse, volunteername, date, time}	| {success: boolean, payload: string}|
| DELETE |	/announcement |	Delete an announcement | {keycourse, volunteername, date}	| {success: boolean, payload: string}|
| GET	| /course |	List every courses | | {success: boolean, payload: [{id, course}]} |
| POST | /course | Create a new course category | {course}	| {success: boolean,   payload: string} |	
| POST | /users/login | Login for users | {username, pqssword}	| {success: boolean, payload: [{id, username, course}]} |
| POST | /users/register | Registering a new student | {username, password}	| {success: boolean, payload: [{id, username, course}]} |

## Tech Stack

**Client:** React, HTML, CSS, Javascript

**Server:** Node.js, Express, Axios, CORS, Heroku, 
Postman API

## How Technologies and libraries were used in this repository:

 - **React.js**: The main library we used for the front end application
 - **Node.js**: We used the Node.JS runtime environment for the backend
 - **Express**: We used Express framwework to build the Node web application
 - **Axios**: This library helped us to establish the communication between the frontend and backend
 - **CORS**: We used it to permit loading resources when the origin of the request was different than the destination.
 - **Heroku**: Heroku is hosting our PostgreSQL database and the API of our application.
 - **Postman API**: This tool was very useful to test the API's routes and the database
 - **Git and GitHub**: Git version control and GitHub branches were used to be able to separate the tasks and could work as a team on the same codebase. 


Available Documentation for Setting Up 
---
React.js : ( https://reactjs.org/docs/create-a-new-react-app.html )

Node.js :  ( https://nodejs.org/en/ )
          ( https://nodejs.org/en/docs/guides/getting-started-guide/ )

PostgreSQL : (https://www.postgresql.org/)

Heroku : (https://id.heroku.com/login)

Postman API :  (https://www.postman.com/)


## Authors

- [@millagmc](https://github.com/millagmc)
- [@smurfeda](https://github.com/smurfeda)
- [@ghavasi](https://github.com/Szfinx5)
- [@maroaraujo](https://github.com/maroaraujo)




 Lessons Learned:
--
What did you learn while building this project?

1. The first lesson learned was about the communication throught the project, we were not communicating as much as needed on the first day and that set us back a few times when we were both doing the same thing again.

2. Second Lesson would be about how important it is to understand react tree components and how the props are passed from parents to children. We struglled to pass the props a few times in our project and that hold our progression back.

3. How to filter the information on the backend is really important so we don't need to do it on thr frontend

What challenges did you face and how did you overcome them?

1. We had a hard time to connect the front end with the back end and we overcome that by setting a time where both parts involved
would talk more about it and fix the remain issues.

2. We had a hard time with the variables as well, so we set a time to plan them and make them more semantic.

## Strech Goals

- REGISTRATION AND LOGIN.  
For the next versions we would like to add a registration and login on the landing page.

- STUDENTS ADD DIFFERENT SUBJECTS / TOPICS.  
On this feature the students will be able to add new subjects, instead of just the predetermined ones. 

- RESOURCES AND LINKS ORGANIZED IN A DASHBOARD.  
On the side of the code club, we would like to add a dashboard where the students can put links for studies divided by topics.

Repositories
-- 
Front-End:
https://github.com/SchoolOfCode/w9_frontend-project-intercoders

Back-End:
https://github.com/SchoolOfCode/w9_backend-project-intercoders

Branches Explanation
--

We used the branches whenever we want to implement a new feature. for example Heroku Branch was the one used when we wanted to deploy our backend in the cloud. So we used the name of the provider before we merge in the main. Most of those branches does not exist anymore since they were merged with the main for the final project

License
-- 

Copyright (c) 2022 InterCoders

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



