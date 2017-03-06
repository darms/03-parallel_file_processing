'use strict';

const read = require(`${__dirname}/lib/reader.js`);

read.grabFiles(read.files, read.readFiles, read.logThem);
