// tslint:disable-next-line:no-namespace
namespace StringUtils {

  export const FORMAT_HHMMSS: string = "hh:mm:ss";
  export const FORMAT_MMSS: string = "mm:ss";

  /**
   * Formats a number of seconds into a time string with the pattern hh:mm:ss.
   *
   * @param totalSeconds the total number of seconds to format to string
   * @param format the time format to output (default: hh:mm:ss)
   * @returns {string} the formatted time string
   */
  export function secondsToTime(totalSeconds: number, format: string = FORMAT_HHMMSS): string {
    return "hello";
  }
}

console.log(StringUtils.secondsToTime(1));
console.log("something".includes("a"));
