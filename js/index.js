// Your code goes here


// Header - 2
const header = document.querySelector('header');

header.addEventListener('mouseover', () => {
    header.style.background = '#17A2B8';
    header.style.fontWeight = 'bold';
    header.style.color = 'white';
});

header.addEventListener('mouseout', () => {
    header.style.background = 'white';
    header.style.fontWeight = 'normal';
    header.style.color = 'black';
});

// Fun bus Image - 2
const funbus = document.querySelector('.intro img')

funbus.addEventListener('mouseenter', () => {
    funbus.style.transform = 'scale(.5)';
})

funbus.addEventListener('mouseleave', () => {
    funbus.style.transform = 'scale(1)';
})



// Images - 2
const images = document.querySelectorAll('.img-content img')

images.forEach(images => {
    images.addEventListener('mousedown', () => {
        images.style.transform = 'scale(1.5)';
    });
})

images.forEach(images => {
    images.addEventListener('mouseup', () => {
        images.style.transform = 'scale(1)';
    });
})


// Button - 3
const button = document.querySelectorAll('.btn');

button.forEach(button => {
    button.addEventListener('click', () => {
        button.style.background = 'black';
        button.style.color = 'white';
    });
})

button.forEach(button => {
    button.addEventListener('auxclick', () => {
        button.style.background = 'white';
        button.style.color = '#17A2B8';
    });
})

button.forEach(button => {
    button.addEventListener('dblclick', () => {
        button.style.background = 'yellow';
        button.style.color = 'black';
    });
})


// Bottom Image - 2 (with GSAP) not unique
const bottomimage = document.querySelector('.content-destination img');

bottomimage.addEventListener('mousedown', () => {
    bottomimage.style.transform = 'rotate(0.5turn)';
    gsap.to('img', {duration: 5, rotationY:360});
})

bottomimage.addEventListener('mouseup', () => {
    bottomimage.style.transform = 'rotate(0turn)';
})  


// Paragraph - 2 not unique
const paragraph = document.querySelectorAll('p');

paragraph.forEach(paragraph => {
    paragraph.addEventListener('mouseover', () => {
        paragraph.style.transform = 'scale(1.5)';
        paragraph.style.fontWeight = 'bold',
        paragraph.style.color = 'white';
        paragraph.style.background = '#17A2B8';
    });
})

paragraph.forEach(paragraph => {
    paragraph.addEventListener('mouseout', () => {
        paragraph.style.transform = 'scale(1)';
        paragraph.style.fontWeight = 'normal',
        paragraph.style.color = 'black';
        paragraph.style.background = 'white';
    });
})



