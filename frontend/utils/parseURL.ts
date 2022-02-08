export function parseURL(url: string): string {
    let urlSplit = url.split("/");
    return urlSplit.slice(3).join("/");
};
