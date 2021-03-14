module.exports = function toReadable (number) {
  const numText = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const dozenText = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

  let hundredText = '';

  if(number === 0) {
    return 'zero';
  }

  const hundreds = Math.floor(number / 100);

  let dozens = Math.floor((number - hundreds * 100) / 10);
  let digits = Math.floor(number - hundreds * 100 - dozens * 10);

  if(dozens === 1) {
    dozens = 0;
    digits = number - hundreds * 100;
  }

  if((hundreds !== undefined) && (hundreds > 0)) {
    hundredText = numText[hundreds] + ' hundred ';
  }
  return (hundredText + dozenText[dozens] + numText[digits]).trim()
}
