(function () {
  // data
const learningJson = {
    "FreeCodeCamp Front End Certificate": 75,
};
const infor = {
    "Basic Programming":{
      "Java":7.5,
      "JavaScript":8
    },
    "Font-End":{
        "React":7,
        "Bootstrap":9,
        "jQuery":8,
        "Chrome_Developer":9.5,
        "Animate.css":9.5,
    },
    "Back-End":{
        "NodeJs":6,
        "Express":7.5,
        "JavaJDBC":7,
    },
    "Mobile":{
        "React_Native":8.5,
    },
    "DataBase":{
        "MySQL":8.5,
        "MongoDB":7
    },
    "API":{
        "Sheets_v4":9.5,
        "Youtube_Data":9.5,
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
    },
  }
  const productsData = {
    "Line ChatBot 代購":"https://youtu.be/KTePiwAD9Z0",
    "法律教育資訊-法者App":"https://youtu.be/ah5u3L3HKog",
    "Taiwan Festival":"http://www.taiwanfestival.net/20151.html"
  }
/** 
 * skills section
*/
  let skillsData = `<h2>skills</h2>`;
  for (let item in infor) {
    skillsData += `<b class='skills-title'>${item}</b><div class="skills-cate">`;
    for (let i in infor[item]) {
      skillsData += `<section class="card"><p>${i}</p>`;
      // let index = infor[item][i];
      // let addStarAmount = infor[item][i] >> 0;
      // let starHalf = (index - addStarAmount) % 1;
      // let remainder = (10 - index) >> 0;
      // for (let v = 0; v < addStarAmount; v++) {
      //   skillsData += `<div><i class="fa fa-star"></i>`;
      // }
      // if (starHalf) {
      //   skillsData += `<i class="fa fa-star-half-full"></i>`;
      // }
      // for (let a = 0; a < remainder; a++) {
      //   skillsData += `<i class="fa fa-star-o"></i></div>`;
      // }
      skillsData += `</section>`;
    }
    skillsData += `</div>`;
  }
  document.getElementById("skills").innerHTML = skillsData;
  
 /**
  *  keep learning section
  */

  let learningData = "<h2>keep learning</h2>";
  for (let obj in learningJson) {
    let per = learningJson[obj];
    learningData += `<p>${obj}</p><section><p></p><div class="dark-percentage"><div style="width:${per}%" class="light-percentage">${per}%</div></div></section>`;
  }
  document.getElementById("learning").innerHTML = learningData;
  
  /**
   * 
   */
  let products = "<h2>products</h2>";
  for(let obj in productsData){
    products+=`<div class="card"><a href=${productsData[obj]} target="_blank">${obj}</a></div>`
  }
  document.getElementById("products").innerHTML = products;
  

/**
 * hover animation listener
 * More button
 */
addEvent(
  document.getElementById('see-more-about-eddie'),
  "mouseover",
  ({target})=>{
    target.attributes.class.value+=" animated jello";
    setTimeout(() => {
      target.attributes.class.value="card";
    }, 500);
  }
)
})()

/**
 * 
 * @param {*} element 
 * @param {*} event 
 * @param {*} callback 
 * @param {*} capture 
 */
function addEvent(element, event, callback, capture=false){
    if(element.attachEvent){
      return element.attachEvent("on"+event, callback);
    }else{
      return element.addEventListener(event, callback,capture);
    }
  }

/**
 * more button listener
 */
function seeMoreAboutEddie() {
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
