# Hack.Diversity MERN Stack Template

## Getting Started

Wondering how to get this thing working? Well, do we have the READMEs for you!

- [server](server/README.md)
- [client](client/README.md)

### Development Workflow

*Note*: If you are getting set up for the first time, please read the readmes in the client and server folders! You'll need to set up MongoDB to get the app working properly, and there are instructions in the server folder.

- Open at least 2 terminal windows/tabs, all of which starting from the root directory of this project (i.e. `~/your/local/path/to/template-react-express-monorepo`).
  - If you use vs code, you can go to Terminal tab and click on `New Terminal` to open a new terminal window in the footer of the vscode window.
  - You can organize your terminal windows by draging and dropping them around. e.g., you can drag the first terminal window to the right of the second terminal window. It is also possible to have multiple terminal windows open at the same time for other editors such as Sublime Text (look [here](https://forum.sublimetext.com/t/terminal-in-sublime-not-as-new-tab/37866/2) for more info).
- In the root directory of the project, run `yarn install` to install all the dependencies.
- In one of those windows/tabs, navigate to the `client` directory and run `yarn start`. It can be two separate commands or one command joined by `&&`.

  ```sh
  cd client/ && yarn start
  ```

- In another one of your terminals, navigate to the `server` directory and run `yarn server`

  ```sh
  cd server/ && yarn server
  ```

- You should then see the frontend of the app by navigating to `http://localhost:8000/` in a web browser
- You can also ping the server directly at `http://localhost:3000/`, such as `http://localhost:3000/api/items` (it will be empty if you haven't added items yet)

## FAQ

**Use of the API?**

Patterns for the REST API:
<p><b>patients</b> collection CRUD operations:</p>



  
>>>>>>> 
- "GET http://\<host\>:\<port\>/api/patients" <-- gets all patients
- "GET http://\<host\>:\<port\>/api/patients/\<id\>" <-- gets patient with given id
- "POST http://\<host\>:\<port\>/api/patients" \<-- inserts a new defined patient into the collection
- "PUT http://\<host\>:\<port\>/api/patients/\<id\>" <-- updates the patient that corresponds to the given id
- "DELETE http://\<host\>:\<port\>/api/patients/\<id\>" <-- deletes the patient with the corresponding id

<p><b>exams</b> collection CRUD operations:</p>



  
>>>>>>> 
- "GET http://\<host\>:\<port\>/api/exams" <-- gets all exams
- "GET http://\<host\>:\<port\>/api/patients/\<id\>/exams" <-- returns all the exams that correspond to the given patient's id
- "GET http://\<host\>:\<port\>/api/exams" <-- gets an exam with a specific id
- "POST http://\<host\>:\<port\>/api/exams" <-- inserts a new defined exam into the collection
- "PUT http://\<host\>:\<port\>/api//\<id\>" <-- updates the exam that corresponds to the given id
- "DELETE http://\<host\>:\<port\>/api/exams/\<id\>" <-- deletes the exam with the corresponding id

<p><b>Other</b> CRUD operations:</p>



  
>>>>>>> 
- "GET http://\<host\>:\<port\>/api/geninfo" <-- get a comprehensive combination of patient and their last exam information
