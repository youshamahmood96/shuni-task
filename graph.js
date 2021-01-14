class Graph {
    constructor(){
        this.vertices = []
    }
    verticesArray(data){
        for(let i=0; i<data.length; i++){
            if(this.vertices.indexOf(data[i].volunteerName) === -1){
             this.vertices.push(data[i].volunteerName)
            }
        }
        return this.vertices
    }
    generateMatrix(length){
        return Array(length).fill(null).map(() => Array(length).fill(0));
    }
}
module.exports =Graph
