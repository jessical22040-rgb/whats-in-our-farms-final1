

const data = [
    { src: "images/flooding.jpg", 
	title: 'F<o9>l</o9><o8>oo</o8><o7>di</o7><o6>ng</o6>', 
	body: "Flooding is devastating for farmers in New Zealand this is becuase pasture dies after 3 days without oxygen, therefore money will need to be spent regrowing crop and pasture. In terms of dairy farming when flooding occurs it deposits silt, which whne cows eat it, it results in a high cell count. Meaning milk gets dumped and farmers get fined. Farms itself and livestock suffer serious damage such as fences broken, animals drowned or sranded, and sheds washed away"},
	
	{ src: "images/drought.jpg", 
	title: 'Dr<o9>o</o9><o8>u</o8><o7>gh</o7><o6>t</o6>', 
	body: "New Zealand farms rely primarily on pasture, which relies on consisten grass growth to feed livstock, therefore lack of feed decrease milk production and meat production. But there is an intresting paradox that occurs when rain finally arrives after drought. The dead dry stalks are crushed by rain, therefore stock cannot eat the food as it's hard to reach and rotten. After this period it can take up to 3 weeks for feed to become substansable for animals to eat due to recovery and regrowth coming from the roots.  "},
	
    { src: "images/welfare.jpg", 
	title: 'W<o9>e</o9><o8>l</o8><o7>fa</o7><o6>re</o6>', 
	body: "Animal welfare describes that state of an animal based on what it experiences, where it sleeps, what it eats and its overall health. For most farmers and pet owners, the relationship between their animals are them are humane and good. New Zealand's animal welfare policy was established to improve the welfare of animals and essentially ensure that people are being good owners, if they aren't the animal is taken in to care and owner is fined. In terms of farming this means if a cow or sheep etc is ill the farmer must ensure it recieves treatment. Farmers must also ensure the animals have liveable enviroments such as warm sheds, enough food and room to move around. Because of good New Zealanders and our policies, we have strong animal welfare laws and we ensure our animals are happy"},
	
	{ src: "images/impacts.jpg", 
	title: 'I<o9>mp</o9><o8>a</o8><o7>c</o7><o6>ts</o6>', 
	body: "Farming is the backbone of New Zealands economy, it provides not only us but numerous countries with milk and produce. Althoguh industrial agricultural is New Zealands biggest climate polluter. This is effectively because the live stock produce waste (pees and poos), which consist of methane and carbon dioxide which harm our enviroments. Farmers also apply fertilizer to help grass and plants grow faster, but this can enter waterways and kill fish and bugs. So as a farmer they hold a lot of responsibility around protecting our enviroments, this is doing things like fencing riverways and planting trees that can absrob carbon dioxide.  "},
	
];

function showPage(index) {
    const item = data[index];

    if (!item) return; 

    document.getElementById("main-image").src = item.src;
    document.getElementById("title").innerHTML = item.title;
	document.getElementById("body").innerHTML = item.body;
    
	const buttons = document.querySelectorAll(".button button");
    buttons.forEach(btn => btn.classList.remove("active"));

   
    if (buttons[index]) {
        buttons[index].classList.add("active");
    }
}

window.onload = function() {
    showPage(0);
};