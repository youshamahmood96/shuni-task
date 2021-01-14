# Challenge
A challenge completed using graph data structure and breadth first search algorithm<br/>

## getting started
Run the follwoing commands to run this in your local machine:

` git clone https://github.com/youshamahmood96/task-server.git `

` npm install `

## Approach
- I loaded data from the given csv file using an npm package.
- I wrote a graph class for handling the data.
- I generated a graph for data visualization
- I checked for the overlapping of the schedule of the volunteers using same date and same time.
- I stored the number of overlaps in  my generated graph
- I searched for the overlaps between the nodes in the graph(edges) and printed out the connections along with the weight in a separate results.csv file

## Challenges
- I faced difficulty while preparing the graph.
- I applied depth first search first. It didnt bear correct results. Than I used Breadth first search using adjacecny list. Though it gave good results but I was facing difficulty printing out the number of overlaps. So I went with adjacency matrix.

## Limitations
- This algorithm has a time complexity of 0(n^2)
- It's space complexity is also 0(n^2)

