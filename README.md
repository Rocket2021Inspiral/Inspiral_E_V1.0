# Inspiral
## How to setup server dev env
- Environment Setup
  - Node.js (https://nodejs.org/en/)
  - Visual Studio Code (https://code.visualstudio.com/)
  
- Server Start
  - cd server
  - npm install
  - node server.js
 

- Web Client Start 
- cd webclient
- npm run serve

When server and client are both started, 
visit http://127.0.0.1:8080/

- How to debug
  - node --inspect server.js
  - Debug with Chrome DevTool

- Source Code Structure
    - ./server.js main file and request endpoints
    - ./model Data Model for the DB
    - ./config Project Config files - e.g. db connection and API Keys
    - ./util Share utils
