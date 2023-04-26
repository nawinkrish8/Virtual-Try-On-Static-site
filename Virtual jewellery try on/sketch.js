

let ears1img, ears2img, eye1img, neck1img, neckimg, nose1img, ForeHeadimg;
let isear = false;
let isear1 = false;
let isear2 = false;
let isear3 = false;
let isear4 = false;
let isear5 = false;
let isEye1 = false;
let isEye2 = false;
let isEye3 = false;
let isEye4 = false;
let isEye5 = false;
let isNeck = false;
let isNeck1 = false;
let isNeck2 = false;
let isNeck3 = false;
let isNeck4 = false;
let isNeck5 = false;
let ishead = false;
let ishead1 = false;
let isNose1 = false;
let isNose2 = false;
let isring = false;
let iswatch = false;
let eyeDistance;
let count;
let eyetemp, eartemp, nosetemp, necktemp, headtemp, rotationright = 1, rotationleft = 1;


//Facial parts points on mediapipe face mesh
cont = [127, 234, 132, 58, 172, 150, 149, 148, 152, 377, 378, 379, 397, 288, 361, 454,
    356];
lips = [57, 40, 37, 0, 267, 270, 287, 321, 314, 17, 84, 91];
brows = [70, 63, 105, 66, 107, 336, 296, 334, 293, 300];
nose = [168, 6, 195, 4, 98, 97, 2, 326, 327];
noseleft = [126];
noseright = [281];
eyes = [275];
mouth = [78, 81, 13, 311, 308, 402, 14, 178];
ear1 = [234];
ears2 = [454];
head = [10];
dist = [52, 282];
neck = [200];
Ring = [13, 14, 15, 16];
watch = [0];
//Button Integration

let eardiv = document.getElementById("ears");
let ear2div = document.getElementById("ear2");
let ear3div = document.getElementById("ear3");
let ear4div = document.getElementById("ear4");
let ear5div = document.getElementById("ear5");
let ear6div = document.getElementById("ear6");


let foreheaddiv = document.getElementById("forehead");
let forehead1div = document.getElementById("forehead1");

let nose1div = document.getElementById("nosepin");
let nose2div = document.getElementById("nosepin1");


let eye1div = document.getElementById("coolers");
let eye2div = document.getElementById("specs");
let eye3div = document.getElementById("specs2");
let eye4div = document.getElementById("specs3");
let eye5div = document.getElementById("specs4");


let necklessdiv = document.getElementById("neck");
let neckless1div = document.getElementById("neck1");
let necklace2div = document.getElementById("neck2");
let necklace3div = document.getElementById("neck3");
let necklace4div = document.getElementById("neck4");
let necklace5div = document.getElementById("neck5");


let ringdiv = document.getElementById("ring");
let watchdiv = document.getElementById("watch");

let model = document.getElementById("model");
let avatarmodel = document.getElementById("avatarmodel");
let products = document.getElementById("products");
let price = document.getElementById("price");
let details = document.getElementById("Details");
let itemname = document.getElementById("Itemname");
//Button Functions
eardiv.onclick = function () {
    if (!isear) {
        eardiv.style.backgroundColor = "yellow";
        products.src = "assets/earring.png";
        eartemp = 1;
        price.textContent = "Rs:20000";
        itemname.textContent = "Gold Earring";
        
    } else {
        eardiv.style.backgroundColor = "black";
    }
    isear = !isear;



};
ear2div.onclick = function () {
    if (!isear1) {
        ear2div.style.backgroundColor = "yellow";
        products.src = "assets/Earrings-1.png";
        //model.src = "assets/3Dassets/Ear_Ring_Jewellery.glb";
        // avatarmodel.src = "assets/3Dassets/Jewel_Model_With_Earring.glb";
        price.textContent = "Rs:12000";
        itemname.textContent = "Gold Earring";
        eartemp = 2;

    } else {
        ear2div.style.backgroundColor = "black";
    }
    isear1 = !isear1;

};
ear3div.onclick = function () {
    if (!isear2) {
        ear3div.style.backgroundColor = "yellow";
        eartemp = 3;
        products.src = "assets/Earrings-2.png";
        price.textContent = "Rs:8000";
        itemname.textContent = "Silver Earring";
    } else {
        ear3div.style.backgroundColor = "black";
    }
    isear2 = !isear2;

};

