let count = 0;

function inc() {
    count += 1;

    switch (count) {
        case 1:
            document.getElementById('message').textContent = 'I said not to click!!!';
            break;
        case 2:
            document.getElementById('message').textContent = 'Please donot click';
            break;
        case 3:
            document.getElementById('message').textContent = 'I\'m beggin you';
            break;

        case 4:
            document.getElementById('message').textContent = 'please no more!!!';
            break;

        case 5:
            document.getElementById('message').textContent = 'Please you can\'t do this!!';
            break;

        case 6:
            document.getElementById('message').textContent = 'It will reveal my secret!';
            break;

        case 7:
            document.getElementById('message').textContent = 'I\'m telling you don\'t!';
            break;
        case 8:
            document.getElementById('message').textContent = 'please noo!!!!!';
            break;
    }


    let heart = document.getElementById('heart');

    // Change the width and height of the heart element
    // heart.style.width = '150px';
    // heart.style.height = '150px';

    heart.style.width = String(150 + count * 25) + 'px';
    heart.style.height = String(150 + count * 25) + 'px';



    // Since you can't directly access pseudo-elements,
    // you need to adjust styles of the main element 
    // which will indirectly affect its pseudo-elements

    // Set custom properties to indirectly affect pseudo-elements
    heart.style.setProperty('--before-height', String(150 + count * 25) + 'px');
    heart.style.setProperty('--before-width', String(150 + count * 25) + 'px');
    heart.style.setProperty('--after-height', String(150 + count * 25) + 'px');
    heart.style.setProperty('--after-width', String(150 + count * 25) + 'px');

    if (count === 9) {
        document.getElementById('body').style.backgroundColor = 'red';
        document.getElementById('cr').textContent = "I want us to be together. Will you be with me Himaa?";
    }

}