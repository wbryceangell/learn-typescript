/**
 * The goal is to fix any typescript errors as well as make the tests pass.
 * Please take a look at the links provided. 
 * @see https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
 * @see https://www.typescriptlang.org/docs/handbook/variable-declarations.html#const-declarations
 * @see https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-vs-const
 * @see https://www.typescriptlang.org/docs/handbook/basic-types.html 
 */

{
    const bool: boolean;
}

{
    let bool: boolean = 0;
}

{
    expect(typeof bool).toBe('boolean');
}

{
    const num: number;
    expect(typeof num).toBe('number');
}

{
    const str: string;
    expect(typeof str).toBe('string');
}

{
    const arr: number[];
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).not.toBe(0);
}

{
    const arr: Array<string>;
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).not.toBe(0);
}

{
    const tuple: [number, string];
    expect(Array.isArray(tuple)).toBe(true);
}

{
    enum Genre {
        Rock,
        HipHop,
        Rap
    }

    const genre: Genre;
    expect(typeof genre).toBe('number');
}

{
    let something: unknown;
    expect(typeof something).toBe('boolean');

    expect(typeof something).toBe('string');

    expect(Array.isArray(something)).toBe(true);
}

{
    let anything: any;
    expect(typeof anything).toBe('boolean');

    expect(typeof anything).toBe('string');
    expect(anything.length).not.toBe(0);

    expect(Array.isArray(anything)).toBe(true);
    expect(anything.length).not.toBe(0);
}

{
    const nothing: void = true;
}

{
    let bool: boolean;
    expect(typeof bool).toBe('boolean');

    expect(bool).toBe(null);

    expect(bool).not.toBeDefined();
}

{
    let obj: object;
    expect(typeof obj).toBe('object');
}

{
    let str: unknown = 'This is a string, but we need to assert that...';
    expect(str.length).not.toBe(0);
}