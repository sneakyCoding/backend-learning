function isValidIdentifier(s){
    if(typeof s !== "string" || s.trim()=== "") return false;
    if(Number(s[0])) return false;
    for(let i = 1;i<s.length;i++){
        if(s[i] >= "a" && s[i] <= "z") continue;
        if(s[i] >= "A" && s[i] <= "Z") continue;
        if(s[i] >= "0" && s[i] <= "9") continue;
        if(s[i] === "_") continue;
        else return false;
    }

    return true;
}


console.log(isValidIdentifier("2user1"))

