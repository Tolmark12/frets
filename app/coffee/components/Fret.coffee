class Fret

  ###
    @el      - HTML parent
    @fretNum - Fret Number
    @notes   - Array of notes (Low to High)
  ###

  constructor: ($el, @fretNum, notes) ->
    node = jadeTemplate['fret']( {fretNum:"f#{@fretNum}"} )
    @$node = $(node)
    $el.append( @$node )
    @addNotes notes

  addNotes : (notes) ->
    for note in notes
      nt = new frets.Note(@$node, note)


frets.Fret = Fret
