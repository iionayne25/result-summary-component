import fsPromises from "fs/promises";
import path from "path";

export async function getLocalData() {
  //get path of the json file
  const filePath = path.join(process.cwd(), "json/data.json");
  //Read json file
  const jsonData = await fsPromises.readFile(filePath);
  //Parse dtaa as Json
  const objectData = JSON.parse(jsonData);

  return objectData;
}
