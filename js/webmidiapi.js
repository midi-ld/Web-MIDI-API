console.log('Starting Web MIDI API stuff...');

var midi = null;  // global MIDIAccess object

function listInputsAndOutputs(midiAccess) {
  for (var input in midiAccess.inputs) {
    console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
      "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
      "' version:'" + input.version + "'" );
  }

  for (var output in midiAccess.outputs) {
    console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
      "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
      "' version:'" + output.version + "'" );
  }
}

navigator.requestMIDIAccess({sysex: true}).then( function(midiAccess){
  console.log("MIDI ready!");
  listInputsAndOutputs(midiAccess);
}, function(){
  conosle.log("Failed to get MIDI access - " + msg);
} );

console.log('All done, bye!');
