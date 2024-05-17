import { Button } from '@/components/ui/button';

function SystemInformation() {
  return (
    <div className="mx-auto max-w-4xl mb-5 rounded-lg border-2 border-gray-300 p-5 h-44">
       <div className="flex justify-center">
        <Button  className="mx-12" variant="default" >Add User </Button>
        <Button variant="default">Update User</Button>
      </div>
      <div className="flex  flex-row justify-around my-12">
      <div className="flex items-center text-center font-bold text-2xl mt-2">
        Total Users: {/* Insert total number of users here */}
        <h1>12</h1>
      </div>
      <div className="text-center flex items-center  font-bold text-2xl mt-2">
        Total Payments: {/* Insert total payments here */}
        <h1>12</h1>
      </div>
      </div>
    </div>
  )
}

export default SystemInformation
