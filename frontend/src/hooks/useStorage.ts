import React from "react";

export const useStorage = <T,>(key: string, initialValue: T) => {
  const [value, setValue] = React.useState<T>(() => {
    return JSON.parse(localStorage.getItem(key) || "{}") || initialValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
};
