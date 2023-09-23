"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { User, userSchema } from "../data/schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import EditForm from "./edit-form";
import { useState } from "react";
import axios from "axios";
import { toast, useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const user = userSchema.parse(row.original);
  const [updatedUser, setUpdatedUser] = useState<User>(user);
  const handleSave = async (updatedUserData: User) => {
    setUpdatedUser(updatedUserData);
    console.log("save d-t", updatedUserData);
    const res = await fetch(`http://localhost:3000/api/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUserData),
    });
    console.log("res a-t", res);
    if (res.status === 200) {
      console.log("saved 200");
      //toast
    }
  };
  
  const handleDelete = async () => {
    console.log("delete ", user.id);
    const res = await fetch(`http://localhost:3000/api/users/${user.id}` ,{
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user.id),
    });
    if (res.status === 200) {
      console.log("deleted 200");
      //toast
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <Dialog>
        <AlertDialog>
        <EditForm user={updatedUser} onSave={handleSave} />
          <DropdownMenuContent align="end" className="w-[160px]">
            <DialogTrigger asChild>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />

            <AlertDialogTrigger asChild>
              <DropdownMenuItem  >
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </Dialog>
    </DropdownMenu>
  );
}
