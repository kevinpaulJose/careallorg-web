import emailjs from "@emailjs/browser";
export const sendEmail = async ({
  order_id,
  product,
  to_email,
  type,
  to_name,
  payment_link,
}) => {
  let templateParam = {
    service_id: "service_qbi142f",
    template_id: type === "customer" ? "customer_copy" : "store_copy",
    user_id: "iZcygOg4x3dlhq1Up",
    order_id: order_id,
    to_email: to_email,
    product: product,
    to_name: to_name,
    payment_link: payment_link,
    accessToken: "YdZzj8Fhxmb_bl2KizF8n",
  };
  return await emailjs.send(
    "service_qbi142f",
    type === "customer" ? "customer_copy" : "store_copy",
    templateParam,
    "iZcygOg4x3dlhq1Up"
  );
};
