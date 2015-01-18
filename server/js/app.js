var Frets, frets;

Frets = (function() {
  function Frets($el) {
    this.fretboard = new frets.Fretboard($el);
    this.scaleMachine = new frets.ScaleMachine($el);
  }

  return Frets;

})();

frets = {};

frets.Frets = Frets;

var Fret;

Fret = (function() {

  /*
    @el      - HTML parent
    @fretNum - Fret Number
    @notes   - Array of notes (Low to High)
   */
  function Fret($el, fretNum, notes) {
    var node;
    this.fretNum = fretNum;
    node = jadeTemplate['fret']({
      fretNum: "f" + this.fretNum
    });
    this.$node = $(node);
    $el.append(this.$node);
    this.addNotes(notes);
  }

  Fret.prototype.addNotes = function(notes) {
    var note, nt, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = notes.length; _i < _len; _i++) {
      note = notes[_i];
      _results.push(nt = new frets.Note(this.$node, note));
    }
    return _results;
  };

  return Fret;

})();

frets.Fret = Fret;

var Fretboard;

Fretboard = (function() {
  function Fretboard($el) {
    this.addBoard($el);
    this.addNotes();
  }

  Fretboard.prototype.addBoard = function($el) {
    var node;
    node = jadeTemplate['fretboard']({});
    this.$node = $(node);
    return $el.append(this.$node);
  };

  Fretboard.prototype.addNotes = function() {
    var fret, fullStrings, i, noteIndex, notes, string, strings, totalFrets, _i, _j, _k, _len, _results;
    strings = ['E', 'A', 'D', 'G', 'B', 'E'];
    totalFrets = 20;
    fullStrings = [];
    strings.reverse();
    for (_i = 0, _len = strings.length; _i < _len; _i++) {
      string = strings[_i];
      notes = [];
      noteIndex = _.indexOf(ScaleMachine.scale, string);
      for (i = _j = 0; 0 <= totalFrets ? _j <= totalFrets : _j >= totalFrets; i = 0 <= totalFrets ? ++_j : --_j) {
        notes.push(ScaleMachine.scale[noteIndex++]);
        if (noteIndex >= ScaleMachine.scale.length) {
          noteIndex = 0;
        }
      }
      fullStrings.push(notes);
    }
    string = null;
    i = null;
    _results = [];
    for (i = _k = 0; 0 <= totalFrets ? _k <= totalFrets : _k >= totalFrets; i = 0 <= totalFrets ? ++_k : --_k) {
      _results.push(fret = new frets.Fret(this.$node, i, [fullStrings[0][i], fullStrings[1][i], fullStrings[2][i], fullStrings[3][i], fullStrings[4][i], fullStrings[5][i]]));
    }
    return _results;
  };

  return Fretboard;

})();

frets.Fretboard = Fretboard;

var Note;

Note = (function() {
  function Note($el, note) {
    var node;
    node = jadeTemplate['note']({
      note: note
    });
    this.$node = $(node);
    $el.append(this.$node);
  }

  return Note;

})();

frets.Note = Note;

var ScaleMachine;

ScaleMachine = (function() {
  ScaleMachine.scale = ['C', 'CS', 'D', 'DS', 'E', 'F', 'FS', 'G', 'GS', 'A', 'AS', 'B'];

  ScaleMachine.scaleLen = 12;

  ScaleMachine.majorPentatonic = [0, 2, 4, 7, 9];

  ScaleMachine.minorPentatonic = [0, 3, 5, 7, 10];

  ScaleMachine.majorTriads = [0, 4, 7];

  ScaleMachine.minorTriads = [0, 3, 7];

  function ScaleMachine($el) {
    this.$el = $el;
    frets.scaleMachine = this;
  }

  ScaleMachine.prototype.showMinorPentatonic = function(root) {
    return this.getScale(root, ScaleMachine.minorPentatonic);
  };

  ScaleMachine.prototype.showMajorPentatonic = function(root) {
    return this.getScale(root, ScaleMachine.majorPentatonic);
  };

  ScaleMachine.prototype.showMajorTriad = function(root) {
    return this.getScale(root, ScaleMachine.majorTriads);
  };

  ScaleMachine.prototype.showMinorTriad = function(root) {
    return this.getScale(root, ScaleMachine.minorTriads);
  };

  ScaleMachine.prototype.getScale = function(root, scaleMask) {
    var fullScale, index, note, scale, _i, _j, _len, _len1, _results;
    fullScale = this.getRootScale(root);
    scale = [];
    for (_i = 0, _len = scaleMask.length; _i < _len; _i++) {
      index = scaleMask[_i];
      scale.push(fullScale[index]);
    }
    this.clearHighlights();
    _results = [];
    for (_j = 0, _len1 = scale.length; _j < _len1; _j++) {
      note = scale[_j];
      _results.push(this.highlightNote(note));
    }
    return _results;
  };

  ScaleMachine.prototype.highlightNote = function(note, clearAll) {
    if (clearAll == null) {
      clearAll = false;
    }
    if (clearAll) {
      this.clearHighlights();
    }
    $(".note." + note).addClass('highlight');
    return 0;
  };

  ScaleMachine.prototype.clearHighlights = function() {
    return $(".note").removeClass("highlight");
  };

  ScaleMachine.prototype.getRootScale = function(root) {
    var i, noteIndex, scale, _i;
    noteIndex = _.indexOf(ScaleMachine.scale, root.toUpperCase());
    scale = [];
    for (i = _i = 0; _i <= 11; i = ++_i) {
      scale.push(ScaleMachine.scale[noteIndex++]);
      if (noteIndex >= ScaleMachine.scaleLen) {
        noteIndex = 0;
      }
    }
    return scale;
  };

  return ScaleMachine;

})();

frets.ScaleMachine = ScaleMachine;
