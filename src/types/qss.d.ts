declare module "qss" {
    export function encode(obj: Record<string, unknown>, prefix?: string): string;
    export function decode(str: string, prefix?: string): Record<string, unknown>;
}
