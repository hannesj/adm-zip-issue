import AdmZip from "adm-zip";

const zip = new AdmZip("./testfile.zip");

zip
  .getEntries()
  .forEach((entry) => {
    console.log(entry.toString());
    const data = entry.getData().toString("utf-8")
    console.log(data);
  });
