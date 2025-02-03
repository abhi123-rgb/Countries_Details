import { useEffect, useState } from "react";

export default function useDebounce(search, delay = 700) {
  const [debouncedValue, setDebouncedValue] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(search);
    }, delay);

    return () => clearTimeout(timeout);
  }, [search, delay]);

  return debouncedValue;
}
