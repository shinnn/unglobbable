# unglobbable

[![npm version](https://img.shields.io/npm/v/unglobbable.svg)](https://www.npmjs.com/package/unglobbable)
[![Build Status](https://travis-ci.com/shinnn/unglobbable.svg?branch=master)](https://travis-ci.com/shinnn/unglobbable)

A glob pattern that lets [node-glob](https://github.com/isaacs/node-glob) and [fast-glob](https://github.com/mrmlnc/fast-glob) emit an error

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

Useful for writing the failure test case. [Example](https://github.com/shinnn/glob-observable/blob/084a9ece8437d84fbeb9d1a5c758f20a86c44306/test.js#L126)

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm]https://docs.npmjs.com/about-npm/).

```
npm install unglobbable
```

## API

```javascript
import unglobbable from 'unglobbable';
```

### unglobbable

Value: `string` of the following:

| Platform | String                      |
|:---------|:----------------------------|
| Darwin   | `/private/var/root/*`       |
| Linux    | `/proc/*/*/*/*`             |
| Windows  | `/Documents and Settings/*` |
| Others   | `/**`                       |

```javascript
// On macOS
import glob from 'glob';
import unglobbable from 'unglobbable'; //=> '/private/var/root/*'

glob(unglobbable, err => {
  err.message; //=> 'EACCES: permission denied, scandir '/private/var/root''
});
```

## License

[ISC License](./LICENSE) © 2018 - 2019 Watanabe Shinnosuke
