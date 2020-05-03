let catImage = document.querySelector("#catImage");
let caption = document.querySelector("#caption");
let newElement = document.createElement ('p');

catImage.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");
caption.innerText = "CekCek";
newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';
document.body.appendChild(newElement);

catImage.addEventListener('click',function(event){
    document.querySelector('#count').innerText++;
});
