
let vm = new Vue({
    el: "#canvas",
    methods: {
        onClick: function(e) {
            fill('red');
            circle(mouseX,mouseY, 10);
        }
    }
});

let youtube = new Vue({
    el: "#youtube"
});


let hint = new Vue({
    el: "#hint",
    methods: {
        onClick: function(e) {
        
        }
    }
});