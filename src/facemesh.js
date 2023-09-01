import "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-wasm";
import * as facemesh from "@tensorflow-models/facemesh";

let canvas;
let ctx;
let fmesh;
let curFaces = [];
let mediaRecorder;
let recordedChunks = [];
let overlayImage;

async function setupCamera() {
  const video = document.getElementById("video");
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: "user",
      width: { ideal: 1920 },
      height: { ideal: 1080 },
    },
  });
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

async function renderPrediction() {
  const now = performance.now();
  const facepred = await fmesh.estimateFaces(video);
  document.getElementById("perf").innerHTML =
    "FPS: " + Number(1 / (0.001 * (performance.now() - now))).toFixed(1);

  if (facepred.length > 0) {
    curFaces = facepred;
  }

  requestAnimationFrame(renderPrediction);
}

async function drawVideo() {
  ctx.drawImage(video, 0, 0);
  for (const face of curFaces) {
    if (face.faceInViewConfidence > 0.95) {
      drawFace(face);
    }
  }
  requestAnimationFrame(drawVideo);
}

async function drawFace(face) {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw video frame
  ctx.drawImage(video, 0, 0);

  // Calculate face bounding box
  const minX = Math.min(...face.scaledMesh.map((pt) => pt[0]));
  const maxX = Math.max(...face.scaledMesh.map((pt) => pt[0]));
  const minY = Math.min(...face.scaledMesh.map((pt) => pt[1]));
  const maxY = Math.max(...face.scaledMesh.map((pt) => pt[1]));

  // Draw overlay image on the face
  const faceWidth = maxX - minX;
  const faceHeight = maxY - minY;

  ctx.drawImage(overlayImage, minX, minY, faceWidth, faceHeight);
}

async function startRecording() {
  recordedChunks = [];
  const stream = canvas.captureStream();
  mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start();

  document.getElementById("start-record").disabled = true;
  document.getElementById("stop-record").disabled = false;
}

function stopRecording() {
  mediaRecorder.stop();
  document.getElementById("start-record").disabled = false;
  document.getElementById("stop-record").disabled = true;
}

function handleDataAvailable(event) {
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
  }
}

async function downloadRecording() {
  const blob = new Blob(recordedChunks, { type: "video/webm" });
  const url = URL.createObjectURL(blob);
  const a = document.getElementById("download-video");
  a.href = url;
  a.style.display = "block";
}

async function main() {
  fmesh = await facemesh.load({
    detectionConfidence: 0.9,
    maxFaces: 3,
  });

  await setupCamera();
  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;
  video.play();

  canvas = document.getElementById("facecanvas");
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  ctx = canvas.getContext("2d");

  overlayImage = new Image();
  overlayImage.src =
    "https://fastly.picsum.photos/id/718/200/200.jpg?hmac=__zLj3h3wgMNm3OM6xAOydBYFAw3V-LoIymGCluM0mY";
  overlayImage.onload = () => {
    drawVideo();
    renderPrediction();
  };

  document
    .getElementById("start-record")
    .addEventListener("click", startRecording);
  document
    .getElementById("stop-record")
    .addEventListener("click", stopRecording);
  document
    .getElementById("download-video")
    .addEventListener("click", downloadRecording);
}
main();
