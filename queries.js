const { Client } = require("pg");
const axios = require('axios');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'me',
  password: 'password',
  database: 'bustiming'
});
client.connect();

// Initialise busstop_code_info table
const initTable = (request, response) => {
  client.query('create table busstop_code_info(busstopcode NUMERIC PRIMARY KEY,description VARCHAR NOT NULL,latitude NUMERIC,longitude NUMERIC)', (error, results) => {
    if (error) {
      throw error
    }
  })
  client.query('create table busservice_number(servicenumber VARCHAR, busstopcode VARCHAR, direction SMALLINT, stopsequence INTEGER);', (error, results) => {
    if (error) {
      throw error
    }
  })
}


// Add data to busstop_code_info
const addBusstopCodeInfo = (req, res) => {
  console.log(req.query.skip);
  url = 'http://datamall2.mytransport.sg/ltaodataservice/BusStops?$skip=' + req.query.skip.toString()
  axios.get(url, {
    headers: {
      AccountKey: '5ka0OkNOSFizAJDBe3K0Cg=='
    }
  }).then((response) => {
    res.send(response.data.value);
  })
}

// response.data.value.forEach((eachBusstopCode) => {
//   client.query('INSERT INTO busstop_code_info (busstopcode, description, latitude, longitude) VALUES ($1, $2, $3, $4)', [eachBusstopCode.BusStopCode, eachBusstopCode.Description, eachBusstopCode.Latitude, eachBusstopCode.Longitude], (error, results) => {
//     if (error) {
//       throw error
//     }
//   })
// })
// console.log("Table Updated")


// Add data to BusServiceNumber
const addBusserviceNumber = (req, res) => {
  url = 'http://datamall2.mytransport.sg/ltaodataservice/BusRoutes';
  axios.get(url, {
    headers: {
      AccountKey: '5ka0OkNOSFizAJDBe3K0Cg=='
    }
  }).then((response) => {
    res.send(response.data);
    response.data.value.forEach((eachBusRoute) => {
      client.query('INSERT INTO busservice_number (servicenumber, busstopcode, direction, stopsequence) VALUES ($1, $2, $3, $4)', [eachBusRoute.ServiceNo, eachBusRoute.BusStopCode, eachBusRoute.Direction, eachBusRoute.StopSequence], (error, results) => {
        if (error) {
          throw error
        }
      })
    })
    console.log("Table Updated")
  })
}

// get all users
const getUsers = (request, response) => {
  client.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// get a single user by id
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  client.query('Select * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name, email } = request.body
  client.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  client.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  client.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  initTable,
  addBusstopCodeInfo,
  addBusserviceNumber,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
