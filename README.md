Reproduction of regression between adm-zip 0.5.14 and 0.5.15

## Running

```bash
npm install
node src/index.mjs
```

## Output
```
>node src/index.mjs
{
        "entryName": "index.js",
        "name": "index.js",
        "comment": "",
        "isDirectory": false,
        "header": {
                "made": 813,
                "version": 20,
                "flags": 2056,
                "method": "DEFLATED (8)",
                "time": "2024-12-11T10:09:00.000Z",
                "crc": "0x7CC3E76A",
                "compressedSize": "71 bytes",
                "size": "70 bytes",
                "fileNameLength": "8 bytes",
                "extraLength": "0 bytes",
                "commentLength": "0 bytes",
                "diskNumStart": 0,
                "inAttr": 0,
                "attr": 2175008800,
                "offset": 0,
                "centralHeaderSize": "54 bytes"
        },
        "compressedData": "<185 bytes buffer>",
        "data": "<null>"
}
/Projects/adm-test/node_modules/adm-zip/util/errors.js:56
return new Error('ADM-ZIP: ' + message);
^

Error: ADM-ZIP: No descriptor present
at Object.DESCRIPTOR_NOT_EXIST (/Projects/adm-test/node_modules/adm-zip/util/errors.js:56:16)
at crc32OK (/Projects/adm-test/node_modules/adm-zip/zipEntry.js:42:36)
at decompress (/Projects/adm-test/node_modules/adm-zip/zipEntry.js:121:26)
at Object.getData (/Projects/adm-test/node_modules/adm-zip/zipEntry.js:320:24)
at file:///Projects/adm-test/src/index.mjs:9:24
at Array.forEach (<anonymous>)
at file:///Projects/adm-test/src/index.mjs:7:4
at ModuleJob.run (node:internal/modules/esm/module_job:234:25)
at async ModuleLoader.import (node:internal/modules/esm/loader:473:24)
at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:122:5)

Node.js v20.18.1
```

## Expected
```
>node src/index.mjs
{
        "entryName": "index.js",
        "name": "index.js",
        "comment": "",
        "isDirectory": false,
        "header": {
                "made": 813,
                "version": 20,
                "flags": 2056,
                "method": "DEFLATED (8)",
                "time": "2024-12-11T10:09:00.000Z",
                "crc": "0x7CC3E76A",
                "compressedSize": "71 bytes",
                "size": "70 bytes",
                "fileNameLength": "8 bytes",
                "extraLength": "0 bytes",
                "commentLength": "0 bytes",
                "diskNumStart": 0,
                "inAttr": 0,
                "attr": 2175008800,
                "offset": 0,
                "centralHeaderSize": "54 bytes"
        },
        "compressedData": "<185 bytes buffer>",
        "data": "<null>"
}
"use strict";

exports.handler = () => {
  // placeholder function
};
```
