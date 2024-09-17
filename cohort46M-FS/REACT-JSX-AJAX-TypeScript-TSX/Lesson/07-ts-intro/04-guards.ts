function pretty(arg: string | number): string | number {
    return typeof arg === 'string' ? arg.trim() : arg.toFixed(2)
}

console.log(pretty('     Hello     '));
console.log(pretty(3.1415926));

class SuccessResponce {
    headers: string[];
    body: string;
    constructor(headers: string[], body: string) {
        this.headers = headers;
        this.body = body;
    }
}

class ErrorResponce {
    headers: string[];
    code: number;
    constructor(headers: string[], code: number) {
        this.headers = headers;
        this.code = code;
    }
}

function responseHandler(response: SuccessResponce | ErrorResponce): { message: number | string } {
    if (response instanceof SuccessResponce) {
        return { message: response.body }
    } else {
        return { message: response.code }
    }
}

const success: SuccessResponce = new SuccessResponce(['api_key'], '{name: Peter}');
const error: ErrorResponce = new ErrorResponce([], 401);

console.log(responseHandler(success));
console.log(responseHandler(error));
