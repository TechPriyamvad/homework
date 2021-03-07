//help command function
function helpExecutor()
{
    console.log(`List of all the commands:
    1. view <dir-name> --tree
    2. view <dir-name> --flat
    3. organize <dir-name>/
    4. help `);
};

//export -> providing access to mycli.js for using this file contents
module.exports={
    helpFn:helpExecutor
};