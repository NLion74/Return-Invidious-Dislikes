console.log("The ReturnInvidiousDislikes Extension seems to be working");

let dislike_api = "https://returnyoutubedislikeapi.com/votes?videoId=";
let video_data = JSON.parse(document.getElementById('video_data').innerHTML);


function handle(data) {
    console.log(data.rating);
    $dislike_count.innerHTML = '<p id="dislikes"><i class="icon ion-ios-thumbs-down"></i> ' + data.dislikes + '</p>'
    $rating.innerHTML = 'Rating: ' + Math.round( data.rating * 100 + Number.EPSILON ) / 100 + ' / 5'
}

function doRequest(videoId) {
    let response = fetch(dislike_api + videoId)
    .then(response => response.json())
    .then(data => handle(data));
}

let $dislike_count = document.getElementById("dislikes");
$dislike_count.style.display = null;
$dislike_count.style.visibility = null;

let $rating = document.getElementById("rating");
$rating.style.display = null;
$rating.style.visibility = null;

doRequest(video_data.id);