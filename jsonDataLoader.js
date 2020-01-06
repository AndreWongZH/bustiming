const axios = require('axios');
const fs = require('fs');

const obj = {
  table: []
}

for (skip = 0; skip < 5000; skip += 500) {
  axios
    .get('http://localhost:5000/api/addBusstopInfo', {
      params: {
        skip
      }
    })
    .then((res) => {
      console.log(res);
      res.forEach((eachBusstopCode) => {
        obj.table.push(eachBusstopCode);
      })
    })
    .catch((err) => {
      console.log(err);
    })
}

const json = JSON.stringify(obj);
fs.writeFile('busstopcodeinfo.json', json, 'utf8', (err, data) => {
  console.log('updated to json file')
})