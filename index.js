// Code your solution in this file!

/*
returnFirstTwoDrivers() 
    -Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. 
    -The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
*/
    const returnFirstTwoDrivers = function(arrayOfDrivers) {
        return arrayOfDrivers.slice(0,2);
    }
/*
returnLastTwoDrivers() 
    —Declare a variable with const that is assigned an anonymous function. 
    -The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
*/
    const returnLastTwoDrivers = function(arrayOfDrivers) {
        return arrayOfDrivers.slice(2,4)
    }
/*
selectingDrivers 
—This is an array containing two elements: the two functions that we previously defined 
    --> alt: array which contains (returnFirstTwoDrivers() and returnLastTwoDrivers()).
*/
    let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    selectingDrivers;

/*
createFareMultiplier() 
—This is a higher-order function that takes in one argument, an integer
- Returns a function that will multiply a fare for a ride accordingly. 
        
    --> For example, if createFareMultiplier() receives an argument of 4, 
    it will return a function that takes in a fare as an argument and quadruples the fare.
*/

function createFareMultiplier(number){
return function(fare){
    return number*fare;
}
}

/*
fareDoubler() 
—Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
-Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its 
lone argument and doubles it.
*/

/* const fareDoubler = (fare) => {
    return fare*2;
}

fareDoubler(fare);
*/

const fareDoubler = createFareMultiplier(2);

/*
fareTripler() 
—Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
-Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its 
lone argument and triples it.
*/

/* good logic in pseudocode, but doesn't passs the test: 

const frog = function fareTripler(fare) {
    return createFareMultiplier(fare, number);
}

createFareMultiplier(fare, 3);
fareTripler(fare);
*/

const fareTripler = createFareMultiplier(3);


/*
selectDifferentDrivers() 
— This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() 
or returnLastTwoDrivers() function. 
-Based on these two arguments, selectDifferentDrivers() will return either the first two drivers 
or the last two drivers.
*/

function selectDifferentDrivers(arrayofDrivers, functions) {
    if (functions === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayofDrivers);
    } else if (functions === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayofDrivers)
    }
}