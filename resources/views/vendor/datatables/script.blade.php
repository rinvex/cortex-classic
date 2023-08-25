@if ($routePrefix)window.Cortex.routePrefix = "{{ $routePrefix }}";@endif

window.onload = function() {
    $(function() {
        window.{{ config('datatables-html.namespace', 'LaravelDataTables') }} = window.{{ config('datatables-html.namespace', 'LaravelDataTables') }} || {};
        window.{{ config('datatables-html.namespace', 'LaravelDataTables') }}["{{ $id }}"] = $("#{{ str_replace('.', '\\\.', $id) }}").DataTable({!! $options !!});
    });

    @if ($pusher)
        // Realtime updates
        window.Echo.private("{{ $pusher['channel'] }}")
          .listen('.{{ $pusher['entity'] }}.created', (e) => {
              window.LaravelDataTables["{{ $id }}"].draw();
          })
          .listen('.{{ $pusher['entity'] }}.updated', (e) => {
              window.LaravelDataTables["{{ $id }}"].draw();
          })
          .listen('.{{ $pusher['entity'] }}.deleted', (e) => {
              window.LaravelDataTables["{{ $id }}"].draw();
          })
          .listen('.{{ $pusher['entity'] }}.restored', (e) => {
              window.LaravelDataTables["{{ $id }}"].draw();
          });
    @endif
};
