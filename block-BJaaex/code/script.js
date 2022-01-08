let input = document.querySelector('input[type="text"]');

let allMovie =[
    {
        name: " Mangal Pandey",
        watched: false,
    },
    {
        name: " Bagban ",
        watched: false,
    },
];


input.addEventListener('keyup',(event)=>{
    if (event.keyCode === 13) {
        console.log(event.target.value);
        allMovie.push({
            name: event.target.value,
            watched : false,
        })
    }
});
