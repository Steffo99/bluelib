// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
class RoyalnetApiError extends Error {
    constructor(errorCode, errorType, errorArgs, ...params) {
        // noinspection JSCheckFunctionSignatures
        super(...params);
        if(Error.captureStackTrace) Error.captureStackTrace(this, RoyalnetApiError);

        this.name = "RoyalnetApiError";
        this.errorCode = errorCode;
        this.errorType = errorType;
        this.errorArgs = errorArgs;
        this.message = `${errorCode} | ${errorType} | ${errorArgs.join("|")}`;
    }
}


async function royalnetApiRequest(baseUrl, method, path, args, abortSignal) {
    if(args === undefined || args === null) {
        args = {};
    }

    let body;
    let url;
    if(method === "GET") {
        body = undefined;
        //Create a query string
        let params = new URLSearchParams();
        //Use the items in the args object as key-value pairs for the query string
        Object.keys(args).forEach(key => {
            let arg = args[key];
            params.append(key, arg);
        });
        url = `${baseUrl}${path}?${params.toString()}`;
    }
    else {
        body = JSON.stringify(args);
        url = `${baseUrl}${path}`;
    }

    //Make the request
    let response = await fetch(url, {
        method: method,
        body: body,
        signal: abortSignal,
    });
    //Parse the response as JSON
    let json = await response.json();
    //Check if the request was a success
    if(json["success"] === false) {
        throw new RoyalnetApiError(json["error_code"], json["error_type"], json["error_args"])
    }
    return json["data"]
}

export {royalnetApiRequest, RoyalnetApiError};
