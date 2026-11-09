// app.js : 영화 배열을 다루는 함수 6개 / 방준태(26) / 10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
const average = list => {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
console.log("평균:", average(movies));

// average(list) //영화 배열 ⇒ 평균 평점(숫자)
// best(list) //영화 배열 ⇒ 평점이 가장 높은 영화 객체
// filterByRating(list, min) //영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
// sortByRating(list) //영화 배열 ⇒ 평점 높은 순으로 정렬한 새 배열(원본은 그대로)
// yearsSince(dateStr) //날짜 문자열 ⇒ 올해까지 몇 년(숫자)
// posterUrl(path, size) //포스터 경로, 크기 ⇒ TMDB 이미지 주소(문자열)