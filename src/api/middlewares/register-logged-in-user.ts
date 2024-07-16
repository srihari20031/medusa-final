import type {
  MedusaNextFunction,
  MedusaRequest,
  MedusaResponse,
  MiddlewaresConfig,
  User,
  UserService,
} from "@medusajs/medusa";

export const registerLoggedInUser = async (
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction
) => {
  let loggedInUser: User | null = null;

  if (req.user && req.user.userId) {
    const userService = req.scope.resolve("userService") as UserService;
    loggedInUser = await userService.retrieve(req.user.userId);
  }

  req.scope.register({
    loggedInUser: {
      resolve: () => loggedInUser,
    },
  });
  
  console.log("Logged In User registered:", loggedInUser.store_id);

  next();
};

// export const logScopeContents = (
//   req: MedusaRequest,
//   res: MedusaResponse,
//   next: MedusaNextFunction
// ) => {
//   console.log("Scope Contents:", req.scope);
//   next();
// };
