class Frets

  constructor: ($el) ->
    @fretboard    = new frets.Fretboard($el)
    @scaleMachine = new frets.ScaleMachine($el)
    
frets = {}
frets.Frets = Frets
