const socket = io("/");
const videoGrid = document.getElementById("video-grid");
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
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
// function showSignLanguageSequentially(captionText) {
//   const box = document.getElementById("sign-language-box");
//   box.innerHTML = ""; // clear previous

//   const words = captionText.toLowerCase().split(" ");
//   const img = document.createElement("img");
//   img.style.width = "300px";
//   box.appendChild(img);

//   let index = 0;

//   function showNextGif() {
//     if (index >= words.length) return;

//     const word = words[index];
//     const gifPath = `/gifs/${word}.gif`;

//     img.src = gifPath;
//     img.alt = word;

//     img.onerror = () => {
//       index++;
//       showNextGif(); // skip missing gif
//     };

//     index++;

//     // Show each gif for 2.5 seconds (adjust if needed)
//     setTimeout(showNextGif, 2500);
//   }

//   showNextGif();
// }








