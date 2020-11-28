export function inputLoomRow() {
    return new Promise((resolve, reject) => {
        $("#next").on("click", function () {
            let input = { "weave": [0, 1, 0, 1, 0, 1], "colors": ["red", "blue", "red", "blue", "red", "blue"] };
            resolve(input);
        });
    });
}
