import { Separator } from "@/components/ui/separator"

function userDetails() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
  }
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">John Doe</h4>
        <p className="text-sm text-muted-foreground">johndoe@gmail.com</p>
      </div>
      <Separator className="my-4" />
    </div>
  )
}

export default userDetails
