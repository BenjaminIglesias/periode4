
/*
  See this article for details about custom errors:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
*/

// ADD THIS FILE TO A FOLDER errors 

class ApiError extends Error {
    constructor(msg:string,public errorCode ?:number) {
      super(msg)
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ApiError)
      }
  
      this.name = 'ApiError'
      this.errorCode = errorCode || 500;
      
    }
}

export default ApiError