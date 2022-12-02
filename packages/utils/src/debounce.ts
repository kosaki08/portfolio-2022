/**
 * 過度な呼び出しを避けるために、指定した timeout ごとに関数を実行します
 * @param func timeout 時に実行されるコールバック関数
 * @param timeout timeout 時間(ms)
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(func: T, timeout = 20) {
  let timer: NodeJS.Timeout;

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };

  return debounced;
}
