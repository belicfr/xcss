const INTERPRETER = require("./xcss/Interpreter");

exports.printMsg = () => {
    console.log("X-CSS loaded! 🥹");
};

exports.interpreter = INTERPRETER.interpreterClass;