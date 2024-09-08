import {
  DATABASE_ID,
  databases,
  USERPROFILES_COLLECTION_ID,
} from "@/appwrite/config";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const SITE_URL = process.env.NODE_ENV_SITE_URL;

  try {
    // Fetch document
    const data = await databases.getDocument(
      DATABASE_ID,
      USERPROFILES_COLLECTION_ID,
      user.id
    );
    // Redirect on success
    return NextResponse.redirect(`${SITE_URL}/dashboard`);
  } catch (err) {
    // Handle error when document is not found
    console.error("Error fetching user profile: ", err);

    try {
      // Create user profile if document is not found
      await databases.createDocument(
        DATABASE_ID,
        USERPROFILES_COLLECTION_ID,
        user.id,
        {
          fullName: `${user.given_name ?? ""} ${user.family_name ?? ""}`,
          email: user.email,
          profilePicture: user.picture,
        }
      );
      // Redirect after successful profile creation
      return NextResponse.redirect(`${SITE_URL}/welcome`);
    } catch (createErr) {
      // Handle error during profile creation
      console.error("Error creating user profile: ", createErr);
      // Return an error response
      return NextResponse.json(
        { error: "Failed to create user profile" },
        { status: 500 }
      );
    }
  }
};
