import { useQuery } from "@tanstack/react-query";
import "./Orders.css";
import axios from "axios";
function Orders() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const { data: orders } = useQuery({
    queryKey: ["orders-user"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/orders", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      const data = await res.data;
      return data;
    },
  });
  return (
    <>
      <div className="col-9">
        <div className="order">
          <table className="order__table">
            <thead className="order__table-header">
              <tr className="order__table-header-list">
                <th className="order__table-header-item">شناسه</th>
                <th className="order__table-header-item">تاریخ</th>
                <th className="order__table-header-item">وضعیت</th>
                <th className="order__table-header-item">دوره</th>
                <th className="order__table-header-item">مبلغ</th>
                <th className="order__table-header-item">عملیات ها</th>
              </tr>
            </thead>
            <tbody className="order__table-body">
              {orders?.map((order, index) => (
                <tr key={order._id} className="order__table-body-list">
                  <td className="order__table-body-item">
                    <a href="#" className="order__table-body-link">
                      {index + 1}
                    </a>
                  </td>
                  <td className="order__table-body-item">
                    {order.createdAt.slice(0, 10)}
                  </td>
                  <td className="order__table-body-item">تکمیل شده</td>
                  <td className="order__table-body-item">
                    {order.course?.name}
                  </td>
                  <td className="order__table-body-item">{order.price}</td>
                  <td className="order__table-body-item">
                    <a className="order__table-body-btn" href="#">
                      نمایش
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Orders;
