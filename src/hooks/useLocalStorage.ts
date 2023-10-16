import React, { useEffect, useState } from "react";

function useLocalStorage(
  key: string,
  initialValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState<string>(initialValue);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue) {
      setState(JSON.parse(savedValue));
    } else {
      setState(initialValue);
    }
  }, [key, initialValue, setState]);

  useEffect(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue && initial) {
      setInitial(false);
      return;
    }

    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state, initial]);

  return [state, setState];
}

export default useLocalStorage;
