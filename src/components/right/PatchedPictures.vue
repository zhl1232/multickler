<script setup>
</script>

<template>
  <div class="patched-pictures">
    <div class="picture picture-1">
      <div class="wrapper">
        <div class="title msg-1">
          测试文字测试文字测试文字
        </div>
      </div>
      <img class="img-1" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F04%2F20210804120908_96d67.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662128169&t=5448a04300b16357a6f0d71579a2c154" alt="">
    </div>
    <div class="picture picture-2">
      <div class="wrapper">
        <div class="title msg-2">测试文字测试文字测试文字</div>
        <div class="sticky-tape tape-2-1"></div>
        <div class="sticky-tape tape-2-2"></div>
      </div>
      <img class="img-2" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F14%2F20210714190121_23a13.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662128219&t=6e796d174563a748ff44675085cbf326" alt="">
    </div>
    <div class="picture picture-3">
      <div class="wrapper">
        <div class="title msg-3">
          测试文字测试文字测试文字
        </div>
        <div class="sticky-tape tape-3"></div>
      </div>
      <img class="img-3" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F24%2F20210624091817_9f9f6.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662128227&t=4ae7921894d3230868e35ccbb8f2f9c3" alt="">
    </div>
    <div class="picture picture-4">
      <div class="wrapper">
        <div class="sticky-tape tape-4"></div>
        <div class="title msg-4">
          测试文字测试文字测试文字
        </div>
      </div>
      <img class="img-4" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0F620093053%2F200F6093053-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662128169&t=b236b80b21d62a2b060fc776dba82fa1" alt="">
    </div>
  </div>
</template>

<style scoped>
.patched-pictures {
  position: relative;
}

img {
  position: absolute;
  object-fit: cover;
  border-radius: 4px;
  border: 10px solid #F4F4F4;
  box-sizing: border-box;
}

.picture-1 {
  width: 200px;
  height: 220px;
}

.img-1 {
  transform: rotate(-30deg);
  width: 100%;
  height: 100%;
  top: 130px;
  left: 60px;
}

.picture-2 {
  width: 120px;
  height: 150px;
}

.img-2 {
  width: 100%;
  height: 100%;
  top: 20px;
  left: 5px;
}

.picture-3 {
  width: 160px;
  height: 200px;
}

.img-3 {
  transform: rotate(-15deg);
  width: 100%;
  height: 100%;
  top: 15px;
  left: 215px;
}

.picture-4 {
  width: 300px;
  height: 200px;
}

.img-4 {
  width: 100%;
  height: 100%;
  top: 360px;
  left: 60px;
}

.picture {
  position: absolute;
}

.wrapper {
  position: relative;
}

.sticky-tape {
  z-index: 1;
  background-color: rgba(208, 208, 205, 0.4);
  position: absolute;
  width: 20px;
  height: 60px;
}

.tape-2-1 {
  transform: rotate(-30deg);
  top: 75px;
  left: 160px;
}

.tape-2-2 {
  transform: rotate(-340deg);
  top: 150px;
  left: 20px;
}

.tape-3 {
  transform: rotate(27deg);
  top: -12px;
  left: 340px;
}

.tape-4 {
  top: 320px;
  left: 180px;
  transform: rotate(205deg);
}

.title {
  position: absolute;
}

.msg-1 {
  width: 90px;
  top: 280px;
  left: -10px;
}

.msg-2 {
  width: 236px;
  top: -14px;
  left: -4px;
}

.msg-3 {
  top: 215px;
  width: 120px;
  left: 280px;
}

.msg-4 {
  top: 560px;
  left: 40px;
}
</style>