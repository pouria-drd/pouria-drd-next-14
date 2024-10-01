import moment from "jalali-moment";

/**
 * Options for formatting a date.
 */
interface FormatDateOptions {
    isPersian?: boolean;
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit";
    day?: "numeric" | "2-digit";
    hour?: "numeric" | "2-digit";
    minute?: "numeric" | "2-digit";
    hour12?: boolean;
}

/**
 * Formats a date according to the specified options.
 *
 * @param date - The date to format. Can be a Date object or a string representing a date.
 * @param options - Formatting options to customize the output.
 * @param options.isPersian - If true, formats the date as a Persian (Jalali) date. Defaults to false.
 * @param options.year - Specifies the year formatting: "numeric" for full year or "2-digit" for two-digit year.
 * @param options.month - Specifies the month formatting: "numeric" for month number or "2-digit" for zero-padded month.
 * @param options.day - Specifies the day formatting: "numeric" for day number or "2-digit" for zero-padded day.
 * @param options.hour - Specifies the hour formatting: "numeric" for hour number or "2-digit" for zero-padded hour.
 * @param options.minute - Specifies the minute formatting: "numeric" for minute number or "2-digit" for zero-padded minute.
 * @param options.hour12 - If true, uses 12-hour time format with AM/PM. If false or not provided, uses 24-hour time format.
 * @returns The formatted date string.
 * @example
 * // Format a date as a Persian (Jalali) date
 * formatDate("20204-09-17", {isPersian: true});
 * // Output: "1403/06/27 00:00"
 *
 * // Format a date as a 24-hour time with AM/PM
 * formatDate("2023-01-01", {hour12: true});
 * // Output: "01/01/2023 00:00 AM"
 *
 * @throws {Error} Throws an error if the input date is invalid.
 */
function formatDate(
    date: Date | string,
    options: FormatDateOptions = {}
): string {
    // Handle invalid date input
    const result = new Date(date);
    if (isNaN(result.getTime())) {
        throw new Error("Invalid date provided.");
    }

    // Convert to Persian date format if specified
    if (options.isPersian) {
        return moment(result).locale("fa").format("YYYY/MM/DD HH:mm");
    }

    // Default date formatting options
    const defaultOptions: Intl.DateTimeFormatOptions = {
        year: options.year || "numeric",
        month: options.month || "2-digit",
        day: options.day || "2-digit",
        hour: options.hour || "2-digit",
        minute: options.minute || "2-digit",
        hour12: options.hour12 ?? false, // Use 24-hour format by default unless specified
    };

    // Format date based on default or customized options
    return result.toLocaleString(undefined, defaultOptions);
}

export default formatDate;
