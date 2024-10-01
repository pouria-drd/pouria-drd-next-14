/**
 * This function returns the base URL for the API based on the version.
 * It throws an error if the base URL is not set in the environment variables.
 * @param version - The version of the API to use (default is "v1")
 * @example
 * ```typescript
 * getBaseUrl(); // Returns "https://example.com/vand-api/v1/"
 * getBaseUrl("v2"); // Returns "https://example.com/vand-api/v2/"
 * ```
 * @returns The base URL for the API
 */
function getBaseUrl(version: string = "v1") {
    const baseUrl = process.env.BASE_API;
    if (!baseUrl) {
        throw new Error(
            "API base URL is not set in the environment variables."
        );
    }
    return baseUrl + version + "/";
}

export default getBaseUrl;
