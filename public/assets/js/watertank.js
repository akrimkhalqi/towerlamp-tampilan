// jam
function update() {
  var jam = moment().format("D MMMM YYYY. H:mm:ss");
  $(".clock").html(jam);
  // console.log(jam)
  $();
}

// function set_proggress_bar_value(bar, current_progress) {
//   var color_progress = "#CF4D35";
//   if (current_progress >= 0 && current_progress < 40) {
//     color_progress = "#CF4D35";
//   } else if (current_progress >= 40 && current_progress < 60) {
//     color_progress = "#F48225";
//   } else if (current_progress >= 60 && current_progress < 80) {
//     color_progress = "#5EBA7D";
//     console.log("test_color");
//   } else if (current_progress >= 80 && current_progress < 101) {
//     color_progress = "#007bff";
//   }
//   if (bar == "Water Persen") {
//     $("#dvc_inst")
//       .css("width", current_progress + "%")
//       .attr("aria-valuenow", current_progress)
//       .css("background-color", color_progress)
//       .text(current_progress + "%");
//   }
// }

// getdata
function update_conten() {
  // console.log($(".tes active").val());
  fetch("http://ss6api.ppa-mhu.net/ppa-device-api/api/device/tandon/rendah")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let html = "";
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        html += `<div class=" text-center">
                  <div class="card contt">
                    <div class="" style="justify-content: center;">
                        <div class="">
                          <div class="rounded-0">
                              <div class="card-body">
                                <div class="box1">
                                    <!-- <div class="meter_br" id="volume_FS01"></div> -->
                                    <div class="" id="volume_TOO1"></div>
                                </div>
                                <div class="row" style="justify-content: left ; background-color: aliceblue;">
                                    &nbsp;&nbsp;<i class="uil uil-tag-alt style_icon"></i>&nbsp;&nbsp;
                                    <p>Tank_${data[i].cn}</p>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col" style="text-align: left;">
                                      <h3>
                                          <i class="uil uil-raindrops-alt style_sub_icon"></i>
                                          Liters/percent
                                      </h3>

                                      <div class="progress">
                                          <div class="progress-bar" style="background-color: ${
                                            parseFloat(data[i].persentase) >
                                            parseFloat(40)
                                              ? "#F48225"
                                              : parseFloat(data[i].persentase) >
                                                parseFloat(60)
                                              ? "#5EBA7D"
                                              : parseFloat(data[i].persentase) >
                                                parseFloat(80)
                                              ? "#007bff"
                                              : "#CF4D35"
                                          }; width : ${parseInt(
          data[i].persentase
        )}%"
                                          " id="" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${
                                            data[i].persentase
                                          }%
                                          </div>
                                      </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-md-6" style="text-align: left;">
                                      <!-- <span class="badge badge-mine"><small>Yesterday</small></span> -->
                                      <h3>
                                          <i class="uil uil-tear style_sub_icon"></i>
                                          &nbsp;Water Volume
                                      </h3>
                                      <div class="volume">
                                          <small class="" id="jumlah_T001">${
                                            data[i].volume_last
                                          }</small>
                                          <small class=""> lt /</small>
                                          <small class="" id="totvol_T001">${
                                            data[i].volume_total
                                          }</small>
                                          <small class=""> lt</small>
                                      </div>
                                    </div>
                                    <div class="col-md-6" style="text-align: left;">
                                      <h3>
                                          <i class="uil uil-hourglass style_sub_icon"></i>
                                          &nbsp;Last Reading at :
                                      </h3>
                                      <div class="volume">
                                      <small class="" id="dctm_T001"><i class="uil uil-calender"></i>&nbsp;${
                                        data[i].duration_hari
                                      }</small>
                                      <small class=""> Days &nbsp;</small>
                                      <small class="" id="actm_T001"><i class="uil uil-clock-nine"></i>&nbsp;${
                                        data[i].duration_jam
                                      }</small>
                                      <small class=""> Hour's ago_</small>
                                      <small class="" id="actm_T001">${
                                        data[i].date
                                      }</small>
                                      </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col col-lg-6" style="text-align: left;">
                                      <h3>
                                          <i class="uil uil-water style_sub_icon"></i>
                                          &nbsp;Material
                                      </h3>
                                      <div class="volume">
                                          <small class="" id="mat_T001">${
                                            data[i].material
                                          }</small>
                                      </div>
                                    </div>
                                    <div class="col-md-6" style="text-align: left;">
                                      <h3>
                                          <i class="uil uil-location-point style_sub_icon"></i>
                                          <!-- <i class="uil uil-raindrops-alt style_sub_icon"></i> -->
                                          &nbsp;Location
                                      </h3>
                                      <div class="volume">
                                          <small class="" id="loc_T001">${
                                            data[i].lokasi
                                          }</small>
                                      </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>`;
      }

      $("#content_low").html(html);
    });
}

