import { useQuery } from "@tanstack/react-query";
import "./Index.css";
import axios from "axios";
import DataTable from "../../../components/AdminPanel/DataTable";
import PAdminItem from "../../../components/AdminPanel/PAadminItem/PAdminItem";

function Index() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const { data: AdminPanelAllInfos } = useQuery({
    queryKey: ["infos-data-apanel"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/infos/p-admin", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      const data = await res.data;
      return data;
    },
  });

  console.log(AdminPanelAllInfos);
  return (
    <>
      <div className="container-fluid" id="home-content">
        <div className="container">
          <div className="home-content-title">
            <span className="welcome">
              خوش آمدید,
              <span className="name">{AdminPanelAllInfos?.adminName}</span>
            </span>
          </div>
          <div className="home-content-boxes">
            <div className="row">
              {AdminPanelAllInfos?.infos.map((item, index) => (
                <PAdminItem key={index + 1} {...item} />
              ))}
            </div>
          </div>

          <div className="home-content-latset-users">
            <DataTable title="افراد اخیرا ثبت نام شده">
              <table className="table">
                <thead>
                  <tr>
                    <th>شناسه</th>
                    <th>نام و نام خانوادگی</th>
                    <th>ایمیل</th>
                  </tr>
                </thead>
                <tbody>
                  {AdminPanelAllInfos?.lastUsers.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      {/* <td>09123443243</td> */}
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
