const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let string = this.phrase.toLowerCase();
  let result = this.alphabet.every((letter) => {return string.includes(letter)});
  return result;
}

module.exports = PangramFinder;
