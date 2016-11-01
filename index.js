module.exports = function(num) {
    if(num === 1){
        console.log('have a side effect');
        return true;
    } else {
        return false;
    }
}