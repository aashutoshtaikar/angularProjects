import { ErrorHandler } from '@angular/core';

/**
 * for handling all unexpected errors
 */
export class AppErrorHandler implements ErrorHandler{
    
    handleError(error: any): void {
        alert('An unexpected error occured');
        console.log(error);
    }

}