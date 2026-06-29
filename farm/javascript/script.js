function scrollToContent() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth'
	});
	document.getElementById('image-fish').classList.add('animate');
	document.getElementById('image-bird').classList.add('animate');
}

const data = [
    { src: "images/sheep.jpg", 
	title: 'S<o9>h</o9><o8>e</o8><o7>e</o7><o6>p</o6>', 
	subtitle: '&<o9> L</o9><o8>a</o8><o7>m</o7><o6>bs</o6>', 
	next: "Cows", nextimg: "images/cows.jpg", 
	gradient: "images/gradient-sheep.png",
	change: "index-sheep-3D.html"},
	
	
    { src: "images/cows.jpg", 
	title: 'C<o9>o</o9><o8>w</o8><o7>s</o7>', 
	subtitle: '&<o9> C</o9><o8>a</o8><o7>lv</o7><o6>es</o6>', 
	next: "Other", nextimg: "images/horses.jpg", 
	gradient: "images/gradient-cow.png",
	change: "cows.html"},
	
	    { src: "images/horses.jpg", 
	title: 'O<o9>t</o9><o8>h</o8><o7>e</o7><o6>r</o6>', 
	subtitle: 'A<o9>n</o9><o8>im</o8><o7>a</o7><o6>ls</o6>', 
	next: "Other", nextimg: "images/flooding.jpg", 
	gradient: "images/gradient-other.png",
	change: "other.html"},
	
	{ src: "images/flooding.jpg", 
	title: 'P<o9>ro</o9><o8>bl</o8><o7>ems</o7>', 
	subtitle: '', 
	next: "Sheep", nextimg: "images/sheep.jpg", 
	gradient: "images/gradient-cow.png",
	change: "guardian.html"},
];

let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % data.length;

    const item = data[currentIndex];

	document.getElementById("change").setAttribute("href", item.change);

    document.getElementById("main-image").src = item.src;
	document.getElementById("next-img").src = item.nextimg;
	document.getElementById("gradient").src = item.gradient;
    document.getElementById("main-title").innerHTML = item.title;
	document.getElementById("sub-title").innerHTML = item.subtitle;
    document.getElementById("next-text").textContent = item.next;
}
