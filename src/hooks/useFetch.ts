import { Invoice } from "../types/interface";
import { useEffect, useState } from "react";

import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState<Invoice[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await client.get(`/${endpoint}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [endpoint]);

  return data;
};
