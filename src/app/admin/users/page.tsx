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

async function getUsers() {
  const response = await fetch(`http://localhost:3000/api/users?cache=${Date.now()}`);
  const users = await response.json();
  
  return z.array(userSchema).parse(users)
}

export default async function UserPage() {
  const users = await getUsers()

  return (
    <Admin>
      <div className="px-6 pt-1">
        <DataTable data={users} columns={columns} />
      </div>
    </Admin>
  )
}
