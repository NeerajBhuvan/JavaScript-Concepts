//Example 1
// function z() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log("Example 1: ", i);
//         }, i * 1000)
//     }
// }
// z();

//Example 2
function x() {
    for (var i = 1; i <= 5; i++) {
        function y(x) {
            setTimeout(() => {
                console.log("Example 2: ", x);
            }, x * 1000)
        }
        y(i);
    }
}
x();