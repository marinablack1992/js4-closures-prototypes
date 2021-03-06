/******************************************************************************\
	#PROBLEM-01
\******************************************************************************/

function outer() {
    var name = 'Tyler';
    return function() {
      return 'The original name was ' + name;
    }
  }
  
  /****** INSTRUCTIONS PROBLEM 1 ******/
  /* Above you're given a function that returns another function which has a
  closure over the name variable. Invoke outer saving the return value into
  another variable called 'inner'. */
  
  //Once you do that, invoke inner.
  
  //Code Here
  
  var inner = outer();
  inner();
  
  
  
  
  
  
  
  
  
  /******************************************************************************\
      #PROBLEM-02
  \******************************************************************************/
  
  
  function callFriend(name) {
    function dial(number) {
      return 'Calling ' + name + ' at ' + number
    }
    return dial;
  }
  
  /****** INSTRUCTIONS PROBLEM 2 ******/
  /* Above you're given a callFriend function that returns the dial function.
  
  Store the result of invoking callFriend in a variable named callJake.
  
  When callJake is invoked with '435-555-9248', it returns 'Calling Jake at 435-555-9248' 
  (HINT: You will need to pass in arguments to both function invocations)
  */
  
    // Code Here

    var callJake = callFriend('Jake')
    callJake('435-555-9248')
    
  
  
  
  
  
  
  
  
  /******************************************************************************\
      #PROBLEM-03
  \******************************************************************************/
  
  /****** INSTRUCTIONS PROBLEM 3 ******/
  /* Write a function called makeCounter that makes the following code work
  properly. */
  
  function makeCounter(){
    var num = 0;
    return function addCount(){
    return ++num
    }
}
  
var count = makeCounter()
count(); //1
count(); //2
  
  
  
  
  
  
  
  
  /******************************************************************************\
      #PROBLEM-04
  \******************************************************************************/
  
  /****** INSTRUCTIONS PROBLEM 4 ******/
  /* Inside the function called counterFactory return two functions that implement
  up/down counter. The first function is called inc, this function is responsible
  for incrementing the value once and returning the updated value. The second function 
  is called dec, this function is responsible for decrementing the value by one 
  and returning the updated value. You will need to use the module pattern to 
  achieve this. Information on the module pattern available here: 
  http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
  */
  
  function counterFactory(value) {
    
    return {
      inc: function(){
        return ++value
        
      },
      
      dec: function(){
        return --value
        
      }
    }
  }
  
  var counter = counterFactory(10)
  counter.inc()
  counter.inc()
  counter.inc()
  counter.dec()

  
  
  
  
  
  /******************************************************************************\
      #PROBLEM-05
  \******************************************************************************/
  
  /****** INSTRUCTIONS PROBLEM 5 ******/
  /* Inside the motivation function create another function called message that
  will return the welcome text with the firstname and lastname. The final message should
  say "You're doing awesome, keep it up firstname lastname." 
  (Hint: don't forget to have a space between the firstname and lastname and a period
  // at the end of the sentence.)  */
  
  function motivation(firstname, lastname) {
    
      var welcomeText = 'You\'re doing awesome, keep it up ';
      
      return function message(){
        return `${welcomeText}${firstname} ${lastname}.`
      }
      return message;
    }

    var greeting = motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob.
    greeting();
  
  
  
  
  
  
  
  
  /******************************************************************************\
      #PROBLEM-06
  \******************************************************************************/
  
  /****** INSTRUCTIONS PROBLEM 6 ******/
  /* Inside the module's return object create a publicMethod function that
  invokes privateMethod (return the result). Invoke this by calling module.publicMethod(); outside
  the module scope */
  
  var module = (function() {
    var person = {
      name: "phillip",
      age: 29,
      location: "Utah"
    };
  
    function privateMethod(){
      return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
    }
  
    // Anything that is being returned is made public and can be invoked from
    // outside our lexical scope
    return {
      publicMethod: function(){
        return privateMethod();
      }
    };
  
  })();
  
  
  
  /******************************************************************************\
   #PROBLEM-07
   \******************************************************************************/
   function secretNumber() {
    var secret = 143;

    return {
      addToSecret: function(addSecret){
        return secret += addSecret
      },
      
      takeAwayFromSecret: function(minusSecret){
        return secret -= minusSecret
      }
    }
  }
  
  
  
  
  /******************************************************************************\
      #PROBLEM-08
  \******************************************************************************/
  
  /****** INSTRUCTIONS PROBLEM 8 ******/
  /* Here we have a for loop that will iterate as long as i is less than or equal
  to 5. What we need to do is console.log(i) so that it logs like so:
   0 second after call - log 0
   1 seconds after call - log 1
   2 seconds after call - log 2
   3 seconds after call - log 3
   4 seconds after call - log 4
   5 seconds after call - log 5
   However, because each call to console.log occurs after the loop has finished,
   the value of i has changed before the console.log executes. We'll need to use
   a closure to preserve a reference to i at the time of execution.
  
   Fix the code below to log the desired output.
   */
  
  function timeOutCounter(i) {
    for (var i = 0; i <= 5; i++) {
      let j = i
      setTimeout(function() {
          console.log(j)
      }, i * 1000)
    }
  }
  timeOutCounter();
  
  //remember what i is. use a closure. outer function needs parameters for inner function

  //setTimeout(function(){ alert("Hello"); }, 3000);