class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let array = sentence.split(' ');
    let result = [];

    for(let n = 0; n < array.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(array[n]))
      }
      else {
        if (exceptions.includes(array[n])) {
          result.push(array[n])
        }
        else {
          result.push(this.capitalize(array[n]))
        }
      }
    }
    return result.join(' ');
  }
}

