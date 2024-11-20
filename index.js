const jsonserver = require('json-server');

const Mpserver = jsonserver.create();

const middlware = jsonserver.defaults()

const route = jsonserver.router("new.json")

const PORT =3000||process.env.PORT

Mpserver.use(middlware)
Mpserver.use(route)
Mpserver.listen(PORT,()=>{console.log(`the server is listening ${PORT}`);}
  
)

