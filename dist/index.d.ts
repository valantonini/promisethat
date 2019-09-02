declare function resolvesWith<T>(data: T): Promise<T>;
declare function rejectsWith<T>(data: T): Promise<T>;
declare const promiseThat: {
    rejectsWith: typeof rejectsWith;
    resolvesWith: typeof resolvesWith;
};
export default promiseThat;
export { resolvesWith as promiseThatResolvesWith };
export { rejectsWith as promiseThatRejectsWith };
