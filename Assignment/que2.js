//Discuss the advantages and limitations of using a switch statement compared to if-else statements. Provide a scenario where a switch statement is a better choice


let Mounth = 5; 
let mounth="";

switch (Mounth) {
  case 1:
    weatherMessage = "January";
    break;
  case 2:
    Mounth = "Feb";
    break;
  case 3:
    Mounth = "March";
    break;
  case 4:
    Mounth = "April";
    break;

  case 5:
    Mounth = "May";
    break;
   case 6:
    Mounth = "June";
    break;
  default:
    Mounth = "Default";
}

console.log(Mounth);