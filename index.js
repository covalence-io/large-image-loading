(function () {
    let bImg = document.querySelector('img');

    if (!bImg) {
        console.log('Oops, no image found');
        return;
    }

    let img = new Image();

    img.onload = function () {
        bImg.src = img.src;
    };

    img.onerror = function () {
        alert('Network issues :(');
    };

    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LARGE_elevation.jpg/2560px-LARGE_elevation.jpg';
})();