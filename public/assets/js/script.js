
// // tanggal saja
// // var myVar = setInterval(myTimer, 1000);
            
// // function myTimer() {
// //   var d = new Date();
// //   var t = d.toLocaleTimeString();
// //   var p = document.getElementsByClassName("clock");
// //   p[0].innerText = t;
// // }

// // input liter
// // document.getElementById("tombol_liter").
// // addEventListener("click", tampilkan_liter);

// function tampilkan_liter(fs,tinggi){
//   // var nilai_form=document.getElementById("input_liter").value;
//   // document.getElementById("fs").innerHTML=nilai_liter;
//   // console.log(fs);
//   // fs.style.height = tinggi;
// }

// var fs01 = document.getElementById("hasil_fs01");

// // var btn_fs01 = document.getElementById("tombol_liter_fs01");
// // btn_fs01.addEventListener("click",function(){
// //   tampilkan_liter(fs01,document.getElementById("input_liter_fs01").value+"%")
// // })

// var fs02 = document.getElementById("hasil_fs02");

// // var btn_fs02 = document.getElementById("tombol_liter_fs02");
// // btn_fs02.addEventListener("click",function(){
// //   tampilkan_liter(fs02,document.getElementById("input_liter_fs02").value+"%")
// // })

// var fs03 = document.getElementById("hasil_fs03");

// // var btn_fs03 = document.getElementById("tombol_liter_fs03");
// // btn_fs03.addEventListener("click",function(){
// //   tampilkan_liter(fs03,document.getElementById("input_liter_fs03").value+"%")
// // })

// var fs04 = document.getElementById("hasil_fs04");

// // var btn_fs04 = document.getElementById("tombol_liter_fs04");
// // btn_fs04.addEventListener("click",function(){
// //   tampilkan_liter(fs04,document.getElementById("input_liter_fs04").value+"%")
// // })

// var fs05 = document.getElementById("hasil_fs05");

// // basic Jquery mewarnai tanpa css
// $(document).ready(function(){
//   // selector tag
//   $('h2').css('background-color','#333')
//   $('#hasil_fs01').css('background-color','#efc54b')

//   // jam
// function update() {
//   var jam = moment().format('D MMMM YYYY. H:mm:ss');
//   $('.clock').html(jam);
//   // console.log(jam)
//   $()
// }

// // nilai tank ajax
// function get_data() {
//   const Http = new XMLHttpRequest();
//   const url='http://localhost:3000/api/fuelTank';
//   Http.open("GET", url);
//   Http.send();

//   Http.onreadystatechange = (e) => {
//     // const res = eval(Http.response)
//     const res = JSON.parse(Http.response)
//     var jumlah_data = Object.keys(res).length;
//     // const res = eval (Http.response(''))
//     console.log(jumlah_data)

//     for(var i = 0; i < jumlah_data; i++){
//       console.log(res[i])
//       var cn = document.getElementById ("hasil_"+res[i].cn)
//       console.log(cn)
//       tampilkan_liter(cn, res[i].fuelHeight)
//     }

//     // fetch('http://192.168.137.228:3000/api/fuelTank').then(data => {
//     //   return data.json();
//     // })
//     // .then(data => {
//     // for(var i=0; i<jumlah_data.length; i++) {
//     //   console.log(res[i])
//     // }
//     // });
//     // res.each(function( index ) {
//     //   console.log( index + ": " + $( this ).cn() );
//     // });
// }}

// get_data()
// setInterval(update, 1000);



// // nilai tank ajax

//   // const ajax = new XMLHttpRequest();
//   // const url = load_ajax(hasil_fs03);
//   // ajax.open('GET',url);
//   // ajax.send();
//   // ajax.responseText
// })