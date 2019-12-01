let counter=0;
const intervalId = setInterval =>{
    console.log("hello after every 3 seconds");
    counter += 1;

    if (counter === 5) {
        console.log('done');
        clearInterval(intervalId);
    };
    
};
setInterval(intervalId,3000);


