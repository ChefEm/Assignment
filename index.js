
function longestSubstring(wordArray) {
  
  let rep_char = {
    letter: "",
    number: 0
  };
  
  const words = [];
  for (let i = 0; i < wordArray.length; i++) {
    for (let a = i + 1; a < wordArray.length; a++) {
      words.push(wordArray[i] + wordArray[a], wordArray[a] + wordArray[i]);
    }
    
  }
  const characterRepetitions = s => Array.from(s.matchAll(/(.)\1*/g)).sort(([a],[b]) => b.length - a.length)


  const longestRepeat = ss => ss
    .map(s => [s, characterRepetitions(s)[0]])
    .sort(([s1, s1repeats], [s2, s2repeats]) => s2repeats[0].length - s1repeats[0].length)[0]
  console.log(longestRepeat(words))

  console.log(checkLargestoccurence(words))


}
function checkLargestoccurence (wordToCheck) {
   let maxChar = '';
   let char = '';
   for(let i = 0; i < wordToCheck.length; i++){
      if(wordToCheck[0] !== wordToCheck[i])
      {
         wordToCheck = wordToCheck[i];
      } 
      else 
      {
         char += wordToCheck[i];
      }
      if(char.length > maxChar.length)
      {
         maxChar = char;
      }
   }
   return {
     letter: maxChar[0] ?? '', 
     length: maxChar.length};

}



longestSubstring(["aabb", "aaaa", "bbab"]);
longestSubstring(["xxbxx", "xbx", "x"]);
longestSubstring(["dd", "bb", "cc", "dd"]);

 
