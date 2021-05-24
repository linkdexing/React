import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { privateApi } from "../../api";
import { orderUrl } from "../../api/endpoints";

const OrderLinks = () => {
  const [links, setLinks] = useState([]);

  const router = useRouter();

  const { orderId } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const { links } = (await privateApi.get(`${orderUrl}/${orderId}`)).data;
      setLinks(links);
    };

    fetchData();
  });

  return (
    <div className='container mt-4'>
      <h3>Links</h3>
      <hr />
      {React.Children.toArray(
        links.map((link) => <div>{link === "" ? "Empty line" : link}</div>)
      )}
    </div>
  );
};

export default OrderLinks;
