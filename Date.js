exports.getDate = function(){
    var today = new Date();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month:'long',
        day:'numeric'
    };
    return today.toLocaleString('en-US',options);
};