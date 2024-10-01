/**
 * This function converts a string to a slug.
 * @param text - The string to be converted.
 * @example
 * slugify("Hello World!"); // Output: "hello-world"
 * @returns The slugified string.
 */
function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\u0600-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
}

export default slugify;
