class Note

  constructor: ($el, note) ->
    node = jadeTemplate['note']( {note:note} )
    @$node = $(node)
    $el.append( @$node )


frets.Note = Note
