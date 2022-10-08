import axios from "axios";
import { baseURL } from "./baseURL";

export const postData = async (data, url) => {
  return await axios.post(url, data);
};

export const getData = async (url) => {
  return await axios.get(url);
};

export const createOrder = async (order_id, amount, customer) => {
  console.log({
    order_id: order_id,
    amount: amount,
    email: customer.email,
    phone: customer.phone,
  });
  return axios.post(`${baseURL}/orders`, {
    order_id: order_id,
    amount: amount,
    email: customer.email,
    phone: customer.phone,
  });
  // .then((response) => {
  //   console.log(response.data);
  //   // alert("Please complete the payment to complete the order");
  //   // window.location.href = response.data.payment_link;
  //   return response.status;
  // })
  // .catch((err) => {
  //   alert("Payment Initialization failed");
  //   console.log(err);
  //   return 400;
  // });
};
