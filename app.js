'use strict'

var names = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "usb",
    "water-can",
    "wine-glass",
  ];


var leftImage = document.querySelector("#leftImage");
var middleImage = document.querySelector("#middleImage");
var rightImage = document.querySelector("#rightImage");
var counter = 0;

var imagesForm = document.querySelector("#imagesForm");


function Pic(name){
    this.name = name ;
    this.imagePath = `img/${name}.jpg`;
    this.votes = 0;
    this.views = 0;

    Pic.all.push(this);

}

Pic.all =[];

for (let i = 0; i< names.length; i++) {
    new Pic(names[i]);
    }

    function render() {
        
        // for (let i = 0; i < names.length; i++){
        
        
        while (leftPic === middlePic || leftPic === rightPic || rightPic === middlePic) {               
            
            var leftPic = Pic.all[randomImage(0, Pic.all.length - 1)];
            var middlePic = Pic.all[randomImage(0, Pic.all.length - 1)];
            var rightPic = Pic.all[randomImage(0, Pic.all.length - 1)];
            
        }
        
        // }    
        leftPic.views++;
        rightPic.views++;
        middlePic.views++;
                leftImage.setAttribute("src", leftPic.imagePath);
                leftImage.setAttribute("alt", leftPic.name);
                leftImage.setAttribute("title", leftPic.name);
                
                middleImage.setAttribute("src", middlePic.imagePath);
                middleImage.setAttribute("alt", middlePic.name);
                middleImage.setAttribute("title", middlePic.name);
                
            rightImage.setAttribute("src", rightPic.imagePath);
            rightImage.setAttribute("alt", rightPic.name);
            rightImage.setAttribute("title", rightPic.name);
        }
        render();

        function loveClick(e) {
            if(counter < 25){
            if (event.target.id !== "imagesForm") {
                for (let i = 0; i < Pic.all.length; i++) {
                        if (e.target.title === Pic.all[i].name) {
                          Pic.all[i].votes++;
               }
                    }
                    render();
                    counter++;
                    }
                    if (counter === 25) {
                        list();
                        imagesForm.removeEventListener("click", loveClick(e));
                    }
                }
            }
            imagesForm.addEventListener("click", loveClick);


            function list() {
                var sectionEl = document.createElement("section");
                imagesForm.appendChild(sectionEl);
                var ulEl = document.createElement("ul");
                for (var x = 0; x < Pic.all.length; x++) {
                    var liEl = document.createElement('li');
                    ulEl.appendChild(liEl)
                    sectionEl.appendChild(ulEl);
                    liEl.textContent = `${names[x]} had ${Pic.all[x].votes}votes and was shown ${Pic.all[x].views} times`;
                    console.log(names);
                    }
        }

      function randomImage(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }