/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsdoc/require-description-complete-sentence */
/* eslint-disable unicorn/filename-case */
/**
 * utility for dealing with recursive json objects when stringifying
 *
 * @returns a new object to replace with the recursive object
 */
export const CircularReplacer = () => {
    const seen = new WeakSet();
    return (__key: any, value: any) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
