/**
 * Google Apps Script — contact form backend.
 *
 * Setup:
 * 1. Create a Google Sheet named e.g. "Continental Trust — Contact Form".
 * 2. In the Sheet: Extensions → Apps Script, paste this file.
 * 3. Deploy → New deployment → Web app:
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Copy the Web App URL and set it as NEXT_PUBLIC_SHEET_WEBHOOK_URL.
 */

const SHEET_NAME = "Submissions";
const HEADERS = ["Submitted At", "Company Name", "Your Name", "Email", "Message", "SMS Consent"];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  // Auto-create headers if the first row is empty (new or manually created sheet).
  if (sheet.getLastRow() === 0 || sheet.getRange(1, 1, 1, HEADERS.length).isBlank()) {
    sheet.appendRow(HEADERS);
    formatSheet_(sheet);
  }
  return sheet;
}

/** Column widths + wrapping so text wraps instead of extending forever. */
function formatSheet_(sheet) {
  const widths = [180, 260, 200, 260, 500, 140]; // px per column
  widths.forEach(function (width, index) {
    sheet.setColumnWidth(index + 1, width);
    sheet.getRange("A:F").setWrap(true);
  });
  const header = sheet.getRange(1, 1, 1, HEADERS.length);
  header.setFontWeight("bold").setBackground("#0f2a43").setFontColor("#ffffff");
  sheet.setFrozenRows(1);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet_();
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.companyName || "",
      data.yourName || "",
      data.email || "",
      data.message || "",
      data.smsConsent ? "Yes" : "No",
    ]);
    return ContentService.createTextOutput(JSON.stringify({ result: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}