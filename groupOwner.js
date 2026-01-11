/*
Question 8 — Light DSA (Startup-Relevant)

No leetcode tricks. Just practical logic.

Problem Statement

You receive an array of project objects:

[
  { id: "1", ownerId: "a", name: "X" },
  { id: "2", ownerId: "b", name: "Y" },
  { id: "3", ownerId: "a", name: "Z" }
]

Task

Write a function that groups projects by ownerId into this shape:

{
  "a": [
    { id: "1", name: "X" },
    { id: "3", name: "Z" }
  ],
  "b": [
    { id: "2", name: "Y" }
  ]
}
*/ 

//I'd use Object data structure as it allows const time lookup and ideal for gruping by dynamic keys
//O(n)<-TC 
function groupByOwnerId(projects) {
    let results = {}

    for (let project in projects) {
        const { name, id, ownerId } = project

        if (!results[ownerId]) results[ownerId] = [];
        results[ownerId].push({ id, name });
    }
    return results;
}