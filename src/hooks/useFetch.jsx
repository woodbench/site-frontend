import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url) {
      console.log('No URL provided to useFetch');
      setIsLoading(false);
      return;
    }

    let isMounted = true; // Evitar actualizar estado en un componente desmontado

    const fetchData = async () => {
      console.log('Fetching data from:', url);
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (isMounted) {
          console.log('Data fetched successfully:', result);
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching data:', err.message);
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data, error, isLoading };
};
