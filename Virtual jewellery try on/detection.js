let detections = {};
let handdetections = {};
let w = 880, h = 680;
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let c = 1, r = 2;
//webcam Output
var video = document.getElementById('video1');
video.setAttribute('playsinline', '');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.style.width = '880px';
video.style.height = '680px';

//Front camera access
var facingMode = "user";
var constraints = {
    audio: false,
    video: {
        facingMode: facingMode
    }
};

navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    video.srcObject = stream;
});

function gotFaces(results) {
    detections = results;

}
function gothands(results) {
    handdetections = results;
}
//mediapipe facemesh cdn Integration(Face Tracking API)
const faceMesh = new FaceMesh({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    },
});

faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
});

const hands = new Hands({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
});
hands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
hands.onResults(gothands);
faceMesh.onResults(gotFaces);

let compare = document.getElementById("compare");
compare.addEventListener('click', split);
function split() {
    if (c == 1) {
        video.style.width = '440px';
        video.style.height = '660px';
        video.style.marginRight = '100px';

        c++;
    }
    else {
        video.style.width = '880px';
        video.style.height = '660px';
        c = 1;
    }


}

//User Image and Video uploading Button
let photobtn = document.getElementById("photo-btn");
let btn = document.getElementById("btn");
let img = document.getElementById("img");
let video2 = document.getElementById("video2");
video2.setAttribute('playsinline', '');
video2.setAttribute('autoplay', '');
video2.setAttribute('muted', '');
video2.setAttribute('loop', '')
video2.style.width = '880px';
video2.style.height = '680px';
btn.style.display = "none";

const video5 = document.getElementById('video1');
navigator.mediaDevices.getUserMedia({
    video: { mediaSource: 'screen' },
    audio: false
})
    .then(stream => {
        // Set the video element's source to the screen sharing stream
        video5.srcObject = stream;
        console.log("photo");
    })
    .catch(err => {
        console.log('Error accessing screen:', err);
    });
const snapshotButton = document.getElementById('snapshot-button');
snapshotButton.addEventListener('click', () => {
    // Set the canvas dimensions to match the video element
    canvas.width = video5.videoWidth;
    canvas.height = video5.videoHeight;

    // Draw the current frame from the video stream onto the canvas
    ctx.drawImage(video5, 0, 0, canvas.width, canvas.height);

    // Extract the image data from the canvas and create a data URL

    document.getElementById('outimage').src = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'snapshot.png';
    link.href = canvas.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});
photobtn.addEventListener('click', photo);
function photo() {
    if (video.style.display == "block") {
        video.style.display = "none";
        btn.style.display = "block";
    }

    else {
        video.style.display = "block";
        btn.style.display = "none";
    }


}
let picture;

function loadMedia(event) {
    const file = event.target.files[0];
    const mediaType = file.type.split('/')[0];

    if (mediaType === 'image') {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imgPreview = document.getElementById('media-preview');
            imgPreview.src = e.target.result;
            picture = e.target.result;

            video2.style.display = "none";
        };
        reader.readAsDataURL(file);
    } else if (mediaType === 'video') {
        const URL = window.URL || window.webkitURL;
        const videoURL = URL.createObjectURL(file);

        video2.src = videoURL;
        video2.style.display = 'block';
        video.style.display = 'none';
        picture = null;
        r = 1;
    }

}
if (r == 2) {
    const camera = new Camera(video, {
        onFrame: async () => {
            await faceMesh.send({ image: video });
            await hands.send({ image: video });
        },
        width: 880,
        height: 680,
    });
    camera.start();
}
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 5000);

    function checkReady() {
        if (document.getElementsByTagName("body")[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? "block" : "none";
}

onReady(function () {
    show("page", true);
    show("loading", false);
});