import { NextApiRequest, NextApiResponse } from "next";
import {
  updateUser,
  deleteUser,
  getUserById
} from "@/utils/crudFunctions";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/admin/users/data/schema";

//get user by id
export async function GET(req: Request): Promise<NextResponse> {
  const id = Number(req.url.split("users/")[1]);
  if (isNaN(id)) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid ID supplied" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  try {
    const users = getUserById(id);
    if (!users) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new NextResponse(JSON.stringify(users), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify(err), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

//update user by id
export async function PUT(req: NextRequest): Promise<NextResponse> {
  const user = await req.json();
  if (!user) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid request body user is null" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  console.log("api/users/[id]/route.ts PUT", user);
  const id = Number(req.url.split("users/")[1]);
  if (isNaN(id)) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid ID supplied id is not of type number" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
      );
    }
  updateUser(user);
  return new NextResponse(
    JSON.stringify({ message: "User updated successfully", user }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

//delete user by id
export async function DELETE(req: Request): Promise<NextResponse> {
  const id = Number(req.url.split("users/")[1]);
  if (isNaN(id)) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid ID supplied" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  deleteUser(id);
  return new NextResponse(
    JSON.stringify({ message: "User deleted successfully" , id}),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}