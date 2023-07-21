//2//
function pages(a){
    return Math.min.apply(null, Object.values(a))
}
console.log(pages({
    'cyan': 20,
    'red': 40,
    'yellow': 10
})) 

