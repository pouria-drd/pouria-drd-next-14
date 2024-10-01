/**
 * This function converts a file to a base64 string.
 * @param file - The file to be converted.
 * @returns A promise that resolves to the base64 string.
 */
function convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        // Handle the onloadend event
        reader.onloadend = () => {
            if (reader.result) {
                resolve(reader.result as string);
            } else {
                reject(new Error("Failed to read file"));
            }
        };

        reader.onerror = () => {
            reject(new Error("Failed to read file"));
        };

        reader.readAsDataURL(file);
    });
}

export default convertToBase64;
