// @TODO: this script is a turbolinks hacky workaround
// We need a way to delay this code execution until turbolinks
// merge head scripts (datatables.js), load and executes it first, can we?!
// By default 'turbolinks:load' here is loaded before it's deferred dependencies being loaded!
window.addEventListener('turbolinks:load', function() {
    let LaravelDataTablesScripts = function(window,$) {window.LaravelDataTables = window.LaravelDataTables||{};window.LaravelDataTables["%1$s"] = $("#%1$s").DataTable(%2$s);}
    document.addEventListener('datatables.ready', function (e) {LaravelDataTablesScripts(window,$);}, false); // Fired only once when turbolinks enabled (the very beginning visit or hard refresh)
    if (window.DataTableReady){LaravelDataTablesScripts(window,$);} // Assigned after the first load of the page or hard refresh

    // Realtime updates
    window.Echo.private("%1$s")
          .listen('.resource.created', (e) => {
              window.LaravelDataTables["%1$s"].draw();
          })
          .listen('.resource.deleted', (e) => {
              window.LaravelDataTables["%1$s"].draw();
          })
          .listen('.resource.restored', (e) => {
              window.LaravelDataTables["%1$s"].draw();
          })
          .listen('.resource.updated', (e) => {
              window.LaravelDataTables["%1$s"].draw();
          });
});
