import MapView from "./MapView"
import UserPic from "./UserPic"
import UserDetails from "./UserDetails"
import TabsDemo from "./TabsDemo"

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <div className="flex items-center space-x-2">
          <UserPic />
          <UserDetails />
        </div>
        <TabsDemo />
      </div>
    </>
  )
}

export default LandingPage
