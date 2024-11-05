const headerlist = documnet.querySelector('header>.h_innerbox .h_ul>.h_li');
const contentlist = document.querySelector('.first_content>.content_head>ul>li')



function changeBackground(event) {
    // 모든 li 요소에서 active 클래스 제거
    document.querySelectorAll(headerlist).forEach(headerlist => headerlist.classList.remove('active'));
    document.querySelectorAll(contentlist).forEach(contentlist => contentlist.classList.remove('active'));

    // 클릭한 a 요소의 부모 li에 active 클래스 추가
    event.target.parentElement.classList.add('active');
}


