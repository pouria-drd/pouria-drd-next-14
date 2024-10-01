/**
 * Handles error responses based on the status code.
 * @param response - The HTTP response object.
 * @param result - The parsed response JSON.
 * @returns The error message for the given status code, or null if no error message is found.
 */
async function APIErrors(
    response: Response,
    result: any
): Promise<string | null> {
    const errorMessages: Record<number, string> = {
        404: "آدرس یافت نشد!",
        401: "دسترسی غیر مجاز است!",
        403: "شما دسترسی لازم را ندارید!",
        500: "خطای سرور! لطفاً بعداً دوباره امتحان کنید.",
        429: "تعداد درخواست ها بیش از حد مجاز شده است. لطفاً بعداً دوباره امتحان کنید.",
    };

    const msg = errorMessages[response.status] || null;

    if (msg) return msg;

    if (response.status === 400 && result.detail) return result.detail;

    return null;
}

export default APIErrors;
