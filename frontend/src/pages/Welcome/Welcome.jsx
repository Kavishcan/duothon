import { Button } from "@/components/ui/button";

function Welcome() {
  return (
    <div>
      <main className="flex items-center justify-center h-[80vh]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Neotropolis!
          </h1>
          <p className="text-xl text-gray-700">
            We provide the best service for you.
          </p>
          <Button variant="default" className="mt-2">
            {" "}
            Get Started
          </Button>
        </div>
      </main>

      <footer className="p-6 bg-white shadow">
        <div className="text-center text-gray-500">
          © 2022 netropolis. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Welcome;
