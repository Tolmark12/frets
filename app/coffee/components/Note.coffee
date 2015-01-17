class Note

  constructor: ($el, note) ->
    node = jadeTemplate['note']( {note:note} )
    @$node = $(node)
    $el.append( @$node )
    console.log "hullo I'm a #{note}"


frets.Note = Note
