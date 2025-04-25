/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

export const useDebounceCallback = (callback: (...args: any[]) => void, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  return (...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};