function hello() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const today = Utilities.formatDate(new Date(), "JST", "yyyy/MM/dd");
  const value = "Hello clasp";

  console.log(value);
  sheet.appendRow([today, value]);
}

function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile("index.html").evaluate();
  htmlOutput
    .setTitle("GAS+Vue.js")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
  return htmlOutput;

}