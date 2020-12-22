export function isConstantString(input: string | Record<string, any>): input is string {
    return typeof input === 'string';
}
