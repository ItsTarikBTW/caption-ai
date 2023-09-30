import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} from "@/utils/crudFunctions";
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

  getUserById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(({ input }) => {
      const { id } = input;
      if (!id) {
        throw new Error("Id is required");
      }
      const user = getUserById(id);

      return user;
    }),
  deleteUser: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(({ input }) => {
      const { id } = input;
      if (!id) {
        throw new Error("Id is required");
      }
      deleteUser(id);

      // You can return a success message or any relevant data here if needed
      return { success: true };
    }),
  createUser: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        email: z.string().email(),
        role: z.string(),
        plan: z.string(),
        address: z.string(),
        status: z.string(),
      })
    )
    .mutation(({ input }) => {
      // Create a new user using the input data
      const newUser = createUser(input);

      return newUser;
    }),

  updateUserById: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        email: z.string().email(),
        role: z.string(),
        plan: z.string(),
        address: z.string(),
        status: z.string(),
      })
    )
    .mutation(({ input }) => {
      if (!input.id) {
        throw new Error("Id is required");
      }
      // Update the user with the provided ID using the updateData
      const updatedUser = updateUser(input);

      return updatedUser;
    }),
});

export type AppRouter = typeof appRouter;
