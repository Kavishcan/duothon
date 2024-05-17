import PaymentInformation from "./PaymentInformation"
import UserInformation from "./UserInformation"
import SystemInformation from "./SystemInformation"
import AdminInformation from "./AdminInformation"
import AdminBox from "./AdminBox"

function Dashboard() {
  return (
    <div>
      <SystemInformation />
      <UserInformation />
      <PaymentInformation />
      <AdminBox />
      <AdminInformation />
    </div>
  )
}

export default Dashboard