ear4div.onclick = function () {
    if (!isear3) {
        ear4div.style.backgroundColor = "yellow";
        eartemp = 4;
        products.src = "assets/Earrings3.png";
        price.textContent = "Rs:15000";
        itemname.textContent = "Gold Jimmiky Kammal";
    } else {
        ear4div.style.backgroundColor = "black";
    }
    isear3 = !isear3;

};

ear5div.onclick = function () {
    if (!isear4) {
        ear5div.style.backgroundColor = "yellow";
        eartemp = 5;
        products.src = "assets/Earrings4.png";
        price.textContent = "Rs:17000";
        itemname.textContent = "Gold Earring";
    } else {
        ear5div.style.backgroundColor = "black";
    }
    isear4 = !isear4;

};

ear6div.onclick = function () {
    if (!isear5) {
        ear6div.style.backgroundColor = "yellow";
        eartemp = 6;
        products.src = "assets/Earrings5.png";
        price.textContent = "Rs:60000";
        itemname.textContent = "Diamond Earring";
    } else {
        ear6div.style.backgroundColor = "black";
    }
    isear5 = !isear5;

};

foreheaddiv.onclick = function () {
    if (!ishead) {
        foreheaddiv.style.backgroundColor = "yellow";
        headtemp = 1;
        products.src = "assets/nethichutti.png";
        price.textContent = "Rs:8000";
        itemname.textContent = "Nethichutti";
    } else {
        foreheaddiv.style.backgroundColor = "black";
    }
    ishead = !ishead;

};
forehead1div.onclick = function () {
    if (!ishead1) {
        forehead1div.style.backgroundColor = "yellow";
        headtemp = 2;
        products.src = "assets/nethichutti2.png";
        price.textContent = "Rs:8000";
        itemname.textContent = "Lakshmi Nethichutti";
    } else {
        forehead1div.style.backgroundColor = "black";
    }
    ishead1 = !ishead1;

};


nose1div.onclick = function () {
    if (!isNose1) {
        nose1div.style.backgroundColor = "yellow";
        nosetemp = 1;
        products.src = "assets/nosepin.png";
        price.textContent = "Rs:6000";
        itemname.textContent = "Right Mookuthi";
    } else {
        nose1div.style.backgroundColor = "black";
    }
    isNose1 = !isNose1;

};
nose2div.onclick = function () {
    if (!isNose2) {
        nose2div.style.backgroundColor = "yellow";
        nosetemp = 2;
        products.src = "assets/Nose_Piercing.png";
        price.textContent = "Rs:5000";
        itemname.textContent = "Left Mookuthi";
    } else {
        nose2div.style.backgroundColor = "black";
    }
    isNose2 = !isNose2;

};


