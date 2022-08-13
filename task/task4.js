function letterFinder(word, match) {
    if(word.length <= 2 || match.length != 1 || typeof(word) != 'string' || typeof(match) != 'string') {
        console.log("There is an error up there.") ;
    }    
    else {
        for(var i = 0 ; i < word.length ; i++){
            if(word[i] == match) {
                console.log("I found the letter", match, "at ", i);
                break ;
            }
            else {
                console.log("I didnt find the letter in this word.") ;
                break ;
            }
        }
    }
}

letterFinder("Merhaba", "t") ;