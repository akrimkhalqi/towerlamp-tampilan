var table = $("#btn_update").DataTable({
  ajax: {
    url: "http://api5.ppa-mhu.net/cycle",
    dataType: "json",
    // contentType: "application/json",
    dataSrc: function (data) {
      var datap = data;
      var loopp = datap.data;
      var colp = Array();
      // looping
      for (var i = 0; i < loopp.length; i++) {
        var speed = (loopp[i].eats + loopp[i].lats) / 2;
        var loader_act = loopp[i].loader;
        // loopp[i].loader == "E2005" || loopp[i].loader == "E2025"
        //   ? loopp[i].loader
        //   : "-";
        var pld = loopp[i].pld == "0.00" ? "-" : loopp[i].pld;
        var spd = speed == 0 ? "-" : speed;
        var ett = loopp[i].ett == "0.00" ? "-" : loopp[i].ett;
        var etd = loopp[i].etd == "0.00" ? "-" : loopp[i].etd;
        var eats = loopp[i].eats == 0 ? "-" : loopp[i].eats;
        var est = loopp[i].est == "0.00" ? "-" : loopp[i].est;
        var lt = loopp[i].lt == "0.00" ? "-" : loopp[i].lt;
        var ltt = loopp[i].ltt == "0.00" ? "-" : loopp[i].ltt;
        var ltd = loopp[i].ltd == "0.00" ? "-" : loopp[i].ltd;
        var lats = loopp[i].lats == 0 ? "-" : loopp[i].lats;
        var lst = loopp[i].lst == "0.00" ? "-" : loopp[i].lst;
        var dt = loopp[i].dt == "0.00" ? "-" : loopp[i].dt;
        var lmts = loopp[i].lmts == 0 ? "-" : loopp[i].lmts;
        var emts = loopp[i].emts == 0 ? "-" : loopp[i].emts;

        // console.log(loopp[i]);
        var coljs = Array();
        coljs.push(loopp[i].cn);
        coljs.push(loopp[i].created_date);
        coljs.push(loader_act);
        coljs.push(pld);
        coljs.push(spd);
        coljs.push(ett);
        coljs.push(etd);
        coljs.push(eats);
        coljs.push(est);
        coljs.push(lt);
        coljs.push(ltt);
        coljs.push(ltd);
        coljs.push(lats);
        coljs.push(lst);
        coljs.push(dt);
        coljs.push(loopp[i].cwc);
        coljs.push(lmts);
        coljs.push(emts);
        colp[i] = coljs;
      }
      return colp;
    },
  },
  dom: 'frt<"my-inner1"p><"my-inner1"i><"my-inner1"l>',
  serverSide: false,
  paging: true,
  responsive: true,
  fixedHeader: true,
  autoWidth: true,
  scrollY: "480px",
  scrollX: true,
  scrollCollapse: true,
  fixedColumns: { heightMatch: "none" },
  searching: true,
  lengthChange: true,
  language: {
    lengthMenu: "row per page _MENU_ ",
    zeroRecords: "Data Not found",
    info: "Showing page _PAGE_ of _PAGES_",
    infoEmpty: "No records available",
    infoFiltered: "(filtered from _MAX_ total records)",
    paginate: {
      previous: '<i class="fi fi-rr-angle-left"></i>',
      next: '<i class="fi fi-rr-angle-right"></i>',
    },
    bPaginate: false,
    search: "",
  },
  pagingType: "simple",
  destroy: true,
  order: [[1, "desc"]],
  columnDefs: [
    { targets: [0], className: "text-left bcolor" },
    { targets: [1], className: "text-center" },
  ],
});

$("[type=search]").each(function () {
  $(this).attr("placeholder", "Search...");
});

$(document).ready(function () {
  var table = $("#btn_update").DataTable();
  var date = moment();
  var buttons = new $.fn.dataTable.Buttons(table, {
    buttons: [
      {
        extend: "excelHtml5",
        text: '<i class="uil uil-import"></i>',
        titleAttr: "Export Excel",
        title: "byHouler_Lastest_" + date.format("D-MM-YYYY"),
        exportOptions: {
          columns: ":visible",
        },
        className: "waves-effect waves-light mrm",
      },
      {
        extend: "colvis",
        collectionLayout: "fixed columns",
        text: '<i class="uil uil-setting"></i>',
        titleAttr: "Filter Columns",
        collectionTitle: "Filtering Columns Views",
        className: "waves-effect waves-light mrm",
      },
    ],
  })
    .container()
    .appendTo($("#buttons"));
});

setInterval(function () {
  table.ajax.reload(null, false);
}, 5000);

// $(window).on("load", function () {
//   setTimeout(function () {
//     location.href = "authentication-login1.html";
//   }, 12000);
// });
