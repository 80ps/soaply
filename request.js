const sliderWrapper = document.querySelector('.swiper-wrapper');

const getData = async () => {
  await fetch(
    'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4'
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      let dataElement = '';

      data.map((item) => {
        // console.log(item);
        dataElement = `       
         <div class="swiper-slide">
            <div class="slider-image">
              <img src="images/${item.pro_img}" alt="slider" />
            </div>
            <div class="slider-text">
              <h1>${item.pro_name}</h1>
              <p>${item.pro_desc} </p>
              <a href="#" class="common-btn">자세히보기</a>
            </div>
          </div>
          `; //재할당 htmlcode,  #에는 상세페이지 넣어주면됨
        sliderWrapper.insertAdjacentHTML('beforeend', dataElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();

// const name = '김개똥';
// const age = 23;
// // const str = 'hello' + name + '님' + '나이는' + age + '세 입니다.';
// const str = `hello ${name}님 나이는 ${age}세 입니다.`; // template literal
// console.log(str);
