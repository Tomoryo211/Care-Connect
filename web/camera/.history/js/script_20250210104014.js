let localStream;
let remoteStream;
let peerConnection;
const servers = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};

// ビデオ要素
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

// 通話開始ボタン
document.getElementById("startCall").addEventListener("click", async () => {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;

    peerConnection = new RTCPeerConnection(servers);
    remoteStream = new MediaStream();
    remoteVideo.srcObject = remoteStream;

    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    peerConnection.ontrack = (event) => {
        event.streams[0].getTracks().forEach(track => remoteStream.addTrack(track));
    };

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    console.log("オファー送信:", offer);
});

// 通話終了ボタン
document.getElementById("endCall").addEventListener("click", () => {
    if (peerConnection) {
        peerConnection.close();
    }
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
});
