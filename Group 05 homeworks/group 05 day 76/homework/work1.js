function firstNonRepeatingLetter(s) {
    const lower_s = s.toLowerCase();
    
    for(let i = 0; i < s.length; i++){
      if(lower_s.indexOf(lower_s[i]) === lower_s.lastIndexOf(lower_s[i])){
        return s[i]
      }
    }
    
    return ""
  }