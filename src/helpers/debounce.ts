const _ = require("lodash");


const debounce =(time:number,callback:Function)=> _.debounce(() => {
    callback()
  }, time);


  export default debounce;