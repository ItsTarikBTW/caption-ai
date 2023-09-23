import { getAllUsers } from "@/utils/crudFunctions";
import { publicProcedure,router } from "./trpc";

export const appRouter = router({

    getUsers: publicProcedure.query(async () => {
        const users = await getAllUsers();
        return users;
    }),
});

export type AppRouter = typeof appRouter;