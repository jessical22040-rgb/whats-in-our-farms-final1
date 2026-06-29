const data = [
    { image1: 'images/cow1.jpg', 
	image2: 'images/cow2.webp', 
	image3: 'images/cow3.jpg', 
	title: 'Friesian', 
	subtitle: 'These cows came from the Netherlands and Northen Germany', 
	subtitle2: 'These cows are famous for producing more milk than any other cow!' },
	
	
    { image1: 'images/cow4.jpg', 
	image2: 'images/cow1.jpg', 
	image3: 'images/cow2.webp', 
	title: 'Jersey', 
	subtitle: 'This small cow breed comes from the island of Jersey in Channel Islands',
	subtitle2: 'The produce more than 10 times their own body weight in milkeach time they calve!' },
	
	{ image1: 'images/cow5.jpg', 
	image2: 'images/cow4.jpg', 
	image3: 'images/cow1.jpg', 
	title: 'Angus', 
	subtitle: 'These cows orginally came from Scotland, specfically from areas like Angus',
	subtitle2: 'A fun fact is that these cows dont grow horns!' },
	
	{ image1: 'images/cow6.jpg', 
	image2: 'images/cow5.jpg', 
	image3: 'images/cow4.jpg', 
	title: 'Hereford', 
	subtitle: 'Long ago Herefords came in many colours like yellow, gray or light brown',
	subtitle2: 'There are over 5 million purebred Herefords in over 50 countries' },
	
	{ image1: 'images/cow3.jpg', 
	image2: 'images/cow6.jpg', 
	image3: 'images/cow5.jpg', 
	title: 'Charolais', 
	subtitle: 'Charolais (pronounced Shar-oh-Lay) is a famous cow from France',
	subtitle2: 'Their coat is unsually white and they have a pink nose! Farmers love them becuase they are gentle and kind!' },
	
	{ image1: 'images/cow2.webp', 
	image2: 'images/cow3.jpg', 
	image3: 'images/cow6.jpg', 
	title: 'Ayrshire', 
	subtitle: 'These cows are touhg, friendly dairy cows from Scotland and are famous for their beautiful coat',
	subtitle2: ' Farmers love these cows because they live a lng time and have easy births' },
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
