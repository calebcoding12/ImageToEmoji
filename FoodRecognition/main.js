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
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pmXt8x085/model.json', modelloaded);

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
      if (results[0].label == "Lemon"){
        document.getElementById("update_emoji").innerHTML = "&#127819;";
      }
      if (results[0].label == "Watermelon"){
        document.getElementById("update_emoji").innerHTML = "&#127817;";
      }
      if (results[0].label == "Orange"){
        document.getElementById("update_emoji").innerHTML = "&#127818;";
      }
      if (results[0].label == "Apple"){
        document.getElementById("update_emoji").innerHTML = "&#127822;";
      }
      if (results[0].label == "Banana"){
        document.getElementById("update_emoji").innerHTML = "&#127820;";
      }
    }
    }

    