function update_conten_high() {
  // console.log($(".tes active").val());
  fetch("http://ss6api.ppa-mhu.net/ppa-device-api/api/device/tandon/tinggi")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let html = "";
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        html += `<div class=" text-center">
                  <div class="card contt">
                    <div class="" style="justify-content: center;">
                        <div class="">
                          <div class="rounded-0">
                              <div class="card-body">
                                <div class="box1">
                                    <!-- <div class="meter_br" id="volume_FS01"></div> -->
                                    <div class="" id="volume_TOO1"></div>
                                </div>
                                <div class="row" style="justify-content: left ; background-color: aliceblue;">
                                    &nbsp;&nbsp;<i class="uil uil-tag-alt style_icon"></i>&nbsp;&nbsp;
                                    <p>Tank_${data[i].cn}</p>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col" style="text-align: left;">
                                      <h3>
                                          <i class="uil uil-raindrops-alt style_sub_icon"></i>
                                          Liters/percent
                                      </h3>

                                      <div class="progress">
                                          <div class="progress-bar" style="background-color: ${
                                            parseFloat(data[i].persentase) >
                                            parseFloat(40)
                                              ? "#F48225"
                                              : parseFloat(data[i].persentase) >
                                                parseFloat(60)
                                              ? "#5EBA7D"
                                              : parseFloat(data[i].persentase) >
                                                parseFloat(80)
                                              ? "#007bff"
                                              : "#CF4D35"
                                          }; width : ${parseInt(
          data[i].persentase
        )}%"
                                          " id="" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${
                                            data[i].persentase
                                          }%
                                          </div>
                                      </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-md-6" style="text-align: left;">
                                      <!-- <span class="badge badge-mine"><small>Yesterday</small></span> -->
                                      <h3>
                                          <i class="uil uil-tear style_sub_icon"></i>
                                          &nbsp;Water Volume
                                      </h3>
                                      <div class="volume">
                                          <small class="" id="jumlah_T001">${
                                            data[i].volume_last
                                          }</small>
                                          <small class=""> lt /</small>
                                          <small class="" id="totvol_T001">${
                                            data[i].volume_total
                                          }</small>
                                          <small class=""> lt</small>
                                      </div>
                                    </div>
                                    <div class="col-md-6" style="text-align: left;">
                                      <h3>
                                          <i class="uil uil-hourglass style_sub_icon"></i>
                                          &nbsp;Last Reading at :
                                      </h3>
                                      <div class="volume">
                                      <small class="" id="dctm_T001"><i class="uil uil-calender"></i>&nbsp;${
                                        data[i].duration_hari
                                      }</small>
                                      <small class="">Days &nbsp;</small>
                                      <small class="" id="actm_T001"><i class="uil uil-clock-nine"></i>&nbsp;${
                                        data[i].duration_jam
                                      }</small>
                                      <small class=""> Hour's ago_</small>
                                      <small class="" id="actm_T001">${
                                        data[i].date
                                      }</small>
                                      </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col col-lg-6" style="text-align: left;">
                                      <h3>
                                          <i class="uil uil-water style_sub_icon"></i>
                                          &nbsp;Material
                                      </h3>
                                      <div class="volume">
                                          <small class="" id="mat_T001">${
                                            data[i].material
                                          }</small>
                                      </div>
                                    </div>
                                    <div class="col-md-6" style="text-align: left;">
                                      <h3>
                                          <i class="uil uil-location-point style_sub_icon"></i>
                                          <!-- <i class="uil uil-raindrops-alt style_sub_icon"></i> -->
                                          &nbsp;Location
                                      </h3>
                                      <div class="volume">
                                          <small class="" id="loc_T001">${
                                            data[i].lokasi
                                          }</small>
                                      </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>`;
      }

      $("#content_hight").html(html);
    });
}

$("#loww").on("click.bs.tab", function () {
  update_conten();
  console.log();
});

$("#hightt").on("click.bs.tab", function () {
  update_conten_high();
  console.log();
});

setInterval(function () {
  update_conten();
  update_conten_high();
}, 2000);

setInterval(update, 1000);
