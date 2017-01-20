# unglobbable

[![NPM version](https://img.shields.io/npm/v/unglobbable.svg)](https://www.npmjs.com/package/unglobbable)
[![Build Status](https://travis-ci.org/shinnn/unglobbable.svg?branch=master)](https://travis-ci.org/shinnn/unglobbable)
[![Build status](https://ci.appveyor.com/api/projects/status/c0m0dun37maxu9yj/branch/master?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/unglobbable/branch/master)

A glob pattern that lets [node-glob](https://github.com/isaacs/node-glob) emit an error

```javascript
const glob = require('glob');
const unglobbable = require('unglobbable');

glob('safe/glob/pattern', err => {
  !!err; //=> false
});

glob(unglobbable, err => {
  !!err; //=> true
});
```

Useful for writing the failure test case. [Example](https://github.com/shinnn/glob-observable/blob/f1f560de7977aba02463e36b5c69d2fb1305d8a8/test.js#L125)

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install unglobbable
```

## API

```javascript
const unglobbable = require('unglobbable');
```

### unglobbable

Value: `String` of the following:

| Platform | String                      |
|:---------|:----------------------------|
| Darwin   | `/private/var/root/*`       |
| Linux    | `/proc/*/*/*/*`             |
| Windows  | `/Documents and Settings/*` |
| Others   | `/**`                       |

```javascript
// On macOS
const glob = require('glob');
const unglobbable = require('unglobbable');

unglobbable; //=> '/private/var/root/*'

glob(unglobbable, err => {
  err.message; //=> 'EACCES: permission denied, scandir '/private/var/root''
});
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
