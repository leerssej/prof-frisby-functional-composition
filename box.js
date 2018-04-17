// ********* original functional style ********
const nextCharForNumberString_orig = str => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
}

const result_orig = nextCharForNumberString_orig(' 64 ');

// ********* olde style ********
const nextCharForNumberString_olde = str =>
String.fromCharCode(parseInt(str.trim()) + 1);

const result_olde = nextCharForNumberString_olde(' 64 ');

// ********* chaining style ********
const nextCharForNumberString_chained = str =>
  [str]
  .map(s => s.trim())
  .map(r => parseInt(r))
  .map(i => i + 1)
  .map(i=> String.fromCharCode(i));

const result_chained = nextCharForNumberString_chained(' 64 ')

// ********* identity functor style ********
// // mapping as composition within a context (~!== iteration)
const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

const nextCharForNumberString_ident = str =>
  Box(str)
  .map(s => s.trim())
  .map(r => new Number(r))
  .map(i => i + 1)
  .map(i=> String.fromCharCode(i))
  .fold(c => c.toLowerCase());

const result_ident = nextCharForNumberString_ident(' 64 ')

console.log(result_ident)