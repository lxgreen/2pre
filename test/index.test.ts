import { expect, test } from "@oclif/test";

import cmd = require("../src");

describe("2pre", () => {
  test
    .stdout()
    .do(() => cmd.run(["test.js"])) // TODO: fix path
    .it("converts test.js", (ctx) => {
      expect(ctx.stdout).to.contain(
        '<pre>&nbsp;async run() {<br/>&nbsp;&nbsp;const { args } = this.parse(_2Pre);<br/>&nbsp;&nbsp;if (!existsSync(args.file)) {<br/>&nbsp;&nbsp;&nbsp;throw new Error("Please provide valid file path");<br/>&nbsp;&nbsp;}<br/>&nbsp;&nbsp;const code = readFileSync(args.file).toString();<br/>&nbsp;&nbsp;this.log(code);<br/>&nbsp;&nbsp;const converted = _2Pre.convertCode(code);<br/>&nbsp;&nbsp;this.log(converted);<br/>&nbsp;}<br/></pre>'
      );
    });
});
