//view command function
function viewExecutor()
{
    console.log("view command executed");
};

//export -> providing access to mycli.js for using this file contents
module.exports={
    viewFn:viewExecutor
};