var wrapperEle = document.body.querySelector(".wrapper");
var wrapperEle2 = document.body.querySelector(".wrapper2");
var buttonGoing= 5;
var number_two=1;
var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

for (var i = 0; i < list.length; i++) {
    var ele = document.createElement("div");
    var nameEle = document.createElement("h2")
    var ageEle = document.createElement("h4")

    nameEle.innerHTML = "Name: " + list[i].name;
    ageEle.innerHTML = "Age: " + list[i].age;
    if (list[i].age > 25) {
        ageEle.style.color = "#29f90d";
    }
    ele.appendChild(nameEle);
    ele.appendChild(ageEle);
    wrapperEle.appendChild(ele);
}

wrapperEle2.innerHTML= buttonGoing
document.body.querySelector(".counter").addEventListener("click", function () {
    buttonGoing= buttonGoing+number_two;
    wrapperEle2.innerHTML= buttonGoing
 })
