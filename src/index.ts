function resolvesWith<T>(data: T): Promise<T> {
    return new Promise<T>( (resolve: (value?: T | PromiseLike<T> | undefined) => void) => {
        resolve(data);
    });
}

function rejectsWith<T>(data: T): Promise<T> {
    return new Promise<T>( (resolve: (value?: T | PromiseLike<T> | undefined) => void,
                            reject: (reason?: any) => void) => {
        reject(data);
    });
}

const promisethat = {
    rejectsWith,
    resolvesWith,
};

export default promisethat;
