import { Invoice } from "../types/interface";
import { useEffect, useState } from "react";

import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await client.get(`/${endpoint}`);
        setData(res.data);
      } catch (error) {
        if (error instanceof Error) setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => {
      setData([]);
      setIsLoading(true);
      setError(null);
    };
  }, [endpoint]);

  return { data, isLoading, error };
};
