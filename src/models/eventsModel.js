import { readFile } from "fs/promises";
import { GoogleSpreadsheet } from "google-spreadsheet";

const credentials = JSON.parse(
  await readFile(new URL("../credentials/credentials.json", import.meta.url))
);

const fetchSpreadsheet = async () => {
  const sheetId = process.env.SHEET_ID;
  const doc = new GoogleSpreadsheet(sheetId);
  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });
  console.log("logado");
  await doc.loadInfo();
  console.log(doc.title);
  const sheet = doc.sheetsByIndex[0];
  return sheet;
};

const getEvents = async () => {
  const sheet = await fetchSpreadsheet();
  const rows = await sheet.getRows();
  const events = rows.map(
    ({ name, date, start_time, end_time, description, is_active }) => {
      return {
        name,
        date,
        start_time,
        end_time,
        description,
        is_active: is_active == "TRUE",
      };
    }
  );

  return events;
};

export default {
  getEvents,
};
