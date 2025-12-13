### Running Time of Topological Sort

**Time complexity for Kahn's algorithm:**

Lets assume that we are ordering a graph with V vertices and E edges using Topological Sort.

  -  While traversing the nodes, when we come across a node (Let it be X), we need to decrease the indegree of all the nodes which have the edges from the node X. So time complexity for decreasing all the indegree of the connected nodes is O(|E|).
  -  In Topological sort, we run across all edges, which takes O(|V|) time. Hence overall time complexity becomes O(|V|+|E|).

**Time complexity for Topological sort through DFS:**

Since it is modification of DFS, time complexity doesn't alter. Time complexity is O(|V|+|E|).

### Space Complexity of Toplological Sort

**Space complexity for Kahn's Algorithm:**

While enqueuing a node, we need some extra space to store temporary values. Other than that, the ordering can be done in-place. Hence space complexity is O(|V|).

**Space complexity for Topological Sort through DFS:**

Since we need to store the sequence of nodes into a stack, we need some extra space. Other than that, the ordering can be done in-place. Hence space complexity is O(|V|).

