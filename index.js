var crypto = require('./browser')
/* istanbul ignore next */
var pbkdf2SyncFunc = crypto.pbkdf2Sync.toString()

if (pbkdf2SyncFunc.indexOf('sha1') === -1) {
  throw new Error('Unsupported crypto version')
}

exports.pbkdf2Sync = crypto.pbkdf2Sync
exports.pbkdf2 = crypto.pbkdf2
