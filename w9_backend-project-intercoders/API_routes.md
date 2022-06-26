## API Routes
The APIs aim to adhere to RESTful best practice. Here are the routes currently implemented.    

| Method | Path | Role | Expected props | Response |
|---|---|---|---|--|
| GET	| /waitinglist | Every students on the waiting list |  | {success: boolean, payload: [{id, studentname, keycourse}]} | 
| GET	| /waitinglist/'course' | Every student per course on the waiting list | {course} as :id | {success: boolean, payload: [{id, studentname, course}]} |
| POST | /waitinglist | Post a new student to the waiting list | {studentname, keycourse}	| {success: boolean, payload: string} |
| DELETE | /waitinglist |	Delete student from the waiting list | {studentname, keycourse}	| {success: boolean, payload: string}	|
| GET |	/announcement |	List every announcement | |  {success: boolean, payload: [{index, id, keycourse, volunteername, date, time}]} |
| POST |	/announcement |	Create a new announcement | {id, keycourse, volunteername, date, time}	| {success: boolean, payload: string}|
| GET	| /course |	List every courses | | {success: boolean, payload: [{id, course}]} |
| POST | /course | Create a new course category | {course}	| {success: boolean,   payload: string} |	
