
// jam
function update() {
  var jam = moment().format('D MMMM YYYY. H:mm:ss');
  $('.clock').html(jam);
  // console.log(jam)
  $()
}

// getdata
function update_conten() {
  fetch('http://api3.ppa-mhu.net/api/fuelTank').then(data => {
    return data.json();
  })
  .then(data => {
    var total = 0;
    for(var i=0; i<data.length; i++) {
      console.log(data[i])
      console.log('tes')
      total = total + data[i].fuelVolume;
      var cn = document.getElementById("volume_"+data[i].cn);
      var jml = $('#jumlah_'+data[i].cn);
      var temp = $('#temp_'+data[i].cn);
      var tinggi = $('#tinggi_'+data[i].cn);

      // var last = $('#update_'+data[i].cn);

      cn.style.height = data[i].fuelHeightPercent+"%";
      jml.text(data[i].fuelVolume);
      temp.text(data[i].temperature);
      tinggi.text(data[i].fuelHeight);

      // last.text(data[i].updatedAT);
      
      
    }
    $('#total').text(total);
  });
}
// gsap animasi
gsap.from('.judul',{duration: 0.3, y: '100%', opacity:0,});
// gsap.from('.judul',{duration: 5, y: '-500%', ease: "power.out",});



update_conten
setInterval(update, 1000);
setInterval(update_conten, 2000);
