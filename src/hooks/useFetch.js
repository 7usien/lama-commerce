import { useState, useEffect } from 'react';
import { makeRequest } from './../makeRequest';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchedData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
