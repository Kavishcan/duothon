// Dashboard.jsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const paymentInfo = [
  {
    dtpCode: "DTP001",
    userName: "User1",
    paymentValue: "$100",
    paymentType: "Credit Card",
  },
  // Add more payment info as needed...
]

function PaymentInformation() {
  return (
    <div className="flex flex-col mx-auto max-w-4xl mb-5">
      <h1 className="text-blue-500 font-bold text-left">Payment Information</h1>
      <div className="flex justify-center">
        <Table className="mt-6">
          <TableCaption>A list of your payment information.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">DTP Code</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>Payment Value</TableHead>
              <TableHead>Payment Type</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentInfo.map((info) => (
              <TableRow key={info.dtpCode}>
                <TableCell className="font-medium">{info.dtpCode}</TableCell>
                <TableCell>{info.userName}</TableCell>
                <TableCell>{info.paymentValue}</TableCell>
                <TableCell>{info.paymentType}</TableCell>
                <TableCell className="text-right">
                  {/* Add action buttons here */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PaymentInformation