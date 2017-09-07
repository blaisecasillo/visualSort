// Functions to aid in sketch.js

// Function that will run through one step of a bubble sort
// through each fram of draw.
function bubbleStep(items, rep){
	if(rep < length - 1 && items[rep] > items[rep+1]){
		swap(items, rep, rep+1);
	}
}

// Function that will run through one step of a selection sort
// through each fram of draw.
function selectionStep(items, rep){
	//set minimum to this position
    minim = rep;

	//check the rest of the array to see if anything is smaller
	for (j=rep+1; j < length; j++){
		if (items[j] < items[minim]){
			minim = j;
		}
	}

	//if the minimum isn't in the position, swap it
	if (rep != minim){
		swap(items, rep, minim);
	}
	
}

// Randomizes the items in the array. Serves as a "reset" button
function randomize(items){
	for(i = 0; i < length; i++){
		items[i] = (Math.random()*300);
	}
	rep = 0;
}

// Simple function to aid in swapping items in an array
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

// Determines if an array is sorted
function isSorted(a) {
	var sorted = true;
	for(i = 0; i < a.length-1; i++){
		if(a[i] > a[i+1]){
			sorted = false;
		}
	}
	return sorted;
}

// Function used for the "bubble" button to switch
// the current mode of sorting.
function setBubble(){
	mode = "bubble";
	rep = 0;
	randomize(r);
}

// Function used for the "selection" button to switch
// the current mode of sorting.
function setSelection(){
	mode = "selection";
	rep = 0;
	randomize(r);
}