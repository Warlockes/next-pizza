import React from "react";

export const useOutsideClicker = (
  ref: React.MutableRefObject<HTMLDivElement>,
  callback: () => void
) => {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current?.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};
