'use strict'

const fs = require('fs')
const path = require('path')
const existSync = fs.existsSync

function getFtpConfig() {
  const customizeFtpDir = path.join(process.cwd(), 'ftp.config.js')
  let ftpConfig

  if (existSync(customizeFtpDir)) {
    ftpConfig = customizeFtpDir
  }

  return ftpConfig
}

module.exports = getFtpConfig()
