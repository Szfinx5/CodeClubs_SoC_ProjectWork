# CODECLUB APP

## Team members

- **Camilla Santos**:   https://github.com/millagmc
- **Eda Burns**   : https://github.com/smurfeda
- **Gabor Havasi**  https://github.com/Szfinx5
- **Maria Roberta Moller**   https://github.com/maroaraujo

## About the App

CodeClub App is the place where all the School of Code students can come together and study together!
School of Code students can choose the subject they would like to revise and register their interest on the site. If they would like to guide others on their learning journey, they can achieve this goal by adding their name and availability on the “Volunteer to help” section.  
When students visit the website, they can easily see who is interested in a specific subject and who might be available to offer some help on that specific subject. If there are no volunteers to help, the students still can communicate their learning needs with their peers who are interested in the same subject and arrange an agreeable time and date that suits them.

The meetings will take place on the Main Zoom Channel rooms (if the permission is granted by the school) or individually arranged Google Meet Rooms. The meeting times will always be after School of Code, starting at 17:30 and the days include every weekday apart from Wednesdays. The pupils will be always more than welcome to arrange their own meeting times and spaces as well.

## How the App Started

The original idea was born after various discussions between four School of Code students came together to discuss and find solutions to the problems the students might be facing in their day-to-day life within an intense learning environment. We quickly realised that it was very time consuming to arrange a date and place for the 150 students to meet, if they felt they needed extra time to understand a subject.
With this app, we hope that all the students can find people who are at the same place in their journey quickly and efficiently while supporting each other in their struggles.

## How the APP works (beta version)

1. STUDENTS INPUT.  
   Students put their names on the subject they want to recap

2. LIST OF STUDENTS.  
   All students can see who have the same subject interest, and can either contact each other (on slack) or organise a session which everyone could see it and participate.

3. VOLUNTEERS INPUT.  
   Students can volunteer themselves to organise a session to help or discuss a subject, they put the names and their available days.

4. SESSIONS ANNOUNCEMENTS.  
   Once the volunteer submit, a card is going to appears on the announcement board

5. ALL THE DATA WOULD.  
   All data would be erased on saturday night, for the next week sessions and for new students list.

## Technologies and libraries used in this repository:

- **React.js**: The main library we used for the front end application
- **Node.js**: We used the Node.JS runtime environment for the backend
- **Express**: We used Express framwework to build the Node web application
- **Axios**: This library helped us to establish the communication between the frontend and backend
- **CORS**: We used it to permit loading resources when the origin of the request was different than the destination.
- **Heroku**: Heroku is hosting our PostgreSQL database and the API of our application.
- **Postman API**: This tool was very useful to test the API's routes and the database
- **Git and GitHub**: Git version control and GitHub branches were used to be able to separate the tasks and could work as a team on the same codebase.

## What does this repository contain?

We have the backend of our application in this repository.

- **Main** branh is an up-to-date version of the code.
- **heroku** branch is a deployed branch of the API
- **backend and sanitizing** branches are a temporary branches used during the active development of different fonctions. When the main development was finished and the tests were passed, it was merged to the main branch.
- **version1**: This branch was intended as a temporary location of a working API which still used the previous database structure.

## API Routes

The APIs aim to adhere to RESTful best practice. Here are the routes currently implemented. The API is currently hosted on Heroku.  
Live demo is available: https://intercoders.herokuapp.com/

| Method | Path                  | Role                                         | Expected props                             | Response                                                                         |
| ------ | --------------------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------- |
| GET    | /waitinglist          | Every students on the waiting list           |                                            | {success: boolean, payload: [{id, studentname, keycourse}]}                      |
| GET    | /waitinglist/'course' | Every student per course on the waiting list | {course} as :id                            | {success: boolean, payload: [{id, studentname, course}]}                         |
| POST   | /waitinglist          | Post a new student to the waiting list       | {studentname, keycourse}                   | {success: boolean, payload: string}                                              |
| DELETE | /waitinglist          | Delete student from the waiting list         | {studentname, keycourse}                   | {success: boolean, payload: string}                                              |
| GET    | /announcement         | List every announcement                      |                                            | {success: boolean, payload: [{index, id, keycourse, volunteername, date, time}]} |
| POST   | /announcement         | Create a new announcement                    | {id, keycourse, volunteername, date, time} | {success: boolean, payload: string}                                              |
| DELETE | /announcement         | Delete an announcement                       | {keycourse, volunteername, date}           | {success: boolean, payload: string}                                              |
| GET    | /course               | List every courses                           |                                            | {success: boolean, payload: [{id, course}]}                                      |
| POST   | /course               | Create a new course category                 | {course}                                   | {success: boolean, payload: string}                                              |
| POST   | /users/login          | Login for users                              | {username, pqssword}                       | {success: boolean, payload: [{id, username, course}]}                            |
| POST   | /users/register       | Registering a new student                    | {username, password}                       | {success: boolean, payload: [{id, username, course}]}                            |

## Available Documentation for Setting Up

React.js : ( https://reactjs.org/docs/create-a-new-react-app.html )

Node.js : ( https://nodejs.org/en/ )
( https://nodejs.org/en/docs/guides/getting-started-guide/ )

PostgreSQL : (https://www.postgresql.org/)

Heroku : (https://id.heroku.com/login)

Postman API : (https://www.postman.com/)
