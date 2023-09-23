import { NextApiRequest, NextApiResponse } from "next";
import { createUser, getAllUsers } from "@/utils/crudFunctions";

import { NextRequest, NextResponse } from "next/server";
import { ca } from "date-fns/locale";
import { User } from "@/app/admin/users/data/schema";

//get all users
export async function GET(): Promise<NextResponse> {
  console.log("api/users/route.ts GET");
  try {
    const users = getAllUsers();
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
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

//create new user
export async function POST(req: NextRequest): Promise<NextResponse> {
  const  newUser  = (await req.json());
  console.log("api/users/route.ts POST req body", newUser, "END req body");
  if (!newUser) {
    return new NextResponse(JSON.stringify({ message: "User not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  console.log("api/users/route.ts POST req body", newUser, "END req body");

  createUser(newUser);
  return new NextResponse(
    JSON.stringify({ message: "User created successfully", newUser }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
