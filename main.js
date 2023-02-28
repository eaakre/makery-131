let bigPictureBg = document.getElementById('big-pic-bg');
let bigPictureContainer = document.getElementById('big-picture');
let mainPicture = document.getElementById('main-picture');


function viewPic(selectedPic) {
    console.log(selectedPic)
    bigPictureContainer.style.display = 'flex';
    mainPicture.src = selectedPic;

}

function closePic() {
    bigPictureContainer.style.display = 'none';
}