function AdminBox() {
  return (
    <div className="flex  flex-row justify-around mx-auto max-w-4xl mb-5 rounded-lg border-2 border-gray-300 p-5 h-32">
      <div className="flex items-center text-center font-bold text-2xl mt-2">
        Total Users: {/* Insert total number of users here */}
      </div>
      <div className="text-center flex items-center  font-bold text-2xl mt-2">
        Total Payments: {/* Insert total payments here */}
      </div>
    </div>
  );
}

export default AdminBox;
