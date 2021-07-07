import { useEffect, useState } from "react";
import { publicApi } from "../api";
import { advertisementUrl } from "../api/endpoints";

export default function BottomRightAdv() {
  const [bottomRight, setBottomRight] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await publicApi.get(`${advertisementUrl}/bottom-right`);
        setBottomRight(res.data.bottomRightAdv);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      {bottomRight.length > 0 && (
        <a href={bottomRight[0].url}>
          <img
            src={`${process.env.REACT_APP_BASE_URL}${bottomRight[0].imageUrl}`}
            alt="Advertisement"
          />
        </a>
      )}
    </div>
  );
}
