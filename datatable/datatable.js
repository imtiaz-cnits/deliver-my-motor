$(document).ready(function() {
miDataTable();
} );




function  miDataTable(){
    $('#miTabla').DataTable({

      "language": {
      "emptyTable":			"<i>No hay datos disponibles en la tabla.</i>",
      "infoEmpty":			"Mostrando 0 registros de un total de 0.",
      "infoFiltered":			"(filtrados de un total de _MAX_ registros)",
      "loadingRecords":		"Cargando...",
      "processing":			"Procesando...",
      "zeroRecords":			"No se han encontrado coincidencias.",
      "paginate": {
        "first":			"Primera",
        "last":				"Última",
        "next":				"Next",
        "previous":			"Prev"
      },
      "aria": {
        "sortAscending":	"Ordenación ascendente",
        "sortDescending":	"Ordenación descendente"
      }
    },


    "iDisplayLength":	10,





    });
}
