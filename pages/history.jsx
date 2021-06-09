import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { privateApi } from "../api";
import { orderUrl } from "../api/endpoints";
import PrivateHOC from "../components/PrivateHOC";
import Sidebar from "../components/Sidebar";

export default function HistoryPage(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { orders } = (await privateApi.get(orderUrl)).data;

      orders.map((order) => {
        order.isProcessed = moment(order.createdAt)
          .add({ days: order.dripfeed })
          .isBefore(Date.now())
          ? true
          : false;

        order.links = order.links.split("\n");

        order.createdAt = moment(order.createdAt).format("DD-MM-yy");

        return order;
      });

      setOrders(orders);
    };

    fetchData();
  }, []);

  return (
    <PrivateHOC user={props.user}>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-7'>
            <h2>Order History</h2>

            <table className='table table-hover table-responsive'>
              <thead>
                <tr>
                  <th scope='col'>Dripfeed</th>
                  <th scope='col'># of links</th>
                  <th scope='col'>Links</th>
                  <th scope='col'>Created at</th>
                  <th scope='col'>Progress</th>
                </tr>
              </thead>
              <tbody style={{ whiteSpace: "pre-wrap" }}>
                {orders.map((order) => (
                  <tr className={order.isProcessed ? "table-success" : null}>
                    <td>{order.dripfeed}</td>
                    <td>{order.links.length}</td>
                    <td>
                      {order.links.length > 0 ? (
                        <Link href={`/order/${order._id}`}>
                          <a target='_blank'>View links</a>
                        </Link>
                      ) : (
                        "None"
                      )}
                    </td>
                    <td>{order.createdAt}</td>
                    <td>{order.isProcessed ? "Done" : "Pending"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Sidebar />
        </div>
      </div>
    </PrivateHOC>
  );
}
