import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../api/baseURL";
import { postData } from "../../api/calls";
import { getApp } from "../Shared/shardVars";
import Loading from "./Loading";
import PassOrder from "./PassOrder";
import RetryOrder from "./RetryOrder";

export default function Orders() {
  const params = useParams();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderFail, setOrderFail] = useState(false);
  const [paymentLink, setPaymentLink] = useState("");
  const [loading, setLoading] = useState(false);
  const order_id = params.orderid;

  useEffect(() => {
    setLoading(true);
    postData({ order_id: order_id }, `${baseURL}/orders/status`)
      .then((response) => {
        console.log(response.data);

        if (response.data.order_status === "PAID") {
          postData(
            {
              paid: response.data.order_amount,
              order_id: order_id,
              item: getApp(order_id),
            },
            `${baseURL}/update/paid`
          )
            .then((response) => {
              postData(
                {
                  item: getApp(order_id),
                  status: "Order Placed",
                  order_id: order_id,
                },
                `${baseURL}/update/status`
              )
                .then((response) => {
                  setLoading(false);
                  setOrderSuccess(true);
                })
                .catch((err) => alert("Request Failed"));
            })
            .catch((err) => alert("Request Failed"));
        }
        if (response.data.order_status === "ACTIVE") {
          setOrderFail(true);
          setLoading(false);
          setPaymentLink(response.data.payment_link);
          console.log(response.data.payment_link);
        }
      })
      .catch((err) => alert("Error occured"));
  }, [order_id]);
  return (
    <>
      {loading && <Loading />}
      {orderSuccess && <PassOrder />}
      {orderFail && <RetryOrder link={paymentLink} />}
    </>
  );
}
