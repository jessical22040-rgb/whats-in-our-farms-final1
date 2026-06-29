const data = [
    { image1: 'images/sheep1.jpg', 
	image2: 'images/sheep2.jpeg', 
	image3: 'images/sheep3.jpg', 
	title: 'Clun Forest Lamb', 
	subtitle: 'This sheep breed are known for being hardy and orginate from Clun Forest in Shropshire, England', 
	subtitle2: ' A fun fact is they often have twins! ' },
	
	
    { image1: 'images/sheep4.jpg', 
	image2: 'images/sheep1.jpg', 
	image3: 'images/sheep2.jpeg', 
	title: 'Swaledale', 
	subtitle: 'This sheep orginates from the Yorkshire valley of Swaledale in England.',
	subtitle2: 'Swaledale sheep are special due to their ability to live in windy areas ' },
	
	{ image1: 'images/image5.webp', 
	image2: 'images/sheep4.jpg', 
	image3: 'images/sheep1.jpg', 
	title: 'Romney', 
	subtitle: 'This sheep is the first type of sheep to come from england, and its known for its long wool.',
	subtitle2: 'A fun fact is that these sheep are happier in groups! ' },
	
	{ image1: 'images/sheep6.webp', 
	image2: 'images/image5.webp', 
	image3: 'images/sheep4.jpg', 
	title: 'Corriedale', 
	subtitle: 'These sheep were created by mixing two other breeds, now this breed wins awards!',
	subtitle2: ' The creater of this breed is from the Sotuth Island, and named the sheep after his farm' },
	
	{ image1: 'images/sheep3.jpg', 
	image2: 'images/sheep6.webp', 
	image3: 'images/image5.webp', 
	title: 'Coopworth', 
	subtitle: 'Scientists in Lincoln University developed this breed to help the romney ewes (females)',
	subtitle2: 'have more lambs, and now are the 2nd most common sheep in New Zealand ' },
	
	{ image1: 'images/sheep2.jpeg', 
	image2: 'images/sheep3.jpg', 
	image3: 'images/sheep6.webp', 
	title: 'Herdwick', 
	subtitle: 'Herdwick sheep do not have many lambs or soft wool but they are strong and tough',
	subtitle2: 'They have even been known to survive under deep snow for 3 days by eating their own wool! ' },
];



let currentIndex = 0;

function updateDisplay(index) {
    const item = data[index];
    

    const leftImg = document.getElementById('left-image');
    const midImg = document.getElementById('middle-image');
    const rightImg = document.getElementById('right-image');
    const title = document.getElementById('main-title');
    const sub = document.getElementById('sub-title');
	const sub2 = document.getElementById('sub-title2');

    if (leftImg) leftImg.src = item.image1;
    if (midImg) midImg.src = item.image2;
    if (rightImg) rightImg.src = item.image3;
    if (title) title.textContent = item.title;
    if (sub) sub.textContent = item.subtitle;
	if (sub2) sub2.textContent = item.subtitle2;
}


function previousImage() {
    currentIndex = (currentIndex + 1) % data.length;
    updateDisplay(currentIndex);
}
function nextImage() {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateDisplay(currentIndex);
}




window.onload = () => {
    updateDisplay(currentIndex);
};
