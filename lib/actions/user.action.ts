import { createUserParams, updateUserParams } from "../types/user.types";
import { connectToMongoDb } from "../mongodb";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export async function createUser(params: createUserParams) {
  try {
    await connectToMongoDb();

    const newUser = await User.create(params);

    return newUser;
  } catch (error) {
    console.log("createUser ERROR: " + error);
    throw error;
  }
}

export async function updateUser(params: updateUserParams) {
  try {
    await connectToMongoDb();

    const { clerkId, updateData, path } = params;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });

    revalidatePath(path);
  } catch (error) {
    console.log("updateUser ERROR: " + error);
    throw error;
  }
}

export async function deleteUser(params: any) {
  console.log("USER DELETED" + params);
}
