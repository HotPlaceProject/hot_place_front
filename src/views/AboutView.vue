<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <div class="map">
    <div class="area" id="daehakro">대학로</div>
    <div class="area" id="gangnam">강남역</div>
    <div class="area" id="jongro">종로</div>
    <div class="area" id="itaewon">이태원</div>
    <div class="area" id="hongdae">홍대-연남</div>
    <div class="area" id="gangnamgu">강남구</div>
    <div class="area" id="songpa">송파</div>
    <div class="area" id="yeouido">여의도</div>
    <div class="area" id="insadong">인사동</div>
    <div class="area" id="dongdaemun">동대문</div>
    <div class="area" id="mapo">마포</div>
    <div class="area" id="seodaemun">서대문</div>
    <div class="area" id="yongsan">용산</div>
    <div class="area" id="seongdong">성동구</div>
    <div class="area" id="gangdong">강동구</div>
    <!-- 다른 지역들도 추가 -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.map {
  position: relative;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background-color: #f0e5d8;
}

.area {
  background-color: #d8c3a5;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  position: absolute;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: transform 0.3s;
}

.area:hover {
  transform: scale(1.1);
}

#daehakro {
  top: 50px;
  left: 350px;
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0 80%);
}

#jongro {
  top: 100px;
  left: 300px;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 80%);
}

#insadong {
  top: 150px;
  left: 320px;
  clip-path: polygon(0 0, 100% 20%, 80% 100%, 0 80%);
}

#dongdaemun {
  top: 80px;
  left: 400px;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 80%);
}

#hongdae {
  top: 200px;
  left: 150px;
  clip-path: polygon(0 20%, 100% 0, 80% 100%, 0 100%);
}

#yeouido {
  top: 300px;
  left: 200px;
  clip-path: polygon(0 0, 100% 20%, 80% 100%, 0 100%);
}

#itaewon {
  top: 350px;
  left: 350px;
  clip-path: polygon(20% 0, 100% 0, 100% 80%, 0 100%);
}

#gangnamgu {
  top: 400px;
  left: 500px;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 80%);
}

#gangnam {
  top: 450px;
  left: 550px;
  clip-path: polygon(0 0, 100% 20%, 80% 100%, 0 80%);
}

#songpa {
  top: 500px;
  left: 600px;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 80%);
}

#mapo {
  top: 250px;
  left: 100px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}

#seodaemun {
  top: 150px;
  left: 200px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}

#yongsan {
  top: 300px;
  left: 300px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}

#seongdong {
  top: 200px;
  left: 450px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}

#gangdong {
  top: 400px;
  left: 650px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}

/* 다른 지역들의 위치와 스타일을 설정 */
</style>
