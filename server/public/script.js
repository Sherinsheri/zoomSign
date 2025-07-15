const socket = io(window.location.origin);
const videoGrid = document.getElementById("video-grid");
const myPeer = new Peer(undefined, {
  host: window.location.hostname,
  port: 443, // ✅ PeerJS needs secure port for Cloudflare
  path: "/peerjs",
  secure: true, // ✅ Must be true when tunneling through HTTPS
});

const myVideo = document.createElement("video");
myVideo.muted = true;
const peers={}

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    addVideoStream(myVideo, stream);
    myPeer.on('call',call=>{
        call.answer(stream)
        const video=document.createElement('video')
        call.on('stream',userVideoStream=>{
        addVideoStream(video,userVideoStream)
    })
    })
    socket.on("user-connected", (userId) => {
  setTimeout(() => {
    connectToNewUser(userId, stream);
  }, 1000); // wait 1 second
});

    socket.on("user-disconnected", (userId) => {
      if(peers[userId]) peers[userId].close()
    });
  });

myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});
// Simulated caption for demo:
// const fakeCaption = "hello goodmorning ";
// showSignLanguageSequentially(fakeCaption);


function connectToNewUser(userId,stream) {
    const call=myPeer.call(userId,stream)
    const video=document.createElement('video')
    call.on('stream',userVideoStream=>{
        addVideoStream(video,userVideoStream)
    })
    call.on('close',()=>{
        video.remove()
    })
    peers[userId]=call
}

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}








