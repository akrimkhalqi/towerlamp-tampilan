// jam
function update() {
  var jam = moment().format("D MMMM YYYY. H:mm:ss");
  $(".clock").html(jam);
  // console.log(jam)
  $();
}

// getdata
function update_conten() {
  fetch("http://api3.ppa-mhu.net/api/fuelTank")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      var total = 0;
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        total = total + data[i].fuelVolume;
        var cn = document.getElementById("volume_" + data[i].cn);
        var jml = $("#jumlah_" + data[i].cn);
        var temp = $("#temp_" + data[i].cn);
        var tinggi = $("#tinggi_" + data[i].cn);
        var actv = $("#actm_" + data[i].cn);
        var actvc = $("#actvc_" + data[i].cn);

        cn.style.height = data[i].fuelHeightPercent + "%";
        jml.text(data[i].fuelVolume.toLocaleString("id-ID"));
        temp.text(data[i].temperature);
        tinggi.text(data[i].fuelHeight);
        actv.text(data[i].activeMessage);
        // actvc.text(data[i].activeColor);

        if (data[i].activeColor == "Green") {
          actvc.css("background", "#4caf50");
        } else if (data[i].activeColor == "Yellow") {
          actvc.css("background", "#ffc300");
        } else if (data[i].activeColor == "Red") {
          actvc.css("background", "#ff5252");
        } else {
          actvc.css("background", "#ff5252");
        }
      }
      $("#total").text(total.toLocaleString("id-ID"));
    });
}

// gsap animasi
gsap.from(".judul", { duration: 0.3, y: "100%", opacity: 0 });
// gsap.from('.judul',{duration: 5, y: '-500%', ease: "power.out",});

update_conten;
setInterval(update, 1000);
setInterval(update_conten, 2000);
