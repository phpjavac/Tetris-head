import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})

export class AppComponent implements OnInit {
  block = [
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  onchange(event) {
    //   const canvas = document.getElementById('untreated-canvas');
    //   const context = canvas.getContext('2d');
  //   const img = event.target.files[0];
  //   // file reader
  //   const reader = new FileReader();
  //   reader.readAsDataURL(img);
  //   reader.onload = (e) => { // reader onload start
  //     // 设置画布尺寸
  //     const imgWidth = 280;
  //     const imgHeight = 280;
  //     canvas.width = imgWidth;
  //     canvas.height = imgHeight;

  //     // console.log(e.target.result);
  //     const image = new Image();
  //     image.src = e.target.result;
  //     const arr = new Array(imgWidth);
  //     const that = this;
  //     image.onload = function () {
  //       // console.log(this);
  //       // 将图片按像素写入画布
  //       context.drawImage(this, 0, 0, imgWidth, imgHeight);
  //       // const imageData = context.getImageData(0, 0, 1, 1);
  //       for (let index = 0; index < imgHeight; index += 1) {
  //         for (let idx = 0; idx < imgWidth; idx += 1) {
  //           if (idx === 0) {
  //             arr[index] = new Array();
  //           }
  //           const data = { id: context.getImageData(index, idx, index + 1, idx + 1) };
  //           arr[index].push(data);
  //         }
  //       }
  //       // console.log(arr);
  //       const array = [...new Set(arr)];
  //       array.splice(array.findIndex(item => {
  //         return !Array.isArray(item);
  //       }), 1);
  //       const arr1 = new Array(array.length);
  //       array.forEach((arrci, arridx) => {
  //         arr1[arridx] = new Array(array.length);

  //         arrci.forEach((arr2, idx2) => {
  //           let arr3 = Array.from(arr2.id.data);
  //           arr3 = [...new Set(arr3)];
  //           arr3.forEach((item2, idx) => {
  //             if (!Array.isArray(arr1[arridx][idx2])) {
  //               arr1[arridx][idx2] = [0, 0, 0, 0];
  //             }
  //             arr1[arridx][idx2][idx % 4] += item2;
  //           });
  //           arr1[arridx][idx2] = arr1[arridx][idx2].map(item3 => {
  //             return item3 / (arr3.length / 4);
  //           });
  //         });
  //         // arrci[0].id.data.forEach((item, idx) => {
  //         //   arr1[arridx][idx % 4] += item;
  //         // });
  //       });
  //       that.initCanvas(arr1);
  //     };
  //   };
  // }
  // initCanvas(arr) {
  //   console.log(arr);
  //   const canvas = document.getElementById('canvas');
  //   const cx = canvas.getContext('2d');
  //   const width = canvas.width = 280;
  //   const height = canvas.height = 280;
  //   const SCube = 1;
  //   console.log(arr);
  //   arr.forEach((item, index) => {
  //     item.forEach((array, idx) => {
  //       const x = index * SCube;
  //       const z = idx * SCube;
  //       cx.fillStyle = `rgb(${array[0]}, ${array[1]}, ${array[2]}, ${array[3]})`;
  //       cx.fillRect(x, z, SCube, SCube);
  //     });
  //   });
  //   // console.log(cx);
  //   // const grd = cx.createLinearGradient(100, 100, 100, 200);
  //   // grd.addColorStop(0, 'pink');
  //   // grd.addColorStop(1, 'white');
  //   // cx.fillStyle = grd;

  }
  ngOnInit() {
    const canvas = document.getElementById('canvas');
    const cx = canvas.getContext('2d');
    const width = canvas.width = 280;
    const height = canvas.height = 280;
    const SCube = 12;
    const padding = 60;
    const cubePadding = 1;
    console.log(cx);
    // const grd = cx.createLinearGradient(100, 100, 100, 200);
    // grd.addColorStop(0, 'pink');
    // grd.addColorStop(1, 'white');
    // cx.fillStyle = grd;

    this.block.forEach((cubeList, index) => {
      cubeList.forEach((element, idx) => {
        if (element) {
          const x = padding + (idx * (SCube + cubePadding));
          const z = padding + (index * (SCube + cubePadding));
          cx.fillStyle = '#fff';
          cx.fillRect(x, z, SCube, SCube);
        }
      });
    });
  }
}
