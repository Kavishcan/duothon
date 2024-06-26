// Dashboard.jsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
const users = [
  {
    dtpCode: "DTP001",
    userName: "User1",
    firstName: "John",
    lastName: "Doe",
    mobile: "1234567890",
    email: "john.doe@example.com",
    status: "Active",
  },
];

function UserInformation() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user", {
          method: "GET",
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col mx-auto max-w-4xl mb-5">
      <h1 className="text-blue-500 font-bold text-left">User Information</h1>
      <div className="flex justify-center">
        <Table className="mt-6">
          <TableCaption>A list of your users.</TableCaption>
          <TableHeader>
            <TableRow className="bg-slate-300">
              <TableHead className="w-[100px]">DTP Code</TableHead>
              <TableHead>User Name</TableHead>
              {/* <TableHead>First Name</TableHead> */}
              {/* <TableHead>Last Name</TableHead> */}
              {/* <TableHead>Mobile</TableHead> */}
              <TableHead>Email</TableHead>
              {/* <TableHead>Status</TableHead> */}
              {/* <TableHead className="text-right">Action</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.dtpCode}>
                <TableCell className="font-medium">{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                {/* <TableCell>{user.firstName}</TableCell> */}
                {/* <TableCell>{user.lastName}</TableCell> */}
                {/* <TableCell>{user.mobile}</TableCell> */}
                <TableCell>{user.email}</TableCell>
                {/* <TableCell>{user.status}</TableCell> */}
                {/* <TableCell className="text-right">
                  Add action buttons here
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default UserInformation;
