class Graph {
    constructor(){
      this.vertices = []
    }
    
    print(){
      this.vertices.forEach((vertex) => vertex.print())
    }
    
    addNode(value){
      const newNode = new Node(value)
      this.vertices.push(newNode)
    }
    
    addEdge(node1val,node2val){
      const node1 = this.vertices.find(v => v.value===node1val)
    
      const node2 = this.vertices.find(v => v.value===node2val)
    
      node1.edges.push(node2)
      node2.edges.push(node1)
    }
    
    
    removeNode(nodeVal){
      console.log(`rm ${nodeVal}`)  
      //     rm edges  
      const nodeToRemove= this.vertices.find(v => v.value===nodeVal)  
      nodeToRemove.edges.forEach(neighborNode=>{
        neighborNode.edges = neighborNode.edges.filter(edge=>edge.value !== nodeVal)
      })
      //     rm node
      this.vertices = this.vertices.filter(v=> v.value !== nodeVal)  
      
    }
    
    
    
    rTraverse(node1,node2, path=`${node1.value}`){
      console.log(`rTraverse-- \ncurrent: ${node1.value} Goal: ${node2.value}. Path so far: ${path}`)
      // nodes are connected
      if (node1.edges.includes(node2)) {
        console.log(`${node1.value}<->${node2.value}`)
      return `${path}->${node1.value}->${node2.value}`
    }
      // node1 is a leaf
      if (node1.edges.length === 0) {
        console.log(`${node1.value} is leaf`)
      return ""    
      
    }
      // node1 has edges
      console.log(`${node1.value} has edges`)
      node1.edges.forEach(neighborNode=> 
        
  path += this.rTraverse(neighborNode,node2,`${path}->${node1.value}`)
  )
  return path
    }
    
    tracePath(node1val, node2val){
  
       console.log(`* ${node1val} to ${node2val}`)
      const node1 = this.vertices.find(v => v.value===node1val)
      const node2 = this.vertices.find(v => v.value===node2val)
      const path = this.rTraverse(node1, node2)
      console.log(path)
  //     
  //     
  //     
    }
  }
  
  
  
  
  class Node {
    constructor(value){
      this.value = value
      this.edges = []
    }
    
    print(){
      console.log(`Value: ${this.value}`)
      this.edges.forEach(edge => console.log(`-> ${edge.value}`))
    }
  }
  
  
  
  const graph = new Graph()
  graph.addNode("A")
  graph.addNode("C")
  graph.addEdge("A","C")
  graph.addNode("B")
  graph.addEdge("B", "C")
  graph.addNode("D")
  graph.addEdge("B", "D")
  
  graph.removeNode("A")
  
  graph.tracePath("C", "D")
  // graph.addNode("E")
  // graph.addNode("F")
  // graph.addNode("G")
  // graph.addEdge("D", "E")
  // graph.addEdge("F", "E")
  // graph.addEdge("F", "G")
  // graph.print()
  // graph.tracePath("A", "D")