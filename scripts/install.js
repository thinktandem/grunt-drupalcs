#!/usr/bin/env node

// Deps
var Download = require('download');
var path = require('path');
var fs = require('fs');
var merge = require('merge');
var urlModule = require('url');
var Decompress = require('decompress');
var fileExists = require('file-exists');
var chalk = require('chalk');

function logError(e) {
  console.error(chalk.bold.red((typeof e === 'string') ? e : e.message));
  process.exit(1);
}

function cb(error) {
  if( error != null ) {
    return logError( error )
  }
}

function download(src, dest) {

  // Define some constants
  var decompressOptions = { strip: 1, mode: '755' };

  // Parse the url for other things
  var parsedUrl = urlModule.parse(src);

  if( parsedUrl.protocol == 'file:' ) {
    if ( !fileExists(parsedUrl.path) ) {
      logError('Could not find ' + parsedUrl.path);
    }
    new Decompress()
      .src( parsedUrl.path )
      .dest( dest )
      .use( Decompress.zip(decompressOptions) )
      .use( Decompress.targz(decompressOptions) )
      .run( cb );
  } else {
    new Download(merge({ extract: true }, decompressOptions))
      .get( src )
      .dest( dest )
      .run( cb );
  }
}

// Get the drupal code standards
var coderUrl = "https://ftp.drupal.org/files/projects/coder-8.x-2.9.tar.gz";
var coderDest = path.resolve(__dirname, '..', 'bin');
download(coderUrl, coderDest);

// Get the code sniffer
var phpCsUrl = "https://squizlabs.github.io/PHP_CodeSniffer/phpcs.phar";
var phpCsDest = path.resolve(__dirname, '..', 'bin');
download(phpCsUrl, phpCsDest);
