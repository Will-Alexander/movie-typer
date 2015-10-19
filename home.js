$( document ).ready(function() {
	console.log( 'ready!' );
});

var key_object = {};
var timestamp = 0;

var time_difference = function( new_timestamp ) {
	var temp_time = timestamp;
	timestamp = new_timestamp;
	return new_timestamp - temp_time;
}


// Records all of the keystrokes in the input field
// Throws them into the key_object, with the keys being the
// key pressed, and the value being an array of the time
// differences between the key's press and it's predecessor's 
// press.
$( "#your_code" ).keydown( function( event ) {

	// WRITE THIS WRITE THIS WRITE THIS
	dealWithThis( event );

  // NOTE: the following commented-out code will be superceded by the dealWillThis() function.

	/*
	// keys that have behavior we don't want.
	// Enter, Tab, and Alt, respectively.
	bad_vals = [ 13, 9, 18 ];

	// If you press a key with a behavior we don't want...
	if( bad_vals.indexOf( event.which ) > -1 ) {

		// Shut 'er down, boys.
		//event.preventDefault();
	}
	*/

	// Let's throw the key:value pairs into an object.
	var keystroke = event.which.toString();

	// Let's calculate the time difference.
	var time_diff = time_difference( event.timeStamp );

	// Check if the key has already been pressed before.
	// If it's too big, just ignore it.
	if( time_diff < 1000 ) {
		if( key_object.hasOwnProperty( keystroke ) ) {
			key_object[keystroke].push( time_diff );
		}
		else {
			key_object[ keystroke ] = [ time_diff ];
	 	}
	}

});

// This logs the keys and an array of the time differences between
// hitting it and hitting the previous key. Used for testing.
$( '#test' ).click( function() {
	for( var key in key_object ) {
		if( key_object.hasOwnProperty( key ) ) {
			console.log( String.fromCharCode( key ) + ' -> ' + key_object[ key ] );
		}
	}
});

// This will deal with the behavior of keys that do things we don't like.
// For example, tab. 
// Also will help with the recording of characters that use multiple
// keystrokes like {} or !
var dealWithThis = function( event ) {

	switch( event.which ) {
		case 9:
			event.preventDefault();

			//var text = document.getElementById( 'your_code' );
			//text.innerHTML = '\t' + text.innerHTML;

			break;
		default:
			break;
	}
}
