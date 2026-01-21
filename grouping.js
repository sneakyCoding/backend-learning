// return an object that groups comments by postId

const comments = [
  { id: "c1", postId: "p1" },
  { id: "c2", postId: "p1" },
  { id: "c3", postId: "p2" }
]

const grpByPid = (comments) => {
    if(!Array.isArray(comments)) return {}

    let res = {};
    for(const comment of comments){
        const {postId, id} = comment;

        if(typeof postId !== "string" || typeof id !== "string") continue;
        if(postId.trim() === "" || id.trim() === "") continue;
        if(!res[postId]){
            res[postId] = []
        }
        res[postId].push(id);
    }
    return res;
}

console.log(grpByPid(comments));