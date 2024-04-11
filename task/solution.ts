import {findFirstDigit, findFirstDigitOrMapping} from "./find.first.digit";

function findCalibrations(rawCalibrations: string[], findFirstDigitHelper: (calibration: string, defaultValue?: string, searchFromEnd?: boolean) => string): number[] {
    const DEFAULT_CALIBRATION_VALUE = "0";

    return rawCalibrations.map(calibration => {
        const firstDigit = findFirstDigitHelper(calibration, DEFAULT_CALIBRATION_VALUE);
        if (firstDigit === DEFAULT_CALIBRATION_VALUE) return parseInt(DEFAULT_CALIBRATION_VALUE); //if we don't find the first digit, we can return the default value
        const lastDigit = findFirstDigitHelper(calibration, DEFAULT_CALIBRATION_VALUE, true); //to avoid reversing the list we can search from the end
        return parseInt(firstDigit + lastDigit);
    });
}

function sumCalibrations(calibrations: number[]): number {
    return calibrations.reduce((acc, current) => acc + current, 0);
}

const findDigitCalibrations = (rawCalibrations: string[]) => findCalibrations(rawCalibrations, findFirstDigit);

const wordToDigitMapping = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
};

const findDigitAndWordCalibrations = (rawCalibrations: string[]) => findCalibrations(rawCalibrations, findFirstDigitOrMapping(wordToDigitMapping));

export {findDigitCalibrations, findDigitAndWordCalibrations, sumCalibrations};
