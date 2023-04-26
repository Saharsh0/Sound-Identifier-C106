//https://teachablemachine.withgoogle.com/models/-dfxFDvtc/

function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-dfxFDvtc/model.json',modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}