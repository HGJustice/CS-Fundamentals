function isArray(obj){
   return obj instanceof Array
}

function isBoolean(obj){
    return typeof obj === "boolean"
}

function isDate(obj){
    return obj instanceof Date
}

function isNumber(obj){
    return typeof obj === "number"
}

function isString(obj){
    return typeof obj === "string"
}

function isFunction(obj){
    return obj instanceof Function
}

function isUndefined(obj){
    return typeof obj === "undefined"
}

function isNull(obj){
    return obj === null
}

function first(arr){
    return arr[0]
}

function last(arr){
    return arr.at(-1)
}

function skip(arr, numAmountToSkip){
    for(let i = numAmountToSkip; i <= arr.length-1; i++){
       console.log(arr[i])
    }
}

function take(arr, numAmountToTake){
   return arr.slice(0, numAmountToTake)
}

function asChain(arr) {
    let chain = {
        array: arr,

        skip: function(numAmountToSkip) {
            let newArray = [];
            for(let i = numAmountToSkip; i < this.array.length; i++){
                newArray.push(this.array[i]);
            }
            this.array = newArray; 
            return this; 
        },

        take: function(numAmountToTake) {
            this.array = this.array.slice(0, numAmountToTake);
            return this; 
        },

        value: function() {
            return this.array;
        }
    };

    return chain;
}
