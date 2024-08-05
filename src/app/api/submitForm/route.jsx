import { google } from "googleapis";
import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    // Read the credentials.json file from the root directory
    const credentialsPath = join(process.cwd(), "credentials.json");
    const credentials = JSON.parse(readFileSync(credentialsPath, "utf-8"));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1cXOEHi8Wj7S52mIdoLW8XF49xxJBwVtPepYx5o9yXQo";
    const range = "Sheet1!A1:B1"; // Adjust the range according to your sheet

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email]],
      },
    });

    return NextResponse.json(
      { message: "Form data saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error saving form data" },
      { status: 500 }
    );
  }
}
