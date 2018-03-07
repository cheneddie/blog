(function skilDataAppend() {
  // data
const infor = {
  "Basic Programming":{
    "Java":7.5,
    "JavaScript":8
  },
  "Font-End":{
      "React":7,
      "Bootstraps":9,
      "jQuery":8,
      "ChromeDeveloper":9.5,
  },
  "Back-End":{
      "NodeJs":6,
      "Express":7.5,
      "JavaJDBC":7,
  },
  "Mobile":{
      "ReactNative":8.5,
  },
  "DataBase":{
      "MySQL":8.5,
      "MongoDB":7
  },
  "API":{
      "GoogleSheet":9.5,
      "Youtube":9.5,
      "LineMessage":9.5,
  },
  "Service":{
      "AWS_EC2":7.5,
      "Heroku":9.5,
      "Twilio":9.5,
  },
  "Tools":{
      "Git":9.5,
      "Eclipse":9.5,
      "VSCode":9.5,
      "Node_Crawler":10,
      "Cheerio":9.5,
      "Animate.css":9.5,
  },
  }
  let skilData = `<h2>skil</h2>`;
  for (let item in infor) {
    skilData += `<b class='skil-title'>${item}</b>`;
    for (let i in infor[item]) {
      skilData += `<section><p>${i}</p><div>`;
      let index = infor[item][i];
      let addStarAmount = infor[item][i] >> 0;
      let starHalf = (index - addStarAmount) % 1;
      let remainder = (10 - index) >> 0;
      for (let v = 0; v < addStarAmount; v++) {
        skilData += `<i class="fa fa-star"></i>`;
      }
      if (starHalf) {
        skilData += `<i class="fa fa-star-half-full"></i>`;
      }
      for (let a = 0; a < remainder; a++) {
        skilData += `<i class="fa fa-star-o"></i>`;
      }
      skilData += `</div></section>`;
    }
  }
  document.getElementById("skil").innerHTML = skilData;
})();
const learningJson = {
  "FreeCodeCamp Front End Certificate": 75,
  "W3Schools JavaScript Certificate": 50
};
const setLearningPercentage = (() => {
  let data = "<h2>keep learning</h2>";
  for (let obj in learningJson) {
    let per = learningJson[obj];
    data += `<p>${obj}</p><section><p></p><div class="dark-percentage"><div style="width:${per}%" class="light-percentage">${per}%</div></div></section>`;
  }
  document.getElementById("learning").innerHTML = data;
})();

const seeMoreAboutEddie = () => {
  let state =
    document.getElementById("before-change-introduction").style.display ===
    "grid"
      ? "none"
      : "grid";
  document.getElementById("before-change-introduction").style.display = state;
  document.getElementById("before-change-experience").style.display = state;
  return;
};

// function dateTramEng() {
//   const arr = [
//     [2017, 11, 2018, 02],
//     [2017, 05, 2017, 11],
//     [2015, 09, 2017, 05],
//     [2015, 02, 2016, 08],
//     [2013, 04, 2015, 02],
//     [2012, 03, 2013, 04],
//     [2011, 09, 2012, 01]
//   ];
//   //   Nov 2017 - Feb 2018
//   //   May 2017 - Nov 2017
//   //   Sep 2015 - May 2017
//   //   Feb 2015 - Aug 2016
//   //   Apr 2013 - Feb 2015
//   //   Mar 2012 - Apr 2013
//   //   Sep 2011 - Jan 2012
//   const options = { year: "numeric", month: "short" };
//   for (let i of arr) {
//     let dateA = new Date(Date.UTC(i[0], i[1] - 1));
//     let dateb = new Date(Date.UTC(i[2], i[3] - 1));
//     console.log(
//       dateA.toLocaleDateString("en-us", options) +
//         " - " +
//         dateb.toLocaleDateString("en-us", options)
//     );
//   }
// }
