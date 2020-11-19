export function inputLoomRow() {
    return new Promise((resolve, reject) => {
        $("#next").on("click", function(){
            //get user input (dumy stuff for now)
            let input = { "weave" : [0, 1, 0, 1, 0, 1], "colors" : ["red", "blue", "red", "blue", "red", "blue"] }
            resolve(input);
        });
    });
}
