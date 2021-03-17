function handlers(){
document.getElementById("rege").onclick=function(){regen();};
document.getElementById("res").onclick=function(){reset();};
}

function main_functions()
{ 
  handlers();
};
document.body.onload = function() {main_functions();}

function resetedge(edgeID)
{
    if(edgeID)
    {
      var clickedEdge = edges.get(edgeID);
      clickedEdge.color = {
      color: '#000000',
      highlight:'#000000',
      highlightwidth: 0
    };
    clickedEdge.width=2.0;
    clickedEdge.selectionWidth=0;
    edges.update(clickedEdge);
  }
}
function regen()
{
    location.reload();
}

function reset(){
  addedEdges=0;
  flag_1=0;
  for (i in ans[0]){
    resetedge(ans[0][i]);
  }  
  document.getElementById("ins").innerHTML="";
  graph.setOptions({
  interaction:{
    selectable:true
  }
});
  ans=onresetans;
  var nOfundos=fin.length;
  for(i=0;i<nOfundos;i++)undo();
}


    
  var flag_1=0;

  var graphNo=getRandom();
  var nodes = new vis.DataSet (graphSet[graphNo][0]);
  var edges = new vis.DataSet (graphSet[graphNo][1]);
  graphs[graphNo]();
  var container = document.getElementById('graph');
  var data = {
  nodes: nodes,
  edges: edges
  };
  var graph = new vis.Network(container, data, {});
  var onresetans=ans;



graph.setOptions({
clickToUse:true,
  nodes:{
          fixed:false,
          borderWidth: 2,
          borderWidthSelected: 0,
          
            color: {
              border: "#2C9AD1",
              background: "#ffffff",
              highlight: {
                border: "#2C9AD1",
              background: "#ffffff",
                
              },
              hover: {
                border: "#2C9AD1",
              background: "#ffffff",
                
              }
            },
            shape:'circle',
            scaling:{
              label:{
              enabled:true,
              min:25,
              max:25
              }
            },
            value:1
          },
        
        interaction: {
          dragView:false,
          zoomView: false,
          selectConnectedEdges: false,
          hover: true,
          hoverConnectedEdges: false,
          keyboard: {
                enabled: true,
                bindToWindow:true
            },
            navigationButtons: true,
            zoomView: false
        
        },
        physics: {enabled: false,
        stabilization:false},
        edges:{
            scaling:{
              min:1,
              max:3,
              label:{
              enabled:true,
              min:20,
              max:20
              }
            },
            value:1,
          hoverWidth:0,
          selectionWidth: 0,
          font: {background: 'white',color:"#000000"},
          width: 2,
          labelHighlightBold: false,
          color : {
      inherit: false,
      color: "#000000",
      opacity: 2.0,
      hover:"#000000",     
      highlight:"#000000",
    },
    chosen : {
      inherit: false
    },

arrows: {
  to:     {enabled: false, scaleFactor:1, type:'arrow'},
  middle: {enabled: true, scaleFactor:1, type:'arrow'},
  from:   {enabled: false, scaleFactor:1, type:'arrow'}
  
},
chosen:{

},
physics: false
}}

);



function clickednode(nodeID){
  if (nodeID) 
  {
    var clickedNode = nodes.get(nodeID);
    console.log(clickedNode)
    clickedNode.color = {
      border: '#B22222'
    }
    nodes.update(clickedNode);
  }
}
function clickededge1(edgeID){
  if(edgeID){
  var clickedEdge = edges.get(edgeID);
  clickedEdge.color = {
    color: '#00008b',
    highlight:'#00008b',
    hover:'#00008b'
  }
  edges.update(clickedEdge);
}
} 
function clickededge2(edgeID){
  if(edgeID)
  {
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
      color: 'brown',
      highlight:"brown",
      hover:"brown"
    }
    clickedEdge.width = '1.5';
    edges.update(clickedEdge);
  }
}

function clickededge3(edgeID)
{
  if(edgeID){
    var clickedEdge = edges.get(edgeID);
    console.log(edgeID);
    clickedEdge.color = {
      color: '#83F52C',
      highlight: "#83F52C",
      hover: "#83F52C"
    }
    clickedEdge.width = 1.5;
    edges.update(clickedEdge);
    console.log(edgeID+"3click");
  }
}

function clickednode1(nodeID)
{  
  if (nodeID) 
  {
  var clickedNode = nodes.get(nodeID);
  clickedNode.hidden=true;
  nodes.update(clickedNode);
  }
}

function clickednode2(nodeID)
{
  if (nodeID) {
  var clickedNode = nodes.get(nodeID);  
  clickedNode.hidden=false;
  nodes.update(clickedNode);
  }
}

function clickednode3(nodeID)
{  
  var clickedNode = nodeID;
  clickedNode.hidden=false;
  nodes.update(clickedNode);  
}

  var networkCanvas = document.getElementById("graph").getElementsByTagName("canvas")[0]
  function changeCursor(newCursorStyle){
    console.log("change");
	networkCanvas.style.cursor = newCursorStyle;
  }
  function changeEventCursor(eventName,cursorType){ 
    graph.on(eventName, function() {
      changeCursor(cursorType);
    });
  }
  
  graph.on('hoverNode', function () {
	changeCursor('pointer');
  });
  graph.on('blurNode', function () {
	changeCursor('default');
  });
  graph.on('hoverEdge', function () {
	changeCursor('default');
  });
  graph.on('blurEdge', function () {
	changeCursor('default');
  });
  graph.on('dragStart', function () {
	changeCursor('grabbing');
  });
  graph.on('dragging', function () {
	changeCursor('grabbing');
  });
  graph.on('dragEnd', function () {
	changeCursor('grab');
  });
 

  var fin=[];
  graph.on("click", function(params) 
  {
    if(!params['nodes']['0']&&!params['edges']['0']){return;} 
    if(params['nodes']['0'])
    {
      if(g.toposort(params['nodes']['0']))
      {
        clickednode1(params['nodes']['0']);
        fin.push(params['nodes']['0']);
        document.getElementById("ins").innerHTML=params['nodes']['0']+" is done"+" proceed further";
        document.getElementById("seq").innerHTML+=params['nodes']['0']+",";
      }
      else
      {
        document.getElementById("ins").innerHTML=params['nodes']['0']+" can not be done"+" because its indegree is not zero";  
      }
      if(g.check()){document.getElementById("ins").innerHTML+="   and nodes are done so Topological sort is done"}
    }
  });

  function undo()
  {
    var a=fin.pop()
    g.revtoposort(a);
    clickednode2(a);
    document.getElementById("seq").innerHTML="<b>Sorted Order : </b>"+fin;    
  }
