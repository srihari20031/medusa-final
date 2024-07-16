import { authenticate, type MiddlewaresConfig } from "@medusajs/medusa";
import { parseCorsOrigins } from "medusa-core-utils";
import * as cors from "cors"; // ⚠️ Make sure you import it like this

import {
  registerLoggedInUser,
  
} from "./middlewares/register-logged-in-user";

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher:
        /^\/admin\/(?!auth|analytics-config|users\/reset-password|users\/password-token|invites\/accept).*/,
      middlewares: [
        cors.default({
          credentials: true,
          origin: parseCorsOrigins(process.env.ADMIN_CORS ?? ""),
        }),
        authenticate(),
        registerLoggedInUser,
       
      ],
    },
  ],
};
