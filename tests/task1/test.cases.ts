const sumTestCases = [
    {input: [], expected: 0, description: 'return 0 for an empty array'},
    {input: [1, 2, 3, 4, 5], expected: 15, description: 'correctly sum a list of positive numbers'},
    {input: [-1, -2, -3, -4, -5], expected: -15, description: 'correctly sum a list of negative numbers'},
    {input: [-1, 2, -3, 4, -5], expected: -3, description: 'correctly sum a list with both positive and negative numbers'},
    {input: [0, 0, 0, 0], expected: 0, description: 'correctly sum a list with zeros'},
    {input: [1000000, 2000000, 3000000], expected: 6000000, description: 'handle large numbers'},
    {input: [1.5, 2.5, 3.5], expected: 7.5, description: 'handle floating point numbers', useCloseTo: true}
];

const findDigitCalibrationTestCases = {
    "nkzjrdqrmpztpqninetwofour1znnkd": 11,
    "s5sevenxrdfr4mhpstgbjcfqckronesix": 54,
    "3four4": 34,
    "sfdrtpvspsixsn5zbqmggb8vgkjseight": 58,
    "72666gxzflnsfqmndjdscvqmcqls5": 75,
    "hvqgbssr46four1cdcjxcdcp": 41,
    "zpjvvcbeightthree1bcnvjzbnqseven": 11,
    "jqbjxdkkveightrtktnsr92sevenmztdg": 92,
    "three3ninefive": 33,
    "twosevennnine6467": 67,
    "fjrzk9rfpqtbrc1bzfclczqxq": 91,
    "ninegkftwo29seven": 29,
    "eightone7threenl7mtxbmkpkzqzljrdk": 77,
    "twothree6vpnvvnshn": 66,
    "4qsqraaaaaaa": 44,
    "seventhreezjfour6": 66,
    "": 0,
    "aaaaa": 0,
}

const findWordAndDigitCalibrationTestCases = {
    "s5sevenxrdfr4mhpstgbjcfqckronesix": 56,
    "3four": 34,
    "sizfdrtpvspsixsn5zbqmggb8vgkjseight": 68,
    "ninegkftwo29seven": 97,
    "eightone7threenl7mtxbmkpkzqzljrdk": 87,
    "aaathreeaaavpnvvnshn": 33,
    "4qsqraaaaaaa": 44,
    "fjrzk9rfpqtbrc1bzfclczqxq": 91,
    "three3ninefive": 35,
    "": 0,
    "aaaaa": 0,
}

export {sumTestCases, findDigitCalibrationTestCases, findWordAndDigitCalibrationTestCases};
