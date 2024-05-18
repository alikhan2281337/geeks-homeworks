lowerText("ЕВГЕНИЙ")
function lowerText(text){
    let result = ""
    if (text.length === 0) {
        return text; // Возвращаем пустую строку, если входная строка пустая
    }
    const firstChar = text[0].toUpperCase(); // Преобразуем первую букву в заглавную
    const remainingChars = text.slice(1).toLowerCase(); // Преобразуем остальные буквы в строчные
    result += firstChar + remainingChars; 
    console.log(result);
}



function CounterLetter(text, char){

    const lowerCase = text.toLowerCase()
    const lowerChar = char.toLowerCase()

    let counter = 0 

    for(let i = 0; i < text.length; i++){
        if(lowerCase[i] === lowerChar){
            counter++
        }
    }
    console.log(text + " - we have: " + counter + " " + char);

    
}
CounterLetter("Abrakadabracsa", "a")
