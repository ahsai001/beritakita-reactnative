import React from 'react'

export default function useFetch(url, opts) {
    const [response, setResponse] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        console.log('fetch start')
        fetch(url, opts)
          .then((response) => response.json())
          .then((json) => setResponse(json.data))
          .catch((e) => setError(e))
          .finally(() => console.log('fetch stop'), setLoading(false));
      }, [url]);
    return [ response, isLoading, error ]
}