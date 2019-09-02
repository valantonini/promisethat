declare function resolvesWith<T>(data: T): Promise<T>;
declare function rejectsWith<T>(data: T): Promise<T>;
declare const promisethat: {
    rejectsWith: typeof rejectsWith;
    resolvesWith: typeof resolvesWith;
};
export default promisethat;
