let savePeople = document.getElementById("save-total-count");
let countPeople = document.getElementById("count-people");
let count = 0;

console.log(savePeople);

function increment() {
    count += 1;
    console.log(count);
    countPeople.textContent = count; //instead of innertext or innerhtml we use textcontent bez it give us perfect space...if we want we search this diff btw innertext and textcontent on google..
}


function save() {
    let countstr = count + " - ";
    savePeople.textContent += countstr;
    countPeople.textContent = 0;// after pressing save the count goes to 0 again ..
    count = 0;//after recount the people the count start from 0 ..


    console.log(count);

}

console.log("let's count people on the subway!")