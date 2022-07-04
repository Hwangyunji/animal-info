
// 서버에 데이터 요청
fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
    .then(function(res){
        return res.json(); // JSON 객체 변환
    })
    .then(function(obj){
        // obj 동물데이터
        showProducts(obj);
    });

function showProducts(obj) {
    // 현제 페이지의 URL query 파라미터(매개변수)
    const query = location.search;
    console.log(query);
    // ? URL query문을 object(변수)로 변경
    let params = new URLSearchParams(query).get('category');

    // params == null 이면 시작 페이지 dog 출력
    if(params == null) {
        params = 'dog'
    }

    // 동물 데이터 출력
    obj.forEach(function(animal){
        // 카테고리 구분 dog | cat | bird
        // 요청한 params와 동물 카테고리명이 일치하는 데이터만 출력
        if(params == animal.category){
        let html =`
        <div class="col">
            <img src=${animal.imgUrl} alt="dog1">
            <p class="name">${animal.name}</p>
        </div>
    `
        $('.row').append(html);
        }

    });
}

    

    let string = 'category=cat';  // 문자열
    let category = "cat"; // 변수형

/* 파라미터를 전달하여 요청하기
    홈페이지주소?name=홍길동
    매개변수(URL parameter) name = '홍길동'

    index.html -> index.html?category=dog
    cat.html -> cat.html?category=cat
    bird.html -> bird.html?category=bird
*/