import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        // console.log(res);
        if (!res.ok) {
          setError("Failed to fetch ");
        }
        const result = await res.json();
        setData(result.data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
    error,
    loading,
  };
};

export default useFetch;

// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!url) return;

//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result = await res.json();
//         setData(result.data);
//       } catch (e) {
//         setError(e.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, error, loading };
// };

// export default useFetch;

