
 function launchBrowser(browserName) {      //Function declaration passing a parameter
  
     if (browserName==="chrome") {
         console.log("Supported browser is chrome");
    
 } else if(browserName === "edge"){
     console.log("Suported browser is edge");
    
 }else{
     console.log("Not a supported browser");
 }
 }
launchBrowser("firefox")




function runTests(){

    switch(testType){
        case "Unit":
            console.log("Unit");
            break;
        case "sanity":
            console.log("sanity");
            break;
        case "regression":
            console.log("regression");
            break;        
        default:
            console.log("smoke");
            break;
    }
}
let testType = "smoke"
runTests()