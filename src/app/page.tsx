'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
        try {
            const res = await fetch('/api/testAPI');
            const data = await res.json();
            setFetchedData(data);
        } catch (error) {
            console.error("Error fetching testAPI data:", error);
        }
    };

  console.log(fetchedData);

  return (
    <main>
      <p>Hello World!</p>
    </main>
  );
}
