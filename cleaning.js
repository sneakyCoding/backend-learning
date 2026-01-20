const users = [
  { id: "1", email: "a@test.com", isActive: true },
  { id: "2", email: "", isActive: true },
  { id: null, email: "b@test.com", isActive: true },
  { id: "3", email: "c@test.com", isActive: false }
];


const cleanData = (users) => {
    let res = []
    for(let user of users){
        const {id, email, isActive} = user
        if(!id || typeof email !== "string" || email.trim() === "") continue;
        if(!isActive) continue;
        res.push({id,email})
    }

    return res;
}

const print = cleanData(users)
console.log(print)