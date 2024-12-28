// step-1

// select all input to caputure data
const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
const minValue = document.getElementById('minValue');
const maxValue = document.getElementById('maxValue');

// step-2 

// update min input when slider changes
minRange.addEventListener('input',()=>{
   minValue.value = minRange.value;
   //console.log(typeof(minRange.value));
   if(parseInt(minRange.value) > parseInt(maxRange.value)){
        maxRange.value = minRange.value;
        maxValue.value = maxRange.value;
    }
});

// update max input when slider changes
maxRange.addEventListener('input',()=>{
    maxValue.value = maxRange.value;
    if(parseInt(maxRange.value) < parseInt(minRange.value)){
        minRange.value = maxRange.value;
        minValue.value = maxRange.value;
    }
});

// update min slider when input changes
minValue.addEventListener('input',()=>{
if(parseInt(minValue.value) < 0){
    minValue.value = 0;
}else if(parseInt(minValue.value) > parseInt(maxRange.value)){
    minValue.value = maxValue.value;
}
    minRange.value = minValue.value
});

// update max slider when input changes
maxValue.addEventListener('input',()=>{
if(parseInt(maxValue.value)>1000){
    maxValue.value = 1000;
}else if(parseInt(maxValue.value) < parseInt(minRange.value)){
    maxValue.value = minRange.value
}
    maxRange.value = maxValue.value
});



