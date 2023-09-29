import { getAllUsers, getUserById, createUser } from "@/utils/crudFunctions";
import { publicProcedure, router } from "./trpc";
import { type } from "os";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { User } from "@/app/admin/users/data/schema";

export const appRouter = router({
  getUsers: publicProcedure.query(() => {
    const users = getAllUsers();
    return users;
  }),

  getUserById: publicProcedure.input(z.object({
    id: z.number(),
  })).query(({ input }) => {
    const { id } = input;
    if (!id) {
      throw new Error("Id is required");
    }
    console.log("id", id);
    const user = getUserById(id);

    return user;
  }),

  createUser: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        role: z.string(),
        plan: z.string(),
        address: z.string(),
        status: z.string(),
      })
    )
    .mutation(({ input }: { input: User }) => {
      const user = createUser(input);
      return user;
    }),
});

export type AppRouter = typeof appRouter;
