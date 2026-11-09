// script.js: 내 영화 평점 통계(콘솔판)
// 작성자 : 방준태(2651030)

const titles = ["신세계", "크로우즈 제로", "크로우즈 제로 2", "HiGH&LOW THE MOVIE", "인터스텔라"];
const ratings = [7.9, 7.4, 7.3, 8.4, 8.4];
const years = [2013, 2007, 2009, 2016, 2014];

//즉시 실핼 함수 만들기
(function init(){
    console.log("나는 함수다. 실행이 되었다.");
})();

//화살표 함수로 함수 정의하기
const gugudan = dan => {
    for(let i = 1;i<=9;i++){
        console.log(`${dan} x ${i} = ${dan*i}`);
    }
}
gugudan(7);

const add = (num1,num2) => num1 + num2;
console.log(add(1234,5678));

let sum = 0;
let count = 0;
let max = ratings[0];
let maxIndex = 0;

for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];

    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }

    if (ratings[i] >= 8) {
        count++;
    }

    let label = "";
    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + "): " + ratings[i] + " " + label);
}

console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

const avgText = average.toFixed(1);
const best = titles[maxIndex];

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);