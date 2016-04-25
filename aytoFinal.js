makeSet = function(guys, girls){
		//make all the pairs from a set of guys and a set of girls 
	    var allPairs = [];
	    for (var i = 0; i < guys.length; i++) {
	        var pair = [guys[i],girls[i]];
	        allPairs.push(pair);
	    }
	    return allPairs;
	}
//guys = ['a','b','c'];
//girls = ['x', 'y', 'z'];
//badPairs = [['a','x'],['a','z']];

var guys = ['Alec','Austin','Chuck','Connor','Devin','Hunter','Mike','Nelson','Tyler','Zak'];
var girls = ['Amanda','Britni','Chelsey','Cheyenne','Hannah','Kayla','Kiki','Melanie','Rashida','Stacey'];
var badPairs = [['Alex','Chelsey'], ['Austin','Chelsey'], ['Austin','Kiki'], 
['Chuck','Birtni'], ['Chuck','Chelsey'], ['Chuck','Hannah'],
['Chuck','Kiki'],['Connor', 'Amanda'], ['Connor', 'Brinti'],
['Connor','Cheyenne'], ['Connor','Hannah'], ['Connor','Kayla'], 
['Connor','Kiki'], ['Connor','Melanie'], ['Connor','Rashida'], 
['Connor','Stacey'],  ['Devin','Chelsey'],['Devin','Kiki'], 
['Devin','Melanie'], ['Hunter','Chelsey'], ['Hunter','Kiki'],
['Hunter','Stacey'], ['Mike','Amanda'], ['Mike','Chelsey'], 
['Nelson','Chelsey'], ['Nelson','Cheyenne'], ['Tyler','Chelsey'], 
['Tyler','Rashida'], ['Zak','Britni'], ['Zak','Chelsey'], ['Zak','Kiki']
]

set = makeSet(guys, girls);

permutations = function(girls) {
	 var results = [];

	 function permute(arr, memo) {
	  //got some stackoverflow help :) 
	   var cur, memo = memo || [];

	  for (var i = 0; i < arr.length; i++) {
    	cur = arr.splice(i, 1);
	    if (arr.length === 0) {
	        results.push(memo.concat(cur));
	      }
	      permute(arr.slice(), memo.concat(cur));
	      arr.splice(i, 0, cur[0]);
	    }

	    return results;
	  	}

  		return permute(girls);
	}
  
gPermu = permutations(girls)[1];  

var allGirlCombos = permutations(girls);
	allSets = function(allGirlCombos, guys){
		var allSets = [];
		for (var i = 0; i < allGirlCombos.length; i++) {
			allSets.push(makeSet(guys, allGirlCombos[i]));
		}
		return allSets;
	}
allSets = allSets(allGirlCombos, guys);

	containsPiar = function(aSet, badPairs){
		for (var i = 0; i<badPairs.length; i++){
			for (var j = 0; j<aSet.length; j++){
				if (aSet[j] == badPairs[i]){
					return true;
				}

			}

		}
		return false;
	}
val = containsPiar(set, badPairs);

    realSets = function(allSets, badPairs){
    	var goodSets = [];
    	for  (var i = 0; i<badPairs.length; i++){
    		var badSet = containsPiar(allSets[i], badPairs);
    		if (badSet == false){
    			goodSets.push(allSets[i]);
    		}
    	}
    	return goodSets;
    }
    
good = realSets(allSets, badPairs);    


pairDict = function(guys, girls){
      var pairsDict = new Array();
    	var pairs = makeSet(guys, girls);
    	for(var i = 0; i < pairs.length; i++) {
      	var pair = pairs[i];
    		pairsDict[pair] = 0;
    	}
    	return pairsDict;
   }
    
dictP = pairDict(guys, girls);

updateDict = function(pairsDict, realSets){	
    	for(var i = 0; i < realSets.length; i++){
      	for(var j = 0; j < realSets[0].length; j++){
    				pairsDict[realSets[i][j]] += 1; 
    	}
      }
      return pairsDict;
      }

var pairs = makeSet(guys, girls);      
realDictP = updateDict(dictP, good);  

   pairChance = function(guy, girl, realDictP, guys, girls){
   	 var pair = [guy, girl];
     var allSetsLen = realSets.length; 
     var score = realDictP[pair];

     return score/allSetsLen;

          }
var calc = pairChance('Alex','Hannah', realDictP, guys, girls);

alert("hi");
document.getElementById("test").innerHTML = calc;


makeTable = function(guys, girls){
	var table = document.getElementById("pairsTable");
    for(var i = 0; i < realSets.length; i++){
	    var row = table.insertRow(i);
	    var cell1 = row.insertCell(0);
	    var cell2 = row.insertCell(1);
	    var cell3 = row.insertCell(2);
	    var cell4 = row.insertCell(3);
	    var cell5 = row.insertCell(4);
	    var cell6 = row.insertCell(5);
	    var cell7 = row.insertCell(6);
	    var cell8 = row.insertCell(7);
	    var cell9 = row.insertCell(8);
	    var cell10 = row.insertCell(9);
	    var cell11 = row.insertCell(10);
	    cell1.innerHTML = guys[i],girls[0]
	    cell2.innerHTML = guys[i],girls[1]
	    cell3.innerHTML = guys[i],girls[2]
	    cell4.innerHTML = guys[i],girls[3]
	    cell5.innerHTML = guys[i],girls[4]
	    cell6.innerHTML = guys[i],girls[5]
	    cell7.innerHTML = guys[i],girls[6]
	    cell8.innerHTML = guys[i],girls[7]
	    cell9.innerHTML = guys[i],girls[8]
	    cell10.innerHTML = guys[i],girls[9]

}
