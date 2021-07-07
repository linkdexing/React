import { useEffect, useState } from "react";
import { publicApi } from "../api";
import { advertisementUrl } from "../api/endpoints";

export default function TopLeftAdv() {
  const [topLeft, setTopLeft] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicApi.get(`${advertisementUrl}/top-left`);
        setTopLeft(res.data.topLeftAdv);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div className="mt-2">
      {topLeft.length > 0 && (
        <a href={topLeft[0].url}>
          <img
            width="100%"
            src={`${process.env.REACT_APP_BASE_URL}${topLeft[0].imageUrl}`}
            alt="Advertisement"
          />
        </a>
      )}
    </div>
  );
}
