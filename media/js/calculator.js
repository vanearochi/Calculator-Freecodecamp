
$(document).ready(function(){
	console.log("Welcome Calculator!")
	var arrayNum =[];
	var arrAfterProcessing=[];
	var arrBeforeProcessing=[];
	var arrFinal=[];
	var reg1=/\d/;
	var reg2=/\*/
	var finalNum1=0;

	var pushingValues= function(val){
		if(reg1.test(val)===true){
			arrayNum.push(val)
					//console.log(arrayNum)
		}//end if in pushing values
		else{
			if(arrayNum.length>0){
				arrBeforeProcessing.push(arrayNum)
				arrayNum=[]
						//console.log(arrayNum.length)
				arrBeforeProcessing.push([val])
						//console.log(arrBeforeProcessing)
			}
			else{
				arrBeforeProcessing.pop();
				arrBeforeProcessing.push([val]);
						//console.log(arrBeforeProcessing)
			}
		}
			    //console.log(arrBeforeProcessing)
				//console.log(arraySymbol)
	};//end  pushingValues

	var passingValuesToProcessing = function(arr){
		if(arrayNum.length>0){
			arrBeforeProcessing.push(arrayNum);
			arrayNum=[];
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
	    	    if(arrayNum.length>0){
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

    var addingZeros = function(num){
    	var numFinal=1;
    	for(var j=0; j<num; j++ ){
    		numFinal=numFinal*10
    	} //end for addingZeros
    			//console.log(numFinal+" add0")
    	return numFinal

    }// end addingZeros

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

    }//end in MakingOp
   // processingNum(arraySymbol)

   
    
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

	multiplicationOperation([2,"*",2])

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
 $(".multiplication").on("click", function(){pushingValues("*")});

 $(".equal").on("click", function(){passingValuesToProcessing(arrBeforeProcessing)});

});//end ready
