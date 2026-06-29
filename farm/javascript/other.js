const data = [
    { image1: 'images/other1.jpg', 
	image2: 'images/llama2.jpg', 
	image3: 'images/donkey.jpg', 
	title: 'Llama', 
	subtitle: 'This mammmal belongs to the camel family, but unlike camels llamas do not have humps', 
	subtitle2: 'Fun fact is you can tell how annoyed a llama is by what is in its spit!' },
	
	
    { image1: 'images/other4.jpg', 
	image2: 'images/other1.jpg', 
	image3: 'images/llama2.jpg', 
	title: 'Horse', 
	subtitle: 'A male horse is a stallion, a female horse is a mare and a young horse is called a foal',
	subtitle2: 'Ponies are similar to horses but the main difference is usually their height' },
	
	{ image1: 'images/other5.jpeg', 
	image2: 'images/other4.jpg', 
	image3: 'images/other1.jpg', 
	title: 'Chicken', 
	subtitle: 'A male chicken is called a rooster, a female chicken is called a hen and a baby chicken is called a chick',
	subtitle2: 'A fun fact is there are 24 billion chickens on Earth!' },
	
	{ image1: 'images/other6.jpg', 
	image2: 'images/other5.jpeg', 
	image3: 'images/other4.jpg', 
	title: 'Pig', 
	subtitle: 'Pigs use their snout to dig into the soil to find food because it is very strong and has a tough tip',
	subtitle2: 'Pigs are very intelligent, they can learn to dance and even play video games!' },
	
	{ image1: 'images/donkey.jpg', 
	image2: 'images/other6.jpg', 
	image3: 'images/other5.jpeg', 
	title: 'Goat', 
	subtitle: 'A male goat is called a buck, a female is called a doe and young goats are called kids',
	subtitle2: 'Did you know both male and female goats have beard? ' },
	
	{ image1: 'images/llama2.jpg', 
	image2: 'images/donkey.jpg', 
	image3: 'images/other6.jpg', 
	title: 'Donkey', 
	subtitle: 'Donkeys are very similar to horses, and they can even have babies with horses and its called a mule',
	subtitle2: 'A donkey can be very stubborn as it has a strong sense of self-worth ' },
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