eye1div.onclick = function () {
    if (!isEye1) {
        eye1div.style.backgroundColor = "yellow";
        products.src = "assets/coolers.png";
        price.textContent = "Rs:3000";
        itemname.textContent = "Semi frameless glass";
        eyetemp = 1;
    } else {
        eye1div.style.backgroundColor = "black";
    }
    isEye1 = !isEye1;
};
eye2div.onclick = function () {
    if (!isEye2) {
        eye2div.style.backgroundColor = "yellow";
        // model.src = "assets/3Dassets/Specs.glb";
        eyetemp = 2;
        products.src = "assets/Specs.png";
        price.textContent = "Rs:2000";
        itemname.textContent = "Full frame glass";
    } else {
        eye2div.style.backgroundColor = "black";
    }
    isEye2 = !isEye2;
};
eye3div.onclick = function () {
    if (!isEye3) {
        eye3div.style.backgroundColor = "yellow";
        eyetemp = 3;
        products.src = "assets/Specs_2.png";
        price.textContent = "Rs:0";
        itemname.textContent = "Dummy";
    } else {
        eye3div.style.backgroundColor = "black";
    }
    isEye3 = !isEye3;
};
eye4div.onclick = function () {
    if (!isEye4) {
        eye4div.style.backgroundColor = "yellow";
        eyetemp = 4;
        products.src = "assets/Coolers_1.png";
        price.textContent = "Rs:5000";
        itemname.textContent = "Cool Avator";
    } else {
        eye4div.style.backgroundColor = "black";
    }
    isEye4 = !isEye4;
};
eye5div.onclick = function () {
    if (!isEye5) {
        eye5div.style.backgroundColor = "yellow";
        eyetemp = 5;
        products.src = "assets/Specs_2.png";
        price.textContent = "Rs:1500";
        itemname.textContent = "Night Vision Glass";
    } else {
        eye5div.style.backgroundColor = "black";
    }
    isEye5 = !isEye5;
};
necklessdiv.onclick = function () {
    if (!isNeck) {
        necklessdiv.style.backgroundColor = "yellow";
        necktemp = 1;
        products.src = "assets/necklace.png";
        price.textContent = "Rs:150000";
        itemname.textContent = "Full Necklace";

    } else {
        necklessdiv.style.backgroundColor = "black";
    }
    isNeck = !isNeck;

};
neckless1div.onclick = function () {
    if (!isNeck1) {
        neckless1div.style.backgroundColor = "yellow";
        necktemp = 2;
        products.src = "assets/chain.png";
        price.textContent = "Rs:2000";
        itemname.textContent = "Thug Chain";
    } else {
        neckless1div.style.backgroundColor = "black";
    }
    isNeck1 = !isNeck1;
};
necklace2div.onclick = function () {
    if (!isNeck2) {
        necklace2div.style.backgroundColor = "yellow";
        necktemp = 3;
        products.src = "assets/necklace1.png";
        price.textContent = "Rs:250000";
        itemname.textContent = "Diamond Necklace";
    } else {
        necklace2div.style.backgroundColor = "black";
    }
    isNeck2 = !isNeck2;
};
necklace3div.onclick = function () {
    if (!isNeck3) {
        necklace3div.style.backgroundColor = "yellow";
        necktemp = 4;
        products.src = "assets/necklace2.png";
        price.textContent = "Rs:300000";
        itemname.textContent = "Traditional Necklace";
        //model.src = "assets/3Dassets/Jewellery_Necklace.glb";
        //avatarmodel.src = "assets/3Dassets/Jewel_Model_With_Necklace.glb";
    } else {
        necklace3div.style.backgroundColor = "black";
    }
    isNeck3 = !isNeck3;

};
necklace4div.onclick = function () {
    if (!isNeck4) {
        necklace4div.style.backgroundColor = "yellow";
        count = 3;
        necktemp = 5;
        products.src = "assets/necklace3.png";
        price.textContent = "Rs:280000";
        itemname.textContent = "Attigai Necklace";
    } else {
        necklace4div.style.backgroundColor = "black";
    }
    isNeck4 = !isNeck4;

};
necklace5div.onclick = function () {
    if (!isNeck5) {
        necklace5div.style.backgroundColor = "yellow";
        necktemp = 6;
        products.src = "assets/necklace4.png";
        price.textContent = "Rs:200000";
        itemname.textContent = "Classic Necklace";
    } else {
        necklace5div.style.backgroundColor = "black";
    }
    isNeck5 = !isNeck5;
};


ringdiv.onclick = function () {
    if (!isring) {
        ringdiv.style.backgroundColor = "yellow";
    }
    else {
        ringdiv.style.backgroundColor = "black";
    }
    isring = !isring;
}

watchdiv.onclick = function () {
    if (!iswatch) {
        watchdiv.style.backgroundColor = "yellow";
    }
    else {
        watchdiv.style.backgroundColor = "black";
    }
    iswatch = !iswatch;
}

