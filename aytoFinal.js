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
