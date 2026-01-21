// return valid errors -> status code >= 400 && message is non empty string

const errors = [
  { status: 200, message: "OK" },
  { status: 500, message: "Server error" },
  { status: 404, message: "Not found" },
  { status: 400, message: "" }
]

const errorLog = (errors) => {
    if(!Array.isArray(errors)) return []

    let res = []
    for(const error of errors){
        const {status, message} = error
        //validate inputs
        if(typeof status !== "number" || typeof message !== "string") continue
        //valid error
        if(status < 400 || message.trim() === "") continue

        res.push({status, message})
    }

    return res;
}

console.log(errorLog(errors))