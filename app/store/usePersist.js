import { useState, useEffect } from "react";

const usePersist = (store, callback) => {
  const result = store(callback);
  const [data, setData] = useState([{test: 32}, {test: 443}]);

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default usePersist;