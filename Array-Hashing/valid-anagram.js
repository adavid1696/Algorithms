// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(t.length !== s.length) return false
    
    const hash = new Map();

		for (let i = 0; i < s.length; i++) {
			if(hash.has(s[i])){
				hash.set(s[i], hash.get(s[i]) + 1)
			}
			else hash.set(s[i], 1)
		}

		// console.log(hash)\
		console.log(hash)
		

		for(let j = 0; j < t.length; j++){
			if(hash.has(t[j])){
				hash.set(t[j], hash.get(t[j]) - 1)
			} else return false;
		} 

		console.log(hash.entries())

		for(let [key, value] of hash.entries()){
			// console.log([key, value])
			if(value !== 0){
				return false
			}
		}

		return true
};

console.log(isAnagram("anagram", "nagarcam"))