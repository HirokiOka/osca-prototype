
let canvas = new Vue({
    el: "#canvas",
    data: {
        isActive: false,
        isDraw: false
    },
    methods: {
        onMouseover: function() {
            if (!this.isDraw) {
                this.isActive = false;
                youtube.isActive = true;
            }
        },
        onMouseout: function() {
            this.isActive = true;
        },
        onClick: function(e) {
            if (!this.isDraw) { return; }
                noStroke();
                fill('red');
                circle(mouseX, mouseY, 10);
                this.isActive = false;
                youtube.isActive = true;
                this.isDraw = false;
        }
    }
});

let youtube = new Vue({
    el: "#youtube",
    data: {
        isActive: false
    },
    methods: {
        onMouseover: function() {
            if (canvas.isDraw) { return; }
            this.isActive = true;
            canvas.isActive = false;
        },
        onMouseout: function () {
            if (canvas.isDraw) { return; }
            this.isActive = false;
            canvas.isActive = true;
        }
    }
});


let hint = new Vue({
    el: "#hint",
    methods: {
        onClick: function() {
            canvas.isDraw = true;
            canvas.isActive = true;
        }
    }
});