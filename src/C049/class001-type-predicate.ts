// Type Predicate (Predicado de tipos)
export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
    const returned = args.reduce((ac, value) => {
        if (isNumber(ac) && isNumber(value)) {
            return ac + value;
        }
        return ac;
    }, 0);

    return returned;
}

console.log(isNumber('123456'));
console.log(isNumber(123456));

console.log(sum(1,2,3));
console.log(sum('a', 'b', 'c'));
//console.log(sum(...[1, 2, 3, 'a', 'b', 1]));
