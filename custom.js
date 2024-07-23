// 프로그래밍 언어 조합 약속:
// menu_icon : 스네이크 케이스
// menu-icon : 하이픈 케이스
// menuIcon : 카멜케이스

// addEventListener(): 이벤트 리스너 추가
// contains(): 클래스 포함 여부 - boolean
// getAttribute(): 속성값 가져오기 - 파라미터가 1개 - 파라미터로 지정된 속성의 값을 가져온다
// setAttribute(): 속성값 설정하기 - 파라미터가 2개 - 첫번째 파라미터는 설정할 속성 이름, 두번째 파라미터는 설저할 속성의 값

const menuIcon = document.querySelector('.menu-icon');
// console.log(menuIcon);
const menuIconFont = document.querySelector('.menu-icon > i');
const mobileMenus = document.querySelector('.mobile-menus');
console.dir(mobileMenus);

// menu icon click event
menuIcon.addEventListener('click', function () {
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    menuIconFont.setAttribute('class', 'ri-close-large-line');
    mobileMenus.style.height = mobileMenus.scrollHight + 'px'; //mobileMenu가 작동되고
  } else {
    menuIconFont.setAttribute('class', 'ri-menu-line');
    mobileMenus.style.height = 0; //mobileMenus 가 없을 때 다시 0으로 돌아감
  }
});

// Header style change when scrooling down
const header = document.querySelector('header');
//헤더의 top을 만들어 줌, 화면을 내리때 하얀 top을 생성

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

//Swiper Silder Options
setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',  //default: horizon
    loop: true, // 슬라이더 무한 반복

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // 페이지네이선 클릭 여부: 클릭한 index로 스라이더 이동 // option 잘 사용하지 않기 때문에
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar -가로 프로세스 바
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}, 3000); //function,time /실행 기능, 함수, 시간

// //Fit Insia Image Height
// const instaImageHeight = document.querySelector('h').scrollHeight;
// // console.log(instaImageHeight);

// document.querySelector('#fh').style.height = instaImageHeight + 'px'});
