import { Button } from '@/components/ui/button';

function UserDetailsCard() {
  return (
    <div className=" justify-around mx-auto max-w-4xl mb-8 rounded-lg border-2 border-gray-700 p-8 shadow-lg transform transition duration-500 hover:scale-105">
     
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Get Ticket</h1>
        <hr className="border-t-2 border-gray-600" />
      </div>
      <div className="flex space-x-6">
        <div className="text-lg italic">Ticket/image</div>
        <div className="flex flex-col space-y-6">
          <Button className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-700 text-white" variant="default">
            Top Up
          </Button>
          <Button className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-700 text-white" variant="default">
            View Ticket
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsCard;
