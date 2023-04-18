/*
 * X-CSS project.
 */

const FS = require("fs");

/**
 * Interpreter main class.
 * This class manages interpreter to traduce X-CSS files.
 *
 * @author belicfr
 * @version 0.1.0
 */
class Interpreter {
    /** Path to file to interpret. */
    #filepath;

    /** String Regular Expression. */
    #rgxString;

    constructor(filepath) {
        this.#filepath = filepath;

        this.#rgxString = /(?:"[^"]*"|^[^"]*$)/g;
    };

    /**
     * Get instance filepath.
     * @returns {*}
     */
    getFilepath() {
        return this.#filepath;
    };

    /**
     * Returns file content from file path.
     * @returns {string}
     */
    getFileContent(withStrings = true) {
        let fileContent = FS.readFileSync(this.getFilepath(), "utf-8");

        if (!withStrings) {
            fileContent = fileContent.replaceAll(this.#rgxString, '');
        }

        return fileContent;
    };

    /**
     * Returns if file exists by file path.
     * @returns {boolean}
     */
    fileExists() {
        return FS.existsSync(this.getFilepath());
    };

    interpret() {
        if (!this.fileExists()) {
            console.error("File not exists.\nPATH => " + this.getFilepath());
            return;
        }

        console.log("W/ STR = ", this.getFileContent());
        console.log("W/OUT STR = ", this.getFileContent(false));
    };

    /** temporal method to test package implementation. */
    // TODO: delete it.
    test() {
        console.log("Package implementation: success!");
    };
}

exports.interpreterClass = Interpreter;