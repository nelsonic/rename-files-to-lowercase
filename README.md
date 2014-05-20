rename-files-to-lowercase
=========================

Just a quick node script to rename all files in a directory to lower-case.

## Why?

Sometimes you will get files which have **strAngeNames.jpg** 
but you need them to be **strangenames.jpg**.

## What?

A quick node script to transform the names of files.

## How?

Using Node's File System API: http://nodejs.org/api/fs.html
to read a directory of files and re-name them to lower-case.

Uses https://www.npmjs.org/package/ncp to copy source files to new dir first.