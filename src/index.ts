import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { Command, flags } from "@oclif/command";

class _2Pre extends Command {
  static description = "describe the command here";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    tabsize: flags.integer({
      char: "t",
      required: false,
      default: 2,
      description: "tab size",
    }),
  };

  static args = [
    {
      name: "file",
      required: true,
      description: "file to convert",
      parse: (input: string) => resolve(input),
    },
  ];

  static convertCode(code: string, flags: Record<string, unknown>) {
    const lines = code.split("\n");
    const replaceSpace = `\\s{${flags.tabsize}}`;
    console.log({ replaceSpace }); // eslint-disable-line no-console
    const spaceRegex = new RegExp(replaceSpace, "g");
    const convertedLines = lines.map((line) =>
      line.replace(/^\t/, "&nbsp;").replace(spaceRegex, "&nbsp;")
    );
    return `<pre>${convertedLines.join("<br/>")}</pre>`;
  }

  async run() {
    const { flags, args } = this.parse(_2Pre);
    this.log("file: ", args.file); // eslint-disable-line no-console
    if (!existsSync(args.file)) {
      throw new Error("Please provide valid file path");
    }
    const code = readFileSync(args.file).toString();
    this.log(code);
    const converted = _2Pre.convertCode(code, flags);
    this.log(converted);
  }
}

export = _2Pre;
