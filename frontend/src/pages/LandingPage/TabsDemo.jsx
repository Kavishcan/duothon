import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Sample JSON data
const tickets = [
  {
    id: "TICK001",
    from: "Kandy",
    to: "Colombo",
    status: "Paid",
    amount: "$25.00",
  },
  // Add more tickets as needed
]

const invoices = [
  { id: "INV001", from: "Kandy", to: "Colombo", amount: "$25.00" },
  // Add more invoices as needed
]

function TabsDemo() {
  return (
    <div className="">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="get">Get Ticket</TabsTrigger>
          <TabsTrigger value="topup">Top Up</TabsTrigger>
          <TabsTrigger value="view">View Ticket</TabsTrigger>
          <TabsTrigger value="history">Ticket history</TabsTrigger>
        </TabsList>
        <TabsContent value="get">
          From
          <Input />
          To
          <Input />
          <Button className="mt-3"> Get ticket</Button>
        </TabsContent>
        <TabsContent value="topup">
          {" "}
          Ammount
          <Input />
          <Button className="mt-3"> Proceed to pay</Button>
        </TabsContent>
        <TabsContent value="view">
          <Table>
            <TableCaption>Your Current Ticket</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Ticket ID</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.from}</TableCell>
                  <TableCell>{ticket.to}</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                  <TableCell className="text-right">{ticket.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="history">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.from}</TableCell>
                  <TableCell>{invoice.to}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TabsDemo
