import axios from "axios";
import { cashFreeURL, webURL } from "./baseURL";

export const postData = async (data, url) => {
  return await axios.post(url, data);
};

export const createOrder = async (order_id, amount, customer) => {
  const options = {
    method: "POST",
    url: `${cashFreeURL}/orders`,
    headers: {
      accept: "application/json",
      "x-client-id": "1550489955ab3658f9dd8a4a0c840551",
      "x-client-secret": "1a09c1121b442ce47a4e4640d5a8ed6638b1bfd3",
      "x-api-version": "2022-01-01",
      "content-type": "application/json",
    },
    data: {
      customer_details: {
        customer_id: order_id,
        customer_email: customer.email,
        customer_phone: customer.phone,
      },
      order_meta: {
        return_url: `${webURL}/{order_id}/{order_token}`,
      },
      order_id: order_id,
      order_amount: amount,
      order_currency: "INR",
    },
  };
  axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      alert("Payment Initialization failed");
      console.log(err);
    });
};
