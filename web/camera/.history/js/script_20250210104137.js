let video = document.getElementById("video");
let startButton = document.getElementById("start-camera");
let stopButton = document.getElementById("stop-camera");
let stream = null;

// カメラON
startButton.addEventListener("click", async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        alert("カメラのアクセスが許可されていません");
    }
});

// カメラOFF
stopButton.addEventListener("click", () => {
    if (stream) {
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
    }
});