import fs from 'fs';
import util from 'util';

function readFileContent(path: string): Promise<string> {
    const readFile = util.promisify(fs.readFile);
    return readFile(path, {encoding: 'utf8'});
}

export {readFileContent};
