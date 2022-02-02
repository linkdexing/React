import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { privateApi } from "../api";
import { orderUrl } from "../api/endpoints";

const OrderLinks = () => {
  const match = useRouteMatch();

  const [links, setLinks] = useState([]);

  const { id: orderId } = match.params;

  useEffect(() => {
    const fetchData = async () => {
      let { links } = (await privateApi.get(`${orderUrl}/${orderId}`)).data;
      
      console.log(links);
      // removing empty lines
      links = links.filter(link => link.length!==0);
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
