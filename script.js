myArray = [];
resultArray = [];

function generateRandom(){
	for(let i=0; i<5; i++){
		myArray.push(Math.floor(Math.random()*10)+1);
	}
	getUserInput();
}

function getUserInput(){
	userInput=prompt("Guess a number between 1 and 10...");
	compareToArr();
}

function compareToArr(){
	for(let i=0;i<myArray.length;i++){
		if(myArray[i]==userInput){
			resultArray.push(myArray[i]);
		}
		else{
			;
		}
	}
	var results=resultArray.length;
	if(results==0){
		alert("Your guess does not appear in the Array.\nYour guess: "+userInput+"\nArray: "+myArray.toString());
	}
	else if(results==1){
		alert("Your guess appears once in the Array.\nYour guess: "+userInput+"\nArray: "+myArray.toString());
	}
	else{
		alert("Your guess appears "+results+" times in the Array.\nYour guess: "+userInput+"\nArray: "+myArray.toString());
	}
}
		