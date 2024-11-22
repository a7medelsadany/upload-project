var quoteGenerator = ["'“Be yourself; everyone else is already taken.” ― Oscar Wilde' ", "'“A room without books is like a body without a soul.”― Marcus Tullius Cicero'","'“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein'",
"'“Be the change that you wish to see in the world.”― Mahatma Gandhi'","'“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost'",
"'“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”― Maya Angelou'","'“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde'",
"'“Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi'","'“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”― Ralph Waldo Emerson'","'“Insanity is doing the same thing, over and over again, but expecting different results.”― Narcotics Anonymous'"];

function generate() {
    var random = Math.floor(Math.random() * quoteGenerator.length);
    displayQuote();
    document.getElementById("quote").innerHTML = quoteGenerator[random];
}
function displayQuote(){
    document.getElementById("quoteButton").style.display = "block";

}

