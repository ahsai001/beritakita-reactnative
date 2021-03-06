import React from 'react';

export default function useFetch(url, opts, callback) {
  const [output, setOutput] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    //side effect logic
    setLoading(true);
    console.log('fetch start');
    fetch(url, opts)
      .then(response => response.json())
      .then(json => {
        setOutput(json.data);
        callback(json.data);
      })
      .catch(e => setError(e))
      .finally(() => console.log('fetch stop'), setLoading(false));

    return () => {}; //clean up logic
  }, [url]);
  return [output, isLoading, error];
}
