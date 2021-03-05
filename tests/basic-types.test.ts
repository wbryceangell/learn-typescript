/** @link https://www.typescriptlang.org/docs/handbook/basic-types.html */

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean */
    let bool: boolean;
    expect(typeof bool).toBe('boolean');
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#number */
    let num: number;
    expect(typeof num).toBe('number');
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#string */
    let str: string;
    expect(typeof str).toBe('string');
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#array */
    let arr: number[];
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).not.toBe(0);
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#array */
    let arr: Array<string>;
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).not.toBe(0);
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple */
    let tuple: [number, string];
    expect(Array.isArray(tuple)).toBe(true);
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#enum */
    enum Genre {
        Rock,
        HipHop,
        Rap
    }

    let genre: Genre;
    expect(typeof genre).toBe('number');
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown */
    let something: unknown;
    expect(typeof something).toBe('boolean');

    expect(typeof something).toBe('string');

    expect(Array.isArray(something)).toBe(true);
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#any */
    let anything: any;
    expect(typeof anything).toBe('boolean');

    expect(typeof anything).toBe('string');
    expect(anything.length).not.toBe(0);

    expect(Array.isArray(anything)).toBe(true);
    expect(anything.length).not.toBe(0);
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#void */
    /** Fix the typescript error on this one */
    let nothing: void = true;
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined */
    let bool: boolean;
    expect(typeof bool).toBe('boolean');

    expect(bool).toBe(null);

    expect(bool).not.toBeDefined();
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#never */
    /** Just read up on this one. It will be covered later with functions */
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#object */
    let obj: object;
    expect(typeof obj).toBe('object');
}

{
    /** @link https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions */
    /** Fix the typescript error on this one */
    let str: unknown = 'This is a string, but we need to assert that...';
    expect(str.length).not.toBe(0);
}