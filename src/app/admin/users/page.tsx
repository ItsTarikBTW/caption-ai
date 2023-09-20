import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { userSchema } from "./data/schema"
import Admin from "../page"

export const metadata: Metadata = {
  title: "Users",
  description: "A user and issue tracker build using Tanstack Table.",
}

// Simulate a database read for users.
async function getUsers() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/admin/users/data/users.json")
  )

  const users = JSON.parse(data.toString())

  return z.array(userSchema).parse(users)
}

export default async function UserPage() {
  const users = await getUsers()

  return (
    <Admin>
      <div className="md:hidden">
        screen to small 😒🤏
      </div>
      <div className="hidden flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your users for this month!
            </p>
          </div>
        </div>
        <DataTable data={users} columns={columns} />
      </div>
    </Admin>
  )
}
