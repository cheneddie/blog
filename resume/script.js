(function () {
  // data
const learningJson = {
    "FreeCodeCamp Front End Certificate": 75,
};
const infor = {
  "Front-End":{
    "JavaScript":8,
    "React":7,
    "Bootstrap":9,
    "jQuery":8,
  },
  "Back-End":{
        "NodeJs":6,
        "Express":7.5,
    },
    "Mobile":{
        "React_Native":8.5,
    },
    "Database":{
        "MySQL":8.5,
        "MongoDB":7
    },
  }
  
/** 
 * skills section
*/
  let skillsData = `<h2>skills</h2>`;
  for (let item in infor) {
    skillsData += `<b class='skills-title'>${item}</b><div class="skills-cate">`;
    for (let i in infor[item]) {
      skillsData += `<section class="card button"><p>${i}</p>`;
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
   *  Projects
   */
  const projectsData = {
    "Line ChatBot":["https://youtu.be/KTePiwAD9Z0","http://s01.calm9.com/qrcode/2018-03/OCD5F5JZ3S.png"],
    "法者App":["https://youtu.be/ah5u3L3HKog","http://s01.calm9.com/qrcode/2018-03/S8QKCQJGXH.png"],
    "Taiwan Festival":["http://www.taiwanfestival.net/20151.html","http://s01.calm9.com/qrcode/2018-03/TBW3ZYUSLT.png"]
  }

  let projects = "<h2>projects</h2>";
  for(let obj in projectsData){
    projects+=`<a class="card button" href=${projectsData[obj][0]} target="_blank">
    <div>${obj}</div>
    <img src=${projectsData[obj][1]} alt="Demo">
    </a>`
  }
  document.getElementById("projects").innerHTML = projects;
  
/**
 * 
 */
const informationData = {
  name:"陳瑋棋",
  age:"29歲",
  "birth date":"Jun 07 1989",
  education:"專科"
  
}
let information = "<h2>information</h2>";
  for(let obj in informationData){
    information+=`<section class=''><p>${obj}</p><span class="information-text">${informationData[obj]}</span></section>`;
  }
  document.getElementById("information").innerHTML = information;
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
    document.getElementById("before-change-experience").style.display ===
    "grid"
      ? "none"
      : "grid";
  document.getElementById("before-change-experience").style.display = state;
  return;
};

// (function dateTramEng() {
//   const arr = [
//     [1989, 06, 2012, 01]
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
// })()
