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
