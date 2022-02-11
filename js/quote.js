const theQuotes = [
    { quote: "Java is to JavaScript, <br> like Boter is to Boterham",
      from: "MBO mondriaan"
     },
     {
      quote:"its beter to live without regret, then to live with it",
      from:"Hunter Pandt"
     },
     {
      quote:"to love is to die, cause the pain is ten fold",
      from:"Hunter Pandt"
     },
     {
      quote:"living is its own form of punisment",
      from:"Ryan todd"
     },
     {
      quote:"everyone should smile more, happisness is a fun isslusion",
      from: "Chris black"
     },
 
 ];
  
 const generatebtn = document.querySelector(".generate");
 const paraElement = document.querySelector(`.para`);
 const paroElement = document.querySelector(`.paro`);
 generatebtn.addEventListener( "click", makeQuote);
 
 function makeQuote(){
     const randomnumber = Math.floor(Math.random() * 4);
     paraElement.style.color = "white";
     paraElement.innerHTML = theQuotes[randomnumber].quote;
     paroElement.innerHTML = theQuotes[randomnumber].from;
     paroElement.style.color= "white";
 }
 
 