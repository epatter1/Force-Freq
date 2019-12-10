import "./styles.css";

const walmartStr = "the force rocks";

export const charCounter = str => {
  let totals = {};
  let _totals = {};
  let maxValue = null;

  let _ = [...str].map(char => {
    if (!totals[char]) {
      totals[char] = 1;
    } else if (totals[char]) {
      totals[char]++;
    }

    return totals;
  });

  // get the max value
  maxValue = Math.max(...Object.values(totals));

  Object.entries(totals).map(([key, value]) =>
    value === maxValue ? (_totals[key] = value) : void 0
  );

  // for (let [key, value] of Object.entries(totals)) {
  //   if (value === maxValue) {
  //     _totals[key] = value;
  //   }
  // }

  return _totals;
};

export const strCounter = str => {
  let totals = {},
    final = {},
    maxValue = null;

  // used _ to indicate this is a throw away value
  // returned from map since totals contains the data
  let _ = [...str]
    .map(char => {
      !totals[char] ? (totals[char] = 1) : totals[char]++;

      // also get max value
      maxValue = Math.max(...Object.values(totals));

      return totals;
    })
    .filter((obj, idx) => {
      // get the key for the object/Map by position
      let pos = Object.keys(obj)[idx];

      // using maxValue only store the elements in object
      // that contain the max value and ignore the rest
      return totals[pos] === maxValue ? (final[pos] = totals[pos]) : null;
    });

  return final;
};

/**
 * Use a Map to store one or more letters that
 * have the highest count in the given string
 *
 * @note This is the best implementation
 * @param {String} str
 * @returns {Map} returns hash map of key, values
 */
const findCharacterCount = str => {
  let letters = [];
  // fill count with zeros length of string so already initialized
  let counter = Array(str.length - 1).fill(0, 0, str.length - 1);
  let maxValue = 0;

  // convert str into array, create hash map, iterate array
  // to initialize the hash map with a key and a value [key, val]
  return new Map(
    [...str]
      .map(char => {
        // if letter not in letter array then push it in (ensures no dupcliates)
        !letters.includes(char) ? letters.push(char) : void 0;

        counter[letters.indexOf(char)]++; // increment counter using index from letters

        maxValue = Math.max(...counter); // get max value found in counter array

        return [char, counter[letters.indexOf(char)]]; // return [key, val] for Map
      })
      .filter(([k, v]) => v === maxValue && k !== " ")
    // .filter(el => el[1] === maxValue && el[0] !== " ") // strip spaces & min values
  );
};

export const reverse = str => {
  return [...str].reverse().join("");
};

export const reverse2 = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

console.log(findCharacterCount(walmartStr));
// console.log(reverse2(walmartStr));
console.log(charCounter(walmartStr));
// console.log(strCounter(walmartStr));
