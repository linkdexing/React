import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { privateApi } from "../api";
import { orderUrl } from "../api/endpoints";

import Sidebar from "../components/Sidebar";

// Links-Archive
export default function LinksArchivePage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Get Order History for user
      const { orders } = (await privateApi.get(orderUrl)).data;

      orders.map((order) => {
        order.isProcessed = moment(order.createdAt)
          .add({ days: order.dripfeed })
          .isBefore(Date.now())
          ? true
          : false;

        //order.links = order.links.split("\n");
        order.links = order.links.split("\n").filter(link => link.length!==0);
        order.createdAt = moment(order.createdAt).format("DD-MM-yy");

        return order;
      });

      setOrders(orders);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <h2>Links Archive</h2>

          <table className="table table-hover table-responsive">
            <thead>
              <tr className="text-center">
               <th scope="col">S.No</th>
                <th scope="col">Campaign Name</th>
                <th scope="col">Dripfeed</th>
                <th scope="col">Number of links</th>
                <th scope="col">Links</th>
                <th scope="col">Created at</th>
                <th scope="col">Progress</th>
              </tr>
            </thead>
            <tbody style={{ whiteSpace: "pre-wrap" }}>
              {React.Children.toArray(
                orders.map((order, index) => (
                  <tr className={`${order.isProcessed ? "table-success" : null} text-center`}>
                    <td>{index+1}</td>
                    <td>{order.name || "N/A"}</td>
                    <td>{order.dripfeed}</td>
                    <td>{order.links.length}</td>
                    <td>
                      {order.links.length > 0 ? (
                        <Link target="_blank" to={`/order/${order._id}`}>
                          View links
                        </Link>
                      ) : (
                        "None"
                      )}
                    </td>
                    <td>{order.createdAt}</td>
                    <td>{order.isProcessed ? "Done" : "Processing"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
