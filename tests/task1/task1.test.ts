import {findDigitCalibrationTestCases, findWordAndDigitCalibrationTestCases, sumTestCases} from "./test.cases";
import {
    findDigitAndWordCalibrations,
    findDigitCalibrations,
    sumCalibrations
} from "../../task";
import {convertContentToRawCalibrationList} from "../../utils";
import path from "path";


describe("Test Task 1", () => {
    Object.entries(findDigitCalibrationTestCases).forEach(([input, expectedOutput]) => {
        it(`should correctly calculate calibration for ${input} as ${expectedOutput}`, async () => {
            const result = findDigitCalibrations([input]);

            expect(result[0]).toBe(expectedOutput);
        });
    });

    //we can copy it according to the rule of three
    Object.entries(findWordAndDigitCalibrationTestCases).forEach(([input, expectedOutput]) => {
        it(`should correctly calculate calibration for ${input} as ${expectedOutput} looking for words and digit`, async () => {
            const result = findDigitAndWordCalibrations([input]);

            expect(result[0]).toBe(expectedOutput);
        });
    });

    sumTestCases.forEach(({input, expected, description, useCloseTo}) => {
        it(`should ${description}`, () => {
            const result = sumCalibrations(input);
            useCloseTo ? expect(result).toBeCloseTo(expected) : expect(result).toBe(expected);
        });
    });

    it("should sum calibrations correctly for digit only search", async () => {
            const content = await convertContentToRawCalibrationList(path.join(__dirname, "..", "..", "input.txt"));
            const result = sumCalibrations(findDigitCalibrations(content));
            expect(result).toBe(56506)
        }
    );
    it("should sum calibrations correctly for digit and word search", async () => {
            const content = await convertContentToRawCalibrationList(path.join(__dirname, "..", "..", "input.txt"));
            const result = sumCalibrations(findDigitAndWordCalibrations(content));
            expect(result).toBe(56017)
        }
    );
});
