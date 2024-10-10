# OpenSphere Founder Awards

This project is a React-based landing page for the OpenSphere Founder Awards, designed to recognize exceptional startup founders and provide global opportunities.

## Project Overview

The OpenSphere Founder Awards landing page includes:
- Information about the award program
- Benefits of the award
- A submission form for founders to apply
- FAQ section

## Getting Started

### Prerequisites

- Node.js (v12.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:
    npm install

4. Start the development server:
    npm start

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Google Sheets Integration

This project uses Google Sheets to store form submissions. To set this up:

1. Create a new Google Sheet.
2. Go to Extensions > Apps Script in your Google Sheet.
3. Replace the contents of the script editor with the following code:

```javascript
function doPost(e) {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var data = e.parameter;

var rowData = [
 new Date(),  // Timestamp
 data.name,
 data.email,
 data.company,
 data.achievements
];

sheet.appendRow(rowData);

return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}



4. Deploy the script as a web app:

    Click "Deploy" > "New deployment"
    Choose "Web app" as the type
    Set "Execute as" to "Me"
    Set "Who has access" to "Anyone"
    Click "Deploy" and authorize when prompted


5. Copy the provided Web app URL and replace the SCRIPT_URL in src/App.js with this URL.