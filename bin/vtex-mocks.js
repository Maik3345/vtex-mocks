#!/usr/bin/env node

const args = process.argv.slice(2);

const [script] = args;

switch (script) {
  case "setup": {
    const executeScript = require(`../scripts/${script}`);

    try {
      executeScript(...args.slice(1));
    } catch (e) {
      console.error(e)
      console.info(`An error occurred while running the script "${script}".\n`);
      console.info(
        "If you think this is a bug in our tools, feel free to file a bug report at",
        "https://github.com/Maik3345/vtex-mocks/issues\n"
      );
      process.exit(1);
    }

    break;
  }

  default:
    console.error(`Unknown script "${script}".`);
    break;
}
