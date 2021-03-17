var ans=[0];


class PriorityQueue {
    constructor(maxSize) {
        if (isNaN(maxSize)) {
           maxSize = 2000;
         }
        this.maxSize = maxSize;
        this.container = [];
     }
    display() {
       console.log(this.container);
    }
    isEmpty() {
       return this.container.length === 0;
    }
    isFull() {
        return this.container.length >= this.maxSize;
     }
    enqueue(data, priority) {
       if (this.isFull()) {
          console.log("Queue Overflow!");
          return;
       }
       let currElem = new this.Element(data, priority);
       let addedFlag = false;
       for (let i = 0; i < this.container.length; i++) {
          if (currElem.priority > this.container[i].priority) {
             this.container.splice(i, 0, currElem);
             addedFlag = true; break;
          }
       }
       if (!addedFlag) {
          this.container.push(currElem);
       }
    }
    dequeue() {
    if (this.isEmpty()) {
       console.log("Queue Underflow!");
       return;
    }
    return this.container.pop();
 }
 
 clear() {
    this.container = [];
    }
 }

 PriorityQueue.prototype.Element = class {
    constructor(data, priority) {
       this.data = data;
       this.priority = priority;
    }
 };


class Graph {
    constructor() {
       this.edges = {};
       this.nodes = [];
    }
 
    addNode(node) {
       this.nodes.push(node);
       this.edges[node] = [];
       ans.push(0);
    }

 
    addEdge(node1, node2, weight = 1) {
       this.edges[node1].push({ node: node2, weight: weight });
       this.edges[node2].push({ node: node1, weight: weight });
    }


    addDirectedEdge(node1, node2, weight=0) {
      this.edges[node1].push({node: node2,weight: weight});
      ans[node2]++;
   }

    kruskalsMST() 
   {
      ans=[];
      ans.push([0]);ans.push([0]);  
      var nOfEdges=0;
        const MST = new Graph();
        this.nodes.forEach(node => MST.addNode(node));
        if (this.nodes.length === 0) {
           return MST;
        }
     
        var edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
        
        for (let node in this.edges) {
           this.edges[node].forEach(edge => {
              edgeQueue.enqueue([node, edge.node], edge.weight);
           });
        }
        console.log("Array Sorted");
        let uf = new UnionFind(this.nodes);
         var i=0;
        while (!edgeQueue.isEmpty() ) {
         let nextEdge=edgeQueue.dequeue();
           let nodes = nextEdge.data;
           let weight = nextEdge.priority;
           if(prevnode0!==nodes[1] || prevnode1!==nodes[0]){
           var prevnode0=nodes[0];var prevnode1=nodes[1];
           ans[0].push(weight);
           console.log("checking edge"+nodes[0]+"->"+nodes[1]);//Blue the nodes[0]->nodes[1]
           if (!uf.connected(nodes[0], nodes[1])) {
              ans[1].push(weight);  
              MST.addEdge(nodes[0], nodes[1], weight);
              console.log("nocycle formation due to"+nodes[0]+"->"+nodes[1]+"so add to mst");//Green the nodes[0]->nodes[1];
              uf.union(nodes[0], nodes[1]);
              nOfEdges++;
           }
           else{
            console.log("cycle formation due to "+nodes[0]+"->"+nodes[1]+" so don't add to mst");//Remove or lighten the nodes[0]->nodes[1];
            ans[1].push(0);        
           }
           }
        }
        return MST;
   }



    primsMST(a){
       abc=[];
       addd=[];
       ans=[];
       ans.push([0]);ans.push([0]);       
      const MST = new Graph();
      if (this.nodes.length === 0) {
         return MST;
      }
      let s=this.nodes[a];
      
      let edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
      let explored = new Set();
      let inMst = new Set();

      explored.add(s);
      MST.addNode(s);
      console.log("green"+s);
      inMst.add(s);
      var x=[];
      this.edges[s].forEach(edge => {
         edgeQueue.enqueue([s, edge.node], edge.weight);
         abc.push(edge.weight);
         console.log("adding edge"+s+"->"+edge.node);
      });addd.push(x);
       
      
      while (!edgeQueue.isEmpty()) {
         let currentMinEdge = edgeQueue.dequeue();
         ans[0].push(currentMinEdge.priority);
         console.log("checking min edge"+currentMinEdge.data[0]+"->"+currentMinEdge.data[1]);
         
         while ( explored.has(currentMinEdge.data[1])) {
            console.log("min edge not accepted"+currentMinEdge.data[0]+"->"+currentMinEdge.data[1]);
            ans[1].push(0);
            if(edgeQueue.isEmpty()){break;}
            currentMinEdge = edgeQueue.dequeue();
            console.log("checking next min edge"+currentMinEdge.data[0]+"->"+currentMinEdge.data[1]);
            ans[0].push(currentMinEdge.priority);
         }
         let nextNode = currentMinEdge.data[1];
         
   
         if (!explored.has(nextNode)) {
            MST.addNode(nextNode);
            MST.addEdge(currentMinEdge.data[0], nextNode, currentMinEdge.priority);
            console.log("Add"+nextNode+"->"+currentMinEdge.data[0]);
            ans[1].push(currentMinEdge.priority);
            x=[];
            this.edges[nextNode].forEach(edge => {
            
            if(!explored.has(edge.node)){
               edgeQueue.enqueue([nextNode, edge.node], edge.weight);
               x.push(edge.weight);
               console.log("adding edge"+nextNode+"->"+edge.node);
            }
         });addd.push(x);
   
            
            s = nextNode;
            explored.add(s);
         }
         
      }
      return MST;
   }

    check(){
       var ii;
       for(ii in ans){
          if(ii>0)
          if(ans[ii]!=-1)return 0;

       }
       return 1;

    }


   toposort(a){
      console.log("toped");
      if(ans[a]==0){console.log("Correct"+a+ans);
      this.edges[a].forEach(edge => {ans[edge.node]--;});
      ans[a]=-1;
      return 1;
   }
   else{console.log("invalid");return 0;}
   
         
}


revtoposort(a){
   this.edges[a].forEach(edge => {ans[edge.node]++;});
   ans[a]=0;        
}
}
      
    
    

 class UnionFind {
    constructor(elements) {
       this.count = elements.length;
 
       this.parent = {};
 
       elements.forEach(e => (this.parent[e] = e));
    }
 
    union(a, b) {
       let rootA = this.find(a);
       let rootB = this.find(b);
 
       if (rootA === rootB) return;
 
       if (rootA < rootB) {
          if (this.parent[b] != b) this.union(this.parent[b], a);
          this.parent[b] = this.parent[a];
       } else {
          if (this.parent[a] != a) this.union(this.parent[a], b);
          this.parent[a] = this.parent[b];
       }
    }
 
    find(a) {
       while (this.parent[a] !== a) {
          a = this.parent[a];
       }
       return a;
    }
 
    connected(a, b) {
       return this.find(a) === this.find(b);
    }
 }
let g = new Graph();

if(g.check())console.log("finished");
