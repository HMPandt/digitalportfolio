function opdr2() {
  let myName = prompt("wat is je name?", "McLaren");
  // opdracht 2
  alert(`Hallo ${myName}`);
  console.log(myName);
  }

function opdr2B() {
  alert(`Hallo ${myName}`);
  console.log(myName);
  
  const cookies = confirm('Kan wij de cookies bewaren');
  if (cookies) { // Oke klikt
      alert('Je bent het er mee eens');
  } else { //Nee 
      alert('Je bent het er niet mee eens');
  }   
  console.log(cookies);
  /* const myCity = 'Den haag'
  * aler('Ik woon in' + myCity);
  */
  const myCity = 'Den Haag';
  alert('ik woon in' + myCity);
  
}

function opdr4() {
  const x = 2;
  const y = 4;
  let z = prompt( "Vul en getal in?");
  
  const machtX = x**x;
  const machtY = y**y;
  const machtZ = z**z;
  
  document.body.innerHTML += `De macht van het getal ${x} is ${machtX}.`;
  document.body.innerHTML += `De macht van het getal ${y} is ${machtY}.`;
  document.body.innerHTML += `De macht van het getal ${z} is ${machtZ}.`;
}

function opdr4B() {
  let myAge = prompt("Hoe oud ben je?");
  const birthOne = 2021 - myAge;
  
  document.body.innerHTML += `Je bent geboren in: ${birthOne} of ${birthOne - 1} `;
}

function opdr4C() {
  const v = 4;
  const w = 2;
  v*w
  v+w
  v/w
  v-w
  
  document.body.innerHTML += ` De uitkomst van ${v} x ${w} = ${v*w}`;
  document.body.innerHTML += ` De uitkomst van ${v} + ${w} = ${v+w}`;
  document.body.innerHTML += ` De uitkomst van ${v} / ${w} = ${v/w}`;
  document.body.innerHTML += ` De uitkomst van ${v} - ${w} = ${v-w}`;
}

function opdr4D() {
  let q = prompt(" Vul een getal in?")
  const e = 2
  alert(`${q} / ${e} = ${q%e} Dit is de antwoord van de som` )
}

function opdr4E() {
  let p = 5
  p = 5 + 5 + 6
  console.log(p);
  p = p + 5
  console.log(p);
  p = 4 + 1 + (4 * 2)
  console.log(p);
  p = p + 'Hoi'
  console.log(p);
  p = 3 + 2 + (4 * 2) + p + 1
  console.log(p);
  p -= 3
  console.log(p);
  p = p + ( p * 3)
  console.log(p);
}

function opdr5() {
  const x = 5;
  const y = 8;
  console.log(x < y);
  console.log(x === 5);
  console.log(y === 'Z');
  console.log(y !== 'z');
  console.log(x+3 === y);
  console.log(x+3+'hoi' === y+'hoi');
  console.log(y+x === 13);
}
  
function opdr5B() {
  console.log(1 < 4);
  console.log(4 > 6);
  console.log('A' < 'g');
  console.log(5 == '5');
  console.log(5 != '5');
  console.log(8 === '8');
  console.log(8 !== '8');
}

function opdr6() {
  let tijd = prompt("Wat is de tijd?");

  if( tijd >= 6 && tijd < 12){
      console.log(`Het is ochtend`);
      
  } 
  else if (tijd >=12 && tijd < 18 ){
      console.log(`het is middag`);
      
  }
  else if (tijd >= 18 && tijd < 24){
      console.log(`het is avond`);
       
  }
  else if (tijd >= 0 && tijd < 6 || tijd === 24) {
      console.log(`Het is nacht`); 
  }
  else{
      alert("Dit kan niet")
      document.body.innerHTML += `KAN NIET`;
  }
}

function opdr6B() {
  let price = 100
  let inputUser = prompt("Vul in: geen, hoog of laag");
  const hoog = 1.21; 
  const laag = 1.09;
  const geen = 1;
  let btwPrice;
  let priceIncBtw;
  
  if(inputUser.toLowerCase() === "geen"){
      priceIncBtw = price* geen
      document.body.innerHTML += ` De prijs is ${price} met een btw van ${geen}. <br>
      De prijs inclusive btw is ${priceIncBtw} `;
  }
  else if(inputUser.toLowerCase() === "laag"){
      priceIncBtw = price* laag
      document.body.innerHTML += ` De prijs is ${price} met een btw van ${laag}. <br>
      De prijs inclusive btw is ${priceIncBtw} `;
  }
  else if(inputUser.toLowerCase() === "hoog"){
      priceIncBtw = price* hoog
      document.body.innerHTML += ` De prijs is ${price} met een btw van ${hoog}. <br>
      De prijs inclusive btw is ${priceIncBtw} `;
  }
  else{
      document.body.innerHTML += `je hebt geen van de opties gekozen! `;
  }
}

function opdr6C() {
  let z = 22;
  let r = 22;
  if ( z > r){
      document.body.innerHTML += `${z}`;
  }
  else if( z < r) {
      document.body.innerHTML += `${r}`;
  }
  else{
      document.body.innerHTML += `gelijk: ${z}`;
  }
  
}

function opdr6D() {
  let animal = prompt("choose an animal?");

  if(animal.toLowerCase() === "kikker"){
      document.body.innerHTML += `De kikker kwaakt`;
  }
  else if (animal.toLowerCase() === "paard" ){
      document.body.innerHTML += `De paard hinnikt`;
  }
  else if (animal.toLowerCase() === "koe" ){
      document.body.innerHTML += `De koe loeit`;
  }
  else if (animal.toLowerCase() === "leeuw" ){
      document.body.innerHTML += `De leeuw brult`;
  }
  else if (animal.toLowerCase() === "slang" ){
      document.body.innerHTML += `De slang slist`;
  }
  else if (animal.toLowerCase() === "goudvis" ){
      document.body.innerHTML += `De goudvis blubt`;
  }
  else{
      document.body.innerHTML += `Dit dier staat niet in ons systeem`;
  }
}