//p5.js used to load images
let sketch = function (p) {
    let canvas;
    //Images are stored in variable
    p.preload = function () {

        ears1img = p.loadImage("assets/eraTOP.png");
        ears2img = p.loadImage("assets/Earrings-1.png");
        ears3img = p.loadImage("assets/Earrings-2.png");
        ears4img = p.loadImage("assets/Earrings3.png");
        ears5img = p.loadImage("assets/Earrings4.png");
        ears6img = p.loadImage("assets/Earrings5.png");


        eye1img = p.loadImage("assets/coolers.png");
        eye2img = p.loadImage("assets/specs.png");
        eye3img = p.loadImage("assets/specs.png");
        eye4img = p.loadImage("assets/Coolers_1.png");
        eye5img = p.loadImage("assets/Specs_2.png");


        neckimg = p.loadImage("assets/necklace.png");
        neck1img = p.loadImage("assets/chain.png");
        neck2img = p.loadImage("assets/necklace1.png");
        neck3img = p.loadImage("assets/necklace2.png");
        neck4img = p.loadImage("assets/necklace3.png");
        neck5img = p.loadImage("assets/Necklace4.png");


        nose1img = p.loadImage("assets/nosepin.png");
        nose2img = p.loadImage("assets/Nose_Piercing.png");


        ForeHeadimg = p.loadImage("assets/nethichutti.png");
        ForeHead1img = p.loadImage("assets/nethichutti2.png");

        ringimg = p.loadImage("assets/nethichutti.png");
        watchimg = p.loadImage("assets/necklace4.png");

    };

    //Canvas Created infront of webcam video output and PNG images placed on the canvas
    p.setup = function () {
        canvas = p.createCanvas(880, 680);
        canvas.id("canvas");
    };

    p.draw = function () {
        p.clear();

        if (detections == undefined) {
            alert("please wait");
        }

        if (handdetections != undefined && iswatch) {
            if (handdetections.multiHandLandmarks != undefined &&
                handdetections.multiHandLandmarks.length >= 1
            ) {
                p.detectwatch();
            }
        }

        if (handdetections != undefined && isring) {
            if (
                handdetections.multiHandLandmarks != undefined &&
                handdetections.multiHandLandmarks.length >= 1
            ) {
                p.detectring();
            }
        }

        if (detections != undefined && isear) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {

                p.detectears1();
                

            }

        }

        if (detections != undefined && isear1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectears1();
               
            }
        }
        if (detections != undefined && isear2) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectears1();


            }
        }
        if (detections != undefined && isear3) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectears1();

            }
        }
        if (detections != undefined && isear4) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectears1();

            }
        }
        if (detections != undefined && isear5) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectears1();

            }
        }



        if (detections != undefined && isEye1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectEyes2();

            }
        } if (detections != undefined && isEye2) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectEyes2();

            }
        } if (detections != undefined && isEye3) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectEyes2();

            }
        } if (detections != undefined && isEye4) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectEyes2();

            }
        } if (detections != undefined && isEye5) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectEyes2();

            }
        }


        if (detections != undefined && isNeck) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck();
            }
        }
        if (detections != undefined && isNeck1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck();
            }
        }
        if (detections != undefined && isNeck2) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck();
            }
        }
        if (detections != undefined && isNeck3)
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck();
            }
        if (detections != undefined && isNeck4)
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck();
            }
        if (detections != undefined && isNeck5)
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck();
            }

        if (detections != undefined && ishead) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectHead();
            }
        }
        if (detections != undefined && ishead1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectHead();
            }
        }

        if (detections != undefined && isNose1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNose1();
            }
        }
        if (detections != undefined && isNose2) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNose2();
            }
        }


    };
    //Calculating the distance between the eyes to get the distance between the user and camera,Then it is used to resize the image according to that distance
    function distance() {
        x1 = detections.multiFaceLandmarks[0][282].x * p.width;
        y1 = detections.multiFaceLandmarks[0][282].y * p.height;
        x2 = detections.multiFaceLandmarks[0][52].x * p.width;
        y2 = detections.multiFaceLandmarks[0][52].y * p.height;
        eyeDistance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }

    function rotation() {
        z1 = detections.multiFaceLandmarks[0][234].z * p.height;
        z2 = detections.multiFaceLandmarks[0][454].z * p.height;
        
        if ((z1 - z2 > 40 || z2 - z1 > 40) && (z1 > z2)) {
            rotationright = 2;
        }
        else {
            rotationright = 1;
        }
        if ((z1 - z2 > 40 || z2 - z1 > 40) && (z1 < z2)) {
            rotationleft = 2;
        }
        else {
            rotationleft = 1;
        }
        
    }

    p.detectwatch = function () {
        let x, y;
        for (let i = 0; i < watch.length; i++) {
            for (let j = 0; j < handdetections.multiHandLandmarks[0].length; j++) {
                x = handdetections.multiHandLandmarks[0][watch[i]].x * p.width;
                y = handdetections.multiHandLandmarks[0][watch[i]].y * p.height;
            }
        }
        p.image(watchimg, x-50, y);
        watchimg.resize(100, 50);
    }

    p.detectring = function () {
        let x, y;

        for (let i = 0; i < Ring.length; i++) {
            for (let j = 0; j < handdetections.multiHandLandmarks[0].length; j++) {
                x = handdetections.multiHandLandmarks[0][Ring[i]].x * p.width;
                y = handdetections.multiHandLandmarks[0][Ring[i]].y * p.height;
            }
        }
        p.image(ringimg, x-100, y);
        ringimg.resize(200, 200);
        
    }
    //Functions that dectects points and place PNG images
    
    p.detectears1 = function () {
        let x, y;

        for (let i = 0; i < ear1.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][ear1[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][ear1[i]].y * p.height;

            }

        }
        rotation();
        if (rotationright == 1) {
            if (eartemp == 1) {
                p.image(ears1img, x - 50, y + 20);
                ears1img.resize(80, 80);
            }
            if (eartemp == 2) {
                p.image(ears2img, x - 50, y + 20);
                ears2img.resize(80, 80);
            }
            if (eartemp == 3) {
                p.image(ears3img, x - 50, y + 20);
                ears3img.resize(80, 80);
            }
            if (eartemp == 4) {
                p.image(ears4img, x - 30, y + 30);
                ears4img.resize(30, 40);
            }
            if (eartemp == 5) {
                p.image(ears5img, x - 30, y + 30);
                ears5img.resize(40, 60);
            }
            if (eartemp == 6) {
                p.image(ears6img, x - 10, y + 20);
                ears6img.resize(20, 20);
            }
        }

        let d, e;

        for (let i = 0; i < ears2.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                d = detections.multiFaceLandmarks[0][ears2[i]].x * p.width;
                e = detections.multiFaceLandmarks[0][ears2[i]].y * p.height;

            }

        }
        if (rotationleft == 1) { 
        if (eartemp == 1 ) {
            p.image(ears1img, d - 50, e + 20);
            ears1img.resize(80, 80);
        }
        if (eartemp == 2 ) {
            p.image(ears2img, d - 50, e + 20);
            ears2img.resize(80, 80);
        }
        if (eartemp == 3  ) {
            p.image(ears3img, d - 50, e + 20);
            ears3img.resize(80, 80);
        }
        if (eartemp == 4  ) {
            p.image(ears4img, d - 10, e + 30);
            ears4img.resize(30, 40);
        }
        if (eartemp == 5 ) {
            p.image(ears5img, d - 10, e + 30);
            ears5img.resize(40, 60);
        }
        if (eartemp == 6 ) {
            p.image(ears6img, d - 10, e + 20);
            ears6img.resize(20, 20);
        }
    }
    };


    p.detectEyes2 = function () {
        let x, y;

        for (let i = 0; i < eyes.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][eyes[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][eyes[i]].y * p.height;

            }
            if (eyetemp == 1) {
                distance();
                eye1img.width = eyeDistance * 1.8;
                eye1img.height = eyeDistance * 1.8;
                p.image(eye1img, x - eyeDistance, y - eyeDistance);
            }
            if (eyetemp == 2) {
                distance();
                eye2img.width = eyeDistance * 1.8;
                eye2img.height = eyeDistance * 1.8;
                p.image(eye2img, x - eyeDistance / 1.03, y - eyeDistance / 1.15);
            } if (eyetemp == 3) {
                distance();
                eye3img.width = eyeDistance * 1.8;
                eye3img.height = eyeDistance * 1.8;
                p.image(eye3img, x - eyeDistance, y - eyeDistance);
            } if (eyetemp == 4) {
                distance();
                eye4img.width = eyeDistance * 1.8;
                eye4img.height = eyeDistance * 1.8;
                p.image(eye4img, x - eyeDistance, y - eyeDistance);
            } if (eyetemp == 5) {
                distance();
                eye5img.width = eyeDistance * 1.8;
                eye5img.height = eyeDistance * 1.8;
                p.image(eye5img, x - eyeDistance / 1.05, y - eyeDistance / 0.75);
            }
        }




    };


    p.detectNeck = function () {

        let x, y;


        for (let i = 0; i < cont.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][cont[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][cont[i]].y * p.height;



            }
            if (necktemp == 1) {
                distance();
                neckimg.width = eyeDistance * 3.5;
                neckimg.height = eyeDistance * 3.5;
            }
            if (necktemp == 2) {
                distance();
                neck1img.width = eyeDistance * 2.5;
                neck1img.height = eyeDistance * 2.5;
            }
            if (necktemp == 3) {
                distance();
                neck2img.width = eyeDistance * 2.5;
                neck2img.height = eyeDistance * 2.5;
            }
            if (necktemp == 4) {
                distance();
                neck3img.width = eyeDistance * 2.5;
                neck3img.height = eyeDistance * 2.5;
            }
            if (necktemp == 5) {
                distance();
                neck4img.width = eyeDistance * 3.2;
                neck4img.height = eyeDistance * 2.5;
            }
            if (necktemp == 6) {
                distance();
                neck5img.width = eyeDistance * 2;
                neck5img.height = eyeDistance * 2;
            }

        }
        if (necktemp == 1) {
            p.image(neckimg, x - eyeDistance * 2.5, y + eyeDistance * 1.2);
        }
        if (necktemp == 2) {
            p.image(neck1img, x - eyeDistance * 2, y + eyeDistance * 1.2);
        }
        if (necktemp == 3) {
            p.image(neck2img, x - eyeDistance * 2, y + eyeDistance * 1.2);
        }
        if (necktemp == 4) {
            p.image(neck3img, x - eyeDistance * 2, y + eyeDistance * 1.2);
        }
        if (necktemp == 5) {
            p.image(neck4img, x - eyeDistance * 2.5, y + eyeDistance * 1.2);
        }
        if (necktemp == 6) {
            p.image(neck5img, x - eyeDistance * 1.85, y + eyeDistance * 1.2);
        }
    };



    p.detectHead = function () {
        let x, y;

        for (let i = 0; i < head.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][head[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][head[i]].y * p.height;

            }
        }
        if (headtemp == 1) {
            p.image(ForeHeadimg, x - 150, y - 100);
            ForeHeadimg.resize(300, 150);
        }
        if (headtemp == 2) {
            p.image(ForeHead1img, x - 40, y - 150);
            ForeHead1img.resize(80, 150);
        }
    };




    p.detectNose1 = function () {
        let x, y;

        for (let i = 0; i < noseleft.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][noseleft[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][noseleft[i]].y * p.height;

            }
        }

        p.image(nose1img, x - 5, y - 10);
        distance();
        nose1img.width = eyeDistance / 5;
        nose1img.height = eyeDistance / 5;
    };
    p.detectNose2 = function () {
        let x, y;

        for (let i = 0; i < noseright.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][noseright[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][noseright[i]].y * p.height;

            }
        }

        p.image(nose2img, x - 5, y - 10);
        distance();
        nose2img.width = eyeDistance / 5;
        nose2img.height = eyeDistance / 5;
    };





};

let myp5 = new p5(sketch);
