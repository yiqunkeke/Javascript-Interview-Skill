// var counter = 3
// function incCounter(){
//     counter++
// }
// module.exports = {
//     counter,
//     incCounter
// }


module.exports = {
    msg: 'module1',
    foo() {
        console.log(this.msg)
    }
}