import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DataTable from "../../../components/AdminPanel/DataTable";
import axios from "axios";
import Swal from "sweetalert2";

function Users() {
  const queryClient = useQueryClient();
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const { data: users } = useQuery({
    queryKey: ["users-table"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/users", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      const data = await res.data;
      return data;
    },
  });

  const { mutate: remove } = useMutation({
    mutationKey: ["remove-user"],
    mutationFn: async (userId) => {
      await axios.delete(`http://localhost:4000/v1/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "حذف با موفقیت انجام شد",
        confirmButtonText: "اوکی",
      });
      queryClient.invalidateQueries({
        queryKey: ["users-table"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function removeUser(userId) {
    console.log(userId);
    Swal.fire({
      title: "ایا برای حذف کاربر مورد نظر مطمین هستید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((resault) => {
      if (resault.isConfirmed) {
        remove(userId);
      } else {
        Swal.fire({
          title: "عملیات حذف با موفقیت لفو شد",
          confirmButtonText: "اوکی",
          icon: "success",
        });
      }
    });
  }

  return (
    <>
      <DataTable title="کاربران">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>

              <th>نام خانوادگی</th>
              <th>شماره</th>
              <th>ایمیل</th>
              <th>رمز عبور</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(
              (user, index) =>
                user.role !== "ADMIN" && (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary edit-btn"
                      >
                        ویرایش
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger delete-btn"
                        onClick={() => {
                          removeUser(user._id);
                        }}
                      >
                        حذف
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger delete-btn"
                      >
                        بن
                      </button>
                    </td>
                  </tr>
                )
            )}
            {/* <tr>
              <td>34223</td>
              <td>علی</td>
              <td>سعیدی</td>
              <td>09123443243</td>
              <td>ali@gmail.com</td>
              <td>ehsan1323</td>
              <td>
                <button type="button" className="btn btn-primary edit-btn">
                  ویرایش
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-danger delete-btn">
                  حذف
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </DataTable>
    </>
  );
}

export default Users;
