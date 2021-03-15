2pre
====

converts a code snippet to md table embeddable &lt;pre&gt; one-liner

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/2pre.svg)](https://npmjs.org/package/2pre)
[![CircleCI](https://circleci.com/gh/lxgreen/2pre/tree/master.svg?style=shield)](https://circleci.com/gh/lxgreen/2pre/tree/master)
[![Codecov](https://codecov.io/gh/lxgreen/2pre/branch/master/graph/badge.svg)](https://codecov.io/gh/lxgreen/2pre)
[![Downloads/week](https://img.shields.io/npm/dw/2pre.svg)](https://npmjs.org/package/2pre)
[![License](https://img.shields.io/npm/l/2pre.svg)](https://github.com/lxgreen/2pre/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Example](#example)
<!-- tocstop -->
## Usage
<!-- usage -->
```sh-session
$ npm install -g 2pre

$ 2pre --help
USAGE
  $ 2pre FILE

ARGUMENTS
  FILE  file to convert

OPTIONS
  -h, --help             show CLI help
  -t, --tabsize=tabsize  [default: 2] tab size
  -v, --version          show CLI version

```
<!-- usagestop -->

## Example

```sh-session
$ 2pre ./test/test.js
  async run() {
    const { args } = this.parse(_2Pre);
    if (!existsSync(args.file)) {
      throw new Error("Please provide valid file path");
    }
    const code = readFileSync(args.file).toString();
    this.log(code);
    const converted = _2Pre.convertCode(code);
    this.log(converted);
  }

&lt;pre&gt;&amp;nbsp;async run() {&lt;br/&gt;&amp;nbsp;&amp;nbsp;const { args } = this.parse(_2Pre);&lt;br/&gt;&amp;nbsp;&amp;nbsp;if (!existsSync(args.file)) {&lt;br/&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;throw new Error(“Please provide valid file path”);&lt;br/&gt;  }&lt;br/&gt;&amp;nbsp;&amp;nbsp;const code = readFileSync(args.file).toString();&lt;br/&gt;&amp;nbsp;&amp;nbsp;this.log(code);&lt;br/&gt;&amp;nbsp;&amp;nbsp;const converted = _2Pre.convertCode(code);&lt;br/&gt;&amp;nbsp;&amp;nbsp;this.log(converted);&lt;br/&gt; }&lt;br/&gt;&lt;/pre&gt;
