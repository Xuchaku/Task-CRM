import { api } from "../api/Api";
import { useState } from "react";
import Place from "../types/Place/Place";
const useFetching = (url: string, query: string) => {
  const [results, setResults] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function fetchData() {
    try {
      setLoading(true);
      const data = await api.getAddress(url, query);
      if (data instanceof Error) {
        setResults([]);
        throw new Error(data.message);
      } else {
        setResults(data);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, results, fetchData };
};
export default useFetching;
