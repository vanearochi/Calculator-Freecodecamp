
$(document).ready(function(){
	console.log("Welcome Calculator!")
	var arrNum =[];
	var arrAfterProcessing=[];
	var arrBeforeProcessing=[];
	var arrFinal=[];
	var reg1=/\d/;
	var reg2=/\*/
	var finalNum1=0;

	//Function push every clicked # or sign to an array
	var pushingValues= function(val){
		if(reg1.test(val)===true){
			arrNum.push(val)
					console.log(arrBeforeProcessing)
		}//end if in pushing values
		
		else{
			if(arrNum.length>0){
				arrBeforeProcessing.push(arrNum)
				arrNum=[]
						//console.log(arrNum.length)
				arrBeforeProcessing.push([val])
						console.log(arrBeforeProcessing)
			}
			else{
				arrBeforeProcessing.pop();
				arrBeforeProcessing.push([val]);
						console.log(arrBeforeProcessing)
			}
		}

			    //console.log(arrBeforeProcessing)
				//console.log(arraySymbol)
	};//end  pushingValues

	//Function pass to different functions the arrays that need to be processed to give the result. 
	//It interacts with 2 functions: makingop and multiplication op
	var passingValuesToProcessing = function(arr){
		if(arrNum.length>0){
			arrBeforeProcessing.push(arrNum);
			arrNum=[];
					//console.log(arrBeforeProcessing)
		}//end if 1 inside passingValues

		var arrBeforeProcessingLength= arrBeforeProcessing.length-1;
		for(var k=0; k<=arrBeforeProcessingLength; k++){
			processingNum(arrBeforeProcessing[k]);
		}
		arrBeforeProcessing=[];

		
		if(arrAfterProcessing.indexOf("*")===-1){
			makingOperations(arrAfterProcessing)
		}
		else{
			multiplicationOperation(arrAfterProcessing)
		}
				//console.log(arrBeforeProcessing)
				//console.log(arrAfterProcessing)
		//arrBeforeProcessing.push
	}


	//Function that join numbers without turning them in to a string interacting with function (addingZeros) that add zeros to each number depending
	//on it's possition then add it to an array that will be processed into a result
    var processingNum = function(arr){
    	var arrIndex =arr.length-1;
    	var temporalNum=0;
    	var numForAddingZeros=0;
    	
    	for(var i=0; i<=arrIndex; i++){
			if(reg1.test(arr[i])===true){
	    		numForAddingZeros=arrIndex-i
	    		temporalNum =addingZeros(numForAddingZeros)*arr[i]
	    		finalNum1=+finalNum1+temporalNum

			    		// console.log(temporalNum)
			    		// console.log(numForAddingZeros+"a")
			    		// console.log(arr[i]+"b")
			    		 		//console.log("final " + finalNum1)
			    if(i===arrIndex){
			    	arrAfterProcessing.push(finalNum1);
	    			finalNum1=0
	    					//console.log(arrAfterProcessing)
			    }// endif in if in ProcessingNum		 
	    	}// end if in processingNum
	    	else{
	    	    if(arrNum.length>0){
		    		arrAfterProcessing.push(finalNum1);
		    		finalNum1=0
		    		arrAfterProcessing.push(arr[i])
		    				//console.log(arrAfterProcessing)
	    		}//end if in else in ProcessingNum
	    		else{
	    			arrAfterProcessing.push(arr[i])
	    		}//end else in else in ProcessingNum

	    	}//end else in for in processingNum 
	    }//end for  in processingNum
	}//end processingNum

	//Functions that add zeros to number
    var addingZeros = function(num){
    	var numFinal=1;
    	for(var j=0; j<num; j++ ){
    		numFinal=numFinal*10
    	} //end for addingZeros
    			//console.log(numFinal+" add0")
    	return numFinal

    }// end addingZeros

    //this function process an array and makes the operations that are into it. It does +,-,/ . The multiplication it's made in other function
    //since it has priority.
    var makingOperations = function(arr){
    	var result=0;
    	var temporal=0;
    	if(arr.length===1){
    		result = arr[0]
    	}
    	for (var i =0; i <= arr.length-1; i++) {
    	 if(reg1.test(arr[i])===false){
    	 	if(arr[i]==="+"){
    	 		if(i<3){
	    	 		temporal=arr[i-1]+arr[i+1]
	    	 				//console.log(temporal)
	    	 		result=result+temporal
    	 		}//end if in if in if in forin MakingOp
    	 		else{
    	 			result=result+arr[i+1]
    	 		}//end else in if in if in for in Making Op
    	 	}//end if in if in for in MakingOP
    	    else if(arr[i]==="-"){
    	    	if(i<3){
	    	 		temporal=arr[i-1]-arr[i+1]
	    	 				//console.log(temporal)
	    	 		result=temporal
    	 		}//end else if in if in if in forin MakingOp
    	 		else{
    	 			result=result-arr[i+1]
    	 		}//end else in else if in if in for in Making Op
    	    }//end else if in if in for in makingop
    	    else if(arr[i]==="/"){
    	    	if(i<3){
	    	 		temporal=arr[i-1]/arr[i+1]
	    	 				//console.log(temporal)
	    	 		result=temporal
    	 		}//end else if in if in if in forin MakingOp
    	 		else{
    	 			result=result/arr[i+1]
    	 		}//end else in else if in if in for in Making Op
    	    }//end else if in if in for in making op

    	 }//end if in for in Making Op 
    	}//end in for in MakingOP
    	console.log(result)
    	arrNum=[result]
    	arrAfterProcessing=[]

    }//end in MakingOp
   // processingNum(arraySymbol)

   
    //This function make the multiplications in the array and it calls the making operations function if there are more operation
   var multiplicationOperation=function(arr){
   	var temporal=0;
   	var reference=0;
   		for (var i = arr.length - 1; i >= 0; i--) {
   			if(arr[i]===("*")){
   				if (arr[i+2]===("*")){
   					temporal=arrFinal.shift()*arr[i-1];
   					arrFinal.unshift(temporal)
   					console.log("finalif "+arrFinal)
   					i--
   				}//if in if in for in multop
   				else{	
   				temporal = arr[i-1]*arr[i+1]
					arrFinal.shift();
   				    arrFinal.unshift(temporal)
   				    i--
   				    console.log("finalelsedentroif"+arrFinal)
   				}//end else in if in for in multop
   			}//end if in for in multop
   		 else{
   		 	arrFinal.unshift(arr[i])
   		 	console.log("finalelse"+arrFinal)
   		 }
 		};//end for in mult op

 		makingOperations(arrFinal)

 		console.log(arrFinal)

   // 		for(var i =0; i<=arr.length-1;i++){
			// if(arr[i]===("*")){
			// 	if(i===1){
			// 		temporal = arr[i-1]*arr[i+1]
			// 		arrFinal.pop();
   // 				    arrFinal.push(temporal)
   // 				    i++
			// 	}
			// 	if(arrFinal.length===1){
			// 		temporal=arrFinal[0]*arr[i+1]
			// 		arrFinal.pop();
   // 				    arrFinal.push(temporal)
   // 				    i++
			// 	}

   // 				temporal = arr[i-1]*arr[i+1]
   				
   				
   // 			}//end if in for in multiOP
   // 			else{
   // 				arrFinal.push(arr[i])

   // 			}//end else in for in multiOP
   // 					//console.log(arrFinal)
   // 		} //end in for in multop
   		

   // 		makingOperations(arrFinal)
   // 		console.log(arrFinal)
   	
	}//end in multiplicationOperation

	//multiplicationOperation([2,"*",2])
	//Function that reset all the values to zero when AC clicked
	 var resetEverythingToZero = function(){
	 	 arrNum =[];
		 arrAfterProcessing=[];
		 arrBeforeProcessing=[];
		 arrFinal=[];
	 }

	 //Function that pop the last value entered and backwards 
	 var poppingLastValue = function(arr){
	 	if(arrNum.length===0 && arr.length>0){
	 		arr.pop();
	 		arrNum=arr[arr.length-1]
	 		arr.pop();
	 		console.log(arrNum)
	 		console.log(arr)
	 	}
	 else{
			console.log(arrNum)
	 		arrNum.pop();
	 	
	 		
	 	}
	 	

	 }

	 

 $(".one").on("click", function(){pushingValues(1)});
 $(".two").on("click", function(){pushingValues(2)});
 $(".three").on("click", function(){pushingValues(3)});
 $(".four").on("click", function(){pushingValues(4)});
 $(".five").on("click", function(){pushingValues(5)});
 $(".six").on("click", function(){pushingValues(6)});
 $(".seven").on("click", function(){pushingValues(7)});
 $(".eight").on("click", function(){pushingValues(8)});
 $(".nine").on("click", function(){pushingValues(9)});
 $(".plus").on("click", function(){pushingValues("+")});
 $(".substraction").on("click", function(){pushingValues("-")});
 $(".division").on("click", function(){pushingValues("/")});
 $(".dot").on("click", function(){pushingValues(".")});
 $(".ac").on("click", function(){resetEverythingToZero()});
 $(".ce").on("click", function(){poppingLastValue(arrBeforeProcessing)});
 $(".equal").on("click", function(){passingValuesToProcessing(arrBeforeProcessing)});

});//end ready
