class ScaleMachine

  constructor: (@$el) ->
    frets.scaleMachine = @

  highlightNote : (note, clearAll=false) ->
    if clearAll then @clearHighlights()

    $(".note.#{note.toUpperCase()}").addClass('highlight')

  clearHighlights : () ->
     $(".note").removeClass("highlight")

frets.ScaleMachine = ScaleMachine
