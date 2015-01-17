var Frets, frets;

Frets = (function() {
  function Frets($el) {
    this.fretboard = new frets.Fretboard($el);
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
    var fret, fullStrings, i, noteIndex, notes, scale, string, strings, totalFrets, _i, _j, _k, _len, _results;
    scale = ['A', 'As', 'B', 'C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs'];
    strings = ['E', 'A', 'D', 'G', 'B', 'E'];
    totalFrets = 12;
    fullStrings = [];
    for (_i = 0, _len = strings.length; _i < _len; _i++) {
      string = strings[_i];
      notes = [];
      noteIndex = _.indexOf(scale, string);
      for (i = _j = 0; 0 <= totalFrets ? _j <= totalFrets : _j >= totalFrets; i = 0 <= totalFrets ? ++_j : --_j) {
        notes.push(scale[noteIndex++]);
        if (noteIndex >= scale.length) {
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
    console.log("hullo I'm a " + note);
  }

  return Note;

})();

frets.Note = Note;
