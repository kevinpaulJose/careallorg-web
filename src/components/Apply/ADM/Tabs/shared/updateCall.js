import { baseURL } from "../../../../../api/baseURL";
import { postData } from "../../../../../api/calls";

export const updateData = async (dataArr, item, status) => {
  //   for (let v in dataArr) {
  //     postData(
  //       { item: item, order_id: v.order_id, status: status },
  //       `${baseURL}/update/status`
  //     );
  //   }
  dataArr.forEach(async (v) => {
    await postData(
      { item: item, order_id: v.order_id, status: status },
      `${baseURL}/update/status`
    );
  });
};
