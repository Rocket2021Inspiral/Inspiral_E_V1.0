# Inspiral
## How to setup server dev env
- Environment Setup
  - Node.js (https://nodejs.org/en/)
  - Visual Studio Code (https://code.visualstudio.com/)
  
- Server Start
  - cd server
  - npm install
  - node server.js
  - Visit http://127.0.0.1:3000

- How to debug
  - node --inspect server.js
  - Debug with Chrome DevTool

- Source Code Structure
    - ./server.js main file and request endpoints
    - ./model Data Model for the DB
    - ./config Project Config files - e.g. db connection and API Keys
    - ./util Share utils