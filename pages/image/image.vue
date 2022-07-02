<template>
  <view class="content">
    <view @click="chooseImage"> 选择图片 </view>
    <text>
      {{ path }}
    </text>
    <image :src="path" />
    <view @click="压缩图片;"> 压缩图片 </view>
    <text>
      {{ pathSquoosh }}
    </text>
    <canvas canvas-id="canvas" v-if="show"></canvas>
  </view>
</template>

<script>
import squoosh from "@/utils/squoosh.js";
import { pathToBase64, base64ToPath } from "image-tools";
export default {
  data() {
    return {
      show: true,
      path: "test",
      pathSquoosh: "test",
    };
  },
  methods: {
    getCanvasImage(canvasId, imagePath, imageW, imageH, getImgsuccess) {
      console.error(`getCanvasImage begin`);
      const that = this;
      const ctx = uni.createCanvasContext(canvasId, that);
      ctx.drawImage(imagePath, 0, 0, imageW, imageH);
      ctx.draw(
        false,
        setTimeout(function () {
          console.error(`getCanvasImage setTimeout`);
          uni.canvasToTempFilePath(
            {
              canvasId: canvasId,
              x: 0,
              y: 0,
              width: imageW,
              height: imageH,
              quality: 1,
              success: function (res) {
                base64ToPath(res.tempFilePath)
                  .then((path) => {
                    console.error(`base64ToPath path:${path}`);
                  })
                  .catch((error) => {
                    console.error(`base64ToPath error:${error}`);
                  });
                console.error(
                  `getCanvasImage tempFilePath:${res.tempFilePath}`
                );
                getImgsuccess(res.tempFilePath);
              },
              fail(err) {
                console.error(`getCanvasImage fail:${err}`);
              },
              complete() {
                console.error(`getCanvasImage complete`);
              },
            },
            that
          );
        }, 2000)
      );
      console.error(`getCanvasImage wait`);
    },
    chooseImage: function () {
      const that = this;
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
        success: function (res) {
          const fileName = res.tempFiles[0].name;
          uni.getImageInfo({
            src: res.tempFilePaths[0],
            success: function (image) {
              console.log(image.width);
              console.log(image.height);
              const maxSide = Math.max(image.width, image.height);
              // 画板的宽高默认是windowWidth
              const windowWH = 120;
              let scale = 1;
              if (maxSide > windowWH) {
                scale = windowWH / maxSide;
              }
              const imageW = Math.trunc(image.width * scale);
              const imageH = Math.trunc(image.height * scale);
              that.getCanvasImage(
                "canvas",
                res.tempFilePaths[0],
                imageW,
                imageH,
                (pressImgPath) => {
                  console.error(`getCanvasImage CallBack:${pressImgPath}`);
                }
              );
            },
          });
          that.path = res.tempFilePaths[0];
          console.log(JSON.stringify(res.tempFilePaths));
          var ready = new FileReader();
          ready.readAsDataURL(res.tempFiles[0]);
          ready.onload = function () {
            var fileResult = this.result;
            console.log(JSON.stringify(fileResult));
          };
          /*uni.getFileSystemManager().readFile({
            filePath: path, //参数path:图片相对路径
            encoding: "base64",
            success: (res) => {
              let base64 = res.data;
              console.log(JSON.stringify(base64));
            },
            fail: (err) => {
              console.log(err);
            },
          });*/
        },
      });
    },
  },
};
</script>
.content { display: flex; flex-direction: column; align-items: center;
justify-content: center; }
<style></style>
