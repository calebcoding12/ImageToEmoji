var prediction = "";
Webcam.set({
    width: 350, 
    heigth: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '">';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3VMNZHe_k/model.json', modelloaded);

function modelloaded(){
    console.log("modelloaded");
}

function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "The prediction is" + prediction;
  var Utterthis = new SpeechSynthesisUtterance(speak_data_1);
  synth.speak(Utterthis);
}
function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      prediction = results[0].label;
      speak();
      if (results[0].label == "Okay"){
        document.getElementById("update_emoji").innerHTML = "&#128076;";
      }
      if (results[0].label == "Good"){
        document.getElementById("update_emoji").innerHTML = "&#128077;";
      }
      if (results[0].label == "Victory"){
        document.getElementById("update_emoji").innerHTML = "&#9996;";
      }
      if (results[0].label == "Stop"){
        document.getElementById("update_emoji").innerHTML = "&#9995;";
      }
      if (results[0].label == "Bye"){
        document.getElementById("update_emoji").innerHTML = "&#128075;";
      }
    }
    }

    
    
