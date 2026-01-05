"use server";

import { dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const createCar = async (carData) => {
  try {
    const allCarsCollections = dbConnect("AllCars");
    const result = await allCarsCollections.insertOne(carData);

    revalidatePath("/all-cars");

    return {
      success: true,
      message: "Car listed successfully!",
      id: result.insertedId,
    };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Failed to list the car." };
  }
};
