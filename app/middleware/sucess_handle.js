module.exports = () => {
    return function* (next) {

            yield next;
        if(this.response.status == 200)
        {
            
        }
    };
};