const placesContainer = document.getElementById("places-container");
const li = document.createElement("li");
li.innerText= "cox-bazar"
placesContainer.appendChild(li)


const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
const h1 = document.createElement('h1');
h1.innerText = "this is my favourit food list"
section.appendChild(h1)

const ul = document.createElement("ul")
const li1 = document.createElement("li")
li1.innerText = "pulau";
ul.appendChild(li1)

const li2 = document.createElement("li");
li2.innerText = "biryani";
ul.appendChild(li2)

const li3 = document.createElement("li");
li3.innerText = "rost";
ul.appendChild(li3)

const li4 = document.createElement("li");
li4.innerText = "kabab";
ul.appendChild(li4)
section.appendChild(ul)
mainContainer.appendChild(section)

const mainContainer2 = document.getElementById("main-container");
const section2 = document.createElement("section")
const div = document.createElement("div");
const h2 = document.createElement("h2");
h2.innerText = "Hellow welcome to your resturent";
div.appendChild(h2);
const p = document.createElement("p");
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis nisi atque vitae nobis perferendis eius illo repellat reiciendis expedita explicabo nostrum accusantium, quam magnam assumenda error quod eum iste eaque ducimus, obcaecati repudiandae sunt. Tempore ullam recusandae natus, cum, illum eveniet ratione, ipsum neque consequatur non quaerat deserunt numquam."
div.appendChild(p)

const ul2 = document.createElement("ul");
const li5 = document.createElement('li');
li5.innerText = "banana";
ul2.appendChild(li5)

const li6 = document.createElement("li");
li6.innerText = "watermelon";
ul2.appendChild(li6)

const li7 = document.createElement("li");
li7.innerText = "orange";
ul2.appendChild(li7)

const li8 = document.createElement("li");
li8.innerText = "apple";
ul2.appendChild(li8)

const li9 = document.createElement("li");
li9.innerText = "grape";
ul2.appendChild(li9)
const li10 = document.createElement("li");
li10.innerText = "lemon";
ul2.appendChild(li10);

div.appendChild(ul2);
section2.appendChild(div)
mainContainer2.appendChild(section2);
// set innerHtml directly

const anotherSection = document.createElement("section");
anotherSection.innerHTML = `
<h1>this section is your dress section</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis nisi atque vitae nobis perferendis eius illo repellat reiciendis expedita explicabo nostrum accusantium, quam magnam assumenda error quod eum iste eaque ducimus, obcaecati repudiandae sunt. Tempore ullam recusandae natus, cum, illum eveniet ratione, ipsum neque consequatur non quaerat deserunt numquam.</p>
<h4>girls drees</h4>
<ul>
<li>jama</li>
<li>painaja</li>
<li>urna</li>
<li>churi</li>
</ul>
<h4>boys drees</h4>
<ul>
<li>shirt</li>
<li>pant</li>
<li>ganji</li>
<li>juta</li>
</ul>
`
mainContainer.appendChild(anotherSection)       