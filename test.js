const search = "arif";
const arr = ["arif","nishan","saju","abir"];

const filterArr = arr.filter((data) => {
    if(data === ""){
        return true;
    }else if(data.toLowerCase().includes(search)){
        return true;
    }
})

console.log(filterArr);