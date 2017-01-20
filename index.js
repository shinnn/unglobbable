module.exports = {
  darwin: '/private/var/root/*',
  linux: '/proc/*/*/*/*',
  win32: '/Documents and Settings/*'
}[process.platform] || '/**';
