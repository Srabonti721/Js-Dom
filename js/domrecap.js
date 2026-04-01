const header = document.getElementById("header");
  header.style.border="2px solid red" ;
    header.style.margin="10px";
   header.style.borderRadius="15px";
   header.style.borderRadius="15px";
    header.style.backgroundColor = "yellow";
    header.style.padding= "10px"
const sections =  document.querySelectorAll("section");
for(const section of sections){
    console.log(section);
    section.style.border="2px solid purple" ;
    section.style.margin="10px";
    section.style.borderRadius="15px";
    section.style.backgroundColor = "pink";
    section.style.padding= "10px"
}

const recap = document.getElementById("header");
recap.classList.add("text-right");
recap.classList.add("red-bg");
recap.classList.remove("text-right")