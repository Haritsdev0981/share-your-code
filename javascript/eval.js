require("child_process").exec(
    "ping google.com",
    {
      timeout: 5000,
    },
    (err, stdout, stderr) => {
      let e = !!stderr;
      let result =
        stdout && stderr
          ? `Stdout:\n${stdout}\nStderr:\n${stderr}`
          : stdout || stderr;

      console.log(`${e ? "Error" : "Success"}\n\n${result.substr(0, 2042)}`); // For use in a Discord bot, the output will be truncated
    }
  );
