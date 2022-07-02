import { ImagePool } from "@squoosh/lib";
const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

/*import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
  WorkerOptions,
} from "threads";*/
import { promises as fsPromises } from "fs";

import * as path from "path";

async function runSquoosh(imagePath, filename, outputFolderPath) {
  const imagePool = new ImagePool();
  const image = await imagePool.ingestImage(imagePath);
  const preprocessOptions = {
    resize: {
      width: 100,
    },
  };
  await image.preprocess(preprocessOptions);
  const encodeOptions = {
    mozjpeg: {}, //an empty object means 'use default settings'
    jxl: {
      quality: 90,
    },
  };
  await image.encode(encodeOptions);
  const { extension, binary } = await image.encodedWith.mozjpeg;
  fs.writeFileSync(`${outputFolderPath}/${filename}.${extension}`, binary);
  imagePool.close();
}
