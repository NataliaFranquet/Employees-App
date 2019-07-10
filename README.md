# Employees-App

## Installation
1. Clone the repository `git clone https://github.com/NataliaFranquet/Employees-App`
2. Create a .env file on server directory: 
```
PORT=5000
LOCAL_MONGO=mongodb://localhost/mediasmart
URL=http://work.mediasmart.io
PAGE=0
PAGE_SIZE=2000
PASSWORD=
ENV=development
```
### Run app on your local machine
1. Go to server directory and install the dependencies: `npm i`
2. Run the server: `npm run dev` if you are on Ubuntu/MacOS or `npm run dev-windows` if you are on Windows
3. The server is listening on `http://localhost:5000`
4. Run the `seeds.js` file to fill the database in MongoDb: on the terminal go to server directory and run
`node bin/seeds.js`
5. On another terminal go to client directory and install the dependencies: `npm i`
6. Run the client: `npm start`.
7. The client is listening on port 3000: `http://localhost:3000`
