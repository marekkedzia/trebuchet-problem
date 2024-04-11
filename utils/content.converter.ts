import {readFileContent} from "./file.reader";

async function convertContentToRawCalibrationList(filePath: string): Promise<string[]> {
    const content = await readFileContent(filePath);
    return content.split('\n');
}

export {convertContentToRawCalibrationList};
