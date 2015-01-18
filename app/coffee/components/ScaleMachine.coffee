class ScaleMachine
  # index              0    1     2    3     4    5    6     7    8     9    10    11
  # name               1          2          3    4          5          6          7
  @scale           : ['C', 'CS', 'D', 'DS', 'E', 'F', 'FS', 'G', 'GS', 'A', 'AS', 'B']
  @scaleLen        : 12
  @majorPentatonic : [0,2,4,7,9]
  @minorPentatonic : [0,3,5,7,10]
  @majorTriads     : [0,4,7]
  @minorTriads     : [0,3,7]

  constructor: (@$el) ->
    frets.scaleMachine = @

  showMinorPentatonic : (root) -> @getScale(root, ScaleMachine.minorPentatonic)
  showMajorPentatonic : (root) -> @getScale(root, ScaleMachine.majorPentatonic)
  showMajorTriad      : (root) -> @getScale(root, ScaleMachine.majorTriads)
  showMinorTriad      : (root) -> @getScale(root, ScaleMachine.minorTriads)

  getScale : (root, scaleMask) ->
    fullScale = @getRootScale root
    scale = []
    for index in scaleMask
      scale.push fullScale[index]

    @clearHighlights()
    for note in scale
      @highlightNote note



  highlightNote : (note, clearAll=false) ->
    if clearAll then @clearHighlights()
    $(".note.#{note}").addClass('highlight')
    0

  clearHighlights : () ->
     $(".note").removeClass("highlight")

  # Helpers

  getRootScale : (root) ->
    noteIndex = _.indexOf ScaleMachine.scale, root.toUpperCase()
    scale     = []
    for i in [0..11]
      scale.push ScaleMachine.scale[noteIndex++]
      if noteIndex >= ScaleMachine.scaleLen
        noteIndex = 0
    scale





frets.ScaleMachine = ScaleMachine
