import IHttpError from "../interfaces/httpError";

class HttpError extends Error implements IHttpError {		
    constructor(public status: number, message: string) {
			super(message);
			this.status = status;
    }
}

export default HttpError;