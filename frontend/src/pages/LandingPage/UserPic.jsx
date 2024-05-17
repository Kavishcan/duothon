import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function UserPic() {
  return (
    <div>
      <div className=" w-72 h-56 flex items-center justify-center text-white rounded">
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default UserPic
