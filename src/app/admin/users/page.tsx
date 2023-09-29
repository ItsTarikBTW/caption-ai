"use client"
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { userSchema } from "./data/schema";
import Admin from "../page";
import { trpc } from "@/app/_trpc/client";

function getUsers() {
  const users = trpc.getUsers.useQuery().data;
  
  if (!users) {
    return [];
  }
  return z.array(userSchema).parse(users);
}

//const user = trpc.getUserById.useQuery({ id: 1 }).data; 

export default function UserPage() {
  const users = getUsers();
  const res=trpc.createUser.useMutation();
  console.log(res);
  return (
    <Admin>
      <div className="px-6 pt-1">
        <DataTable data={users} columns={columns} />
      </div>
    </Admin>
  );
}

