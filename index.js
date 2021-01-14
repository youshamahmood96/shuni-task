const csv = require('csvtojson');
const fs = require('fs')
const { Parser } = require('json2csv') 
const Graph = require('./graph');


const network = new Graph()
async function volunteer() {
   const data = await csv().fromFile('volunteer_attendance_data.csv')
   const fields = ['Node1', 'Node2','Weight'];
   let csvI = [];
   let rel = [];
   let vertices = network.verticesArray(data)
   let matrix;
   matrix = network.generateMatrix(vertices.length)
   const opts = { fields };
   for(let i=0; i<data.length; i++){
       for(let j =0; j<data.length; j++){
        if((data[i].date===data[j].date) && data[i].shift === data[j].shift){
            matrix[vertices.indexOf(data[i].volunteerName)][vertices.indexOf(data[j].volunteerName)]++
        }
       }
   }
   for(let i=0; i<vertices.length; i++){
    for(let j =i+1; j<vertices.length; j++){
        if(matrix[i][j]>0){
          rel.push({'Node1':vertices[i],'Node2':vertices[j],'Weight':matrix[i][j]});
        }
    }
}
   
   try {
    const parser = new Parser(opts);
    csvI = parser.parse(rel);
  } catch (err) {
    
  }
  fs.writeFileSync('results.csv',csvI)
}
volunteer();