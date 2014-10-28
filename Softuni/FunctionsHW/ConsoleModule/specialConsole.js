//%s converts the argument to a String value
//%d converts the argument to a double value
//%i converts the argument to a integer value
//%f converts the argument to a floating point number
//%o converts the argument to an Object
var specialConsole = (function(){

    function writeLine(message, values){
        // TODO: print on the console and return the result as string
        if(arguments.length > 1){
            var pattern = /{\d*}/g;
            message = message.replace(pattern, "%s");

            console.log.apply(this, [message, values, values, values]);
        } else{
            console.log(message);
        }
    }

    function writeError(){
        // TODO:
    }

    function writeWarning(){
        // TODO:
    }

    var newConsole = {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    }

    return newConsole;
}());

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0} {1}", "mechka", "hello");
//specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
//specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
