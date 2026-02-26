import React, { useCallback, useState } from "react";

export default function useInput(initalValue = "") {
  const [value, setValue] = useState(initalValue);

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [initalValue],
  );

  const reset = useCallback(() => {
    initalValue;
  }, [initalValue]);

  return { value, onChange, reset };
}
