export const detectSums = (array) => {
  let result = [];
  const len = array.length;
  for (let sum = 0; sum < len; sum++) {
    for (let pa = 0; pa < len; pa++) {
      for (let pb = pa + 1; pb < len; pb++) {
        if (array[pa] + array[pb] !== array[sum]) continue;
        if (pa !== sum && pb !== sum) {
          result = [ ...result, { pA: pa, pB: pb, sum: sum } ];
        }
      }
    }
  }
  return result;
};

export function calculateResult(input) {
  let error = null;
  let parsedInput;
  try {
    parsedInput = input.split(',').map(i => parseInt(i.trim(), 10));
    if (parsedInput.includes(NaN) || parsedInput === []) error = 'Input is not an number array';
  } catch (e) {
    error = e.message;
  }
  return { input: parsedInput, error }
}
