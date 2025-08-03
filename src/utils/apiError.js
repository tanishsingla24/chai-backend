class ApiError extends Error {
    constructor(message= "Something went wrong", stuatusCode, error = [], statck = "") {
        supper(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.error = error;

        if(statck) {
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError};