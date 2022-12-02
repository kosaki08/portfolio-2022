/**
 * 対象の文字列の最初の文字を大文字に変換します
 * @param str 対象の文字列
 * @returns 変換後の文字列
 */
export const toUpperCaseFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
