class Fretboard

  constructor: ($el) ->
    @addBoard $el
    @addNotes()

  addBoard : ($el) ->
    node = jadeTemplate['fretboard']( {} )
    @$node = $(node)
    $el.append( @$node )

  addNotes : () ->
    scale        = ['A', 'AS', 'B', 'C', 'CS', 'D', 'DS', 'E', 'F', 'FS', 'G', 'GS']
    strings      = ['E', 'A', 'D', 'G', 'B', 'E']
    totalFrets   = 20
    fullStrings  = []
    strings.reverse()

    # Loop once for each string
    for string in strings
      notes     = []
      noteIndex = _.indexOf scale, string

      # Add a note for each fret
      for i in [0..totalFrets]
        notes.push scale[noteIndex++]
        if noteIndex >= scale.length then noteIndex = 0;

      fullStrings.push notes

    string = null
    i      = null
    for i in [0..totalFrets]
      fret = new frets.Fret(@$node, i, [ fullStrings[0][i], fullStrings[1][i], fullStrings[2][i], fullStrings[3][i], fullStrings[4][i], fullStrings[5][i] ])




frets.Fretboard = Fretboard
