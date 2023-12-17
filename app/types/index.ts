import { Listing, User } from "@prisma/client";
import { type } from "os";

export type SafeListings = Omit<Listing, "createAt"> & {
  createAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
