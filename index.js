// to define json server
const jsonServer =  require('json-server')

// create a server for student-list
const studentsListServer = jsonServer.create()

// set up path/route from json file
const router = jsonServer.router("db.json")

// middleware
const middlewares = jsonServer.defaults()

// set up port
const port = 4000 || process.env.PORT

// use middleware and router in server
studentsListServer.use(middlewares)
studentsListServer.use(router)

// to listen server for resolving request
studentsListServer.listen(port,()=>{
    console.log(`studentsListServer started at port ${port}, and waiting for client request...`);
})