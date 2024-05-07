import { useClickOutsideProps } from "../types/interface";
import { useEffect, useCallback } from "react";

export const useClickOutside = ({ callback, ref }: useClickOutsideProps) => {
  const clickOutside = useCallback(
    (e: MouseEvent) => {
      if (callback && ref.current && !ref.current.contains(e.target as Node)) {
        callback(false);
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => clickOutside(e);

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickOutside]);
};
