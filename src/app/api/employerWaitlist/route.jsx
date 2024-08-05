import { google } from "googleapis";
import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, company, company_size } = await req.json();

    // Read the credentials.json file from the root directory
    const credentialPath = join(process.cwd(), "googlecredential.json");
    const credentials = JSON.parse(readFileSync(credentialPath, "utf-8"));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1Q_aJuUBMxJhN7t4x7Qtr1KIVt-LCXubOKVV5KV5GjPM";
    const range = "Sheet1!A1:D1"; // Adjust the range according to your sheet

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, company, company_size]],
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
