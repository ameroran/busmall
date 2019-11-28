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
// var limit = 25;

var imagesForm = document.querySelector("#imagesForm");


function Pic(name) {
    this.name = name;
    this.imagePath = `img/${name}.jpg`;
    this.votes = 0;
    this.views = 0;

    Pic.all.push(this);

}

Pic.all = [];

var secondRound = [];
for (let i = 0; i < names.length; i++) {
    new Pic(names[i]);
}


function render() {
    // console.log('before while' , secondRound);

    var leftPic = Pic.all[randomImage(0, Pic.all.length - 1)];
    var middlePic = Pic.all[randomImage(0, Pic.all.length - 1)];
    var rightPic = Pic.all[randomImage(0, Pic.all.length - 1)];


    while (secondRound.includes(leftPic) || secondRound.includes(middlePic) || secondRound.includes(rightPic) || leftPic === middlePic || leftPic === rightPic || rightPic === middlePic) {
        
            leftPic = Pic.all[randomImage(0, Pic.all.length - 1)];
            middlePic = Pic.all[randomImage(0, Pic.all.length - 1)];
            rightPic = Pic.all[randomImage(0, Pic.all.length - 1)];
        }
        secondRound.shift();
        secondRound.shift();
        secondRound.shift();
        secondRound.push(leftPic);
        secondRound.push(middlePic);
        secondRound.push(rightPic);
        // console.log('first while', secondRound);    
        
        // Collaborate with DANTEMESSY
        




        // while (secondRound.includes(middlePic)) {

        //     middlePic = Pic.all[randomImage(0, Pic.all.length - 1)];
        // }
        // secondRound.push(middlePic);
        // secondRound.shift();



        // while (secondRound.includes(rightPic)) {
        //     rightPic = Pic.all[randomImage(0, Pic.all.length - 1)];
        // }
        // secondRound.push(rightPic);
        // secondRound.shift();


        //  (secondRound.includes(middlePic)) {
        //     middlePic = Pic.all[randomImage(0, Pic.all.length - 1)];

        //     secondRound.shift();
        // }
        // secondRound.push(middlePic);


        //         if (secondRound.includes(middlePic)) {
        //             rightPic = Pic.all[randomImage(0, Pic.all.length - 1)];

        //             secondRound.shift();
        //         }
        //         secondRound.push(rightPic);





    // }

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
    if (counter < 25) {
        if (event.target.id !== "imagesForm") {
            for (let i = 0; i < Pic.all.length; i++) {
                if (e.target.title === Pic.all[i].name) {
                    Pic.all[i].votes++;
                }
            }
            render();
            counter++;
            console.log(counter);
        } if (counter === 25) {

            imagesForm.removeEventListener("click", loveClick(e));
            list();
        }
    }
}
imagesForm.addEventListener("click", loveClick);


var vo = [];
var vi = [];

function list() {
    var sectionEl = document.createElement("section");
    imagesForm.appendChild(sectionEl);
    var ulEl = document.createElement("ul");
    for (var x = 0; x < Pic.all.length; x++) {
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl)
        sectionEl.appendChild(ulEl);
        liEl.textContent = `${names[x]} had ${Pic.all[x].votes}votes and was shown ${Pic.all[x].views} times`;

        vo.push(Pic.all[x].votes);
        vi.push(Pic.all[x].views);
    }




    var ctx = document.getElementById("myChart").getContext("2d");

    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: names,

            datasets: [{
                label: "# of votes",
                data: vo,


                backgroundColor: "black",
                borderColor: "black",
                borderWidth: 1


            },
            {
                label: "# of views",
                data: vi,


                backgroundColor: "grey",
                borderColor: "grey",
                borderWidth: 1

            }]


        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}




function randomImage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


