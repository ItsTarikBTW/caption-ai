import SignIn from "@/app/components/Forms/SignIn"
import SignUp from "@/app/components/Forms/SignUp"
import Contact from "@/app/components/Forms/Contact"
import DateTime from "@/app/components/Forms/DateTime"
import MultiSelectDropdown from "@/app/components/Forms/MultiSelectDropdown"
import Admin from "../page"

const page = () => {
  return (
    <Admin>
      <main className="p-5 grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <Contact />
          <MultiSelectDropdown />
        </div>
        <div className="flex flex-col gap-9">
          <SignIn />
          <SignUp />
          <DateTime />
        </div>
      </main>
    </Admin>
  )
}

export default page
