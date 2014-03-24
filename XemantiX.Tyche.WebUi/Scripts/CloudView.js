(function () {
    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
    var endpoint = {
        anchor: [0.5, 0.5, 0, -1],
        connectorStyle: { lineWidth: 7, strokeStyle: "rgba(198,89,30,0.7)" },
        endpointsOnTop: true,
        isSource: true,
        maxConnections: 10,
        isTarget: true,
        dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
    },

	prepare = function (elId) {
	    jsPlumbCloud.initHover(elId);
	    jsPlumbCloud.initAnimation(elId);

	    return jsPlumb.addEndpoint(elId, endpoint);
	},

	discs = [];


    window.jsPlumbCloud = {
        init: function () {

            jsPlumb.Defaults.DragOptions = { cursor: 'wait', zIndex: 20 };
            jsPlumb.Defaults.Endpoint = ["Image", { url: "../img/littledot.png"}];
            jsPlumb.Defaults.Connector = ["Bezier", { curviness: 90}];
        },

        createDisc: function (name, score, relevance) {
            var d = document.createElement("div");

            var dText = document.createElement("p");
            dText.innerHTML = name;
            d.appendChild(dText);

            d.className = "bigdot";
            if (score > 0) {
                $(d).css("background-color", "green");
            }
            else if (score < 0) {
                $(d).css("background-color", "red");
            }
            else {
                $(d).css("background-color", "yellow");
            }
            var dim = relevance * 200;
            $(d).css("width", dim);
            $(d).css("height", dim);

            $("#cloud").append(d);
            var id = '' + ((new Date().getTime())), _d = jsPlumb.CurrentLibrary.getElementObject(d);
            jsPlumb.CurrentLibrary.setAttribute(_d, "id", id);
            //var w = screen.width - 162, h = screen.height - 162;
            var w = $("#cloud").width(), h = $("#cloud").height();
            var x = (0.2 * w) + Math.floor(Math.random() * (0.5 * w));
            var y = (0.2 * h) + Math.floor(Math.random() * (0.6 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        },

        addDisc: function (name, score, relevance) {
            var info = jsPlumbCloud.createDisc(name, score, relevance);
            var e = prepare(info.id);
            jsPlumb.draggable(info.id);
            discs.push(info.id);
        },

        reset: function () {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
        }
    };

    jsPlumbCloud.initHover = function (elId) {
        $("#" + elId).hover(
			function () { $(this).addClass("bigdot-hover"); },
			function () { $(this).removeClass("bigdot-hover"); }
		);
    };

    jsPlumbCloud.initAnimation = function (elId) {
        $("#" + elId).bind('click', function (e, ui) {
            if ($(this).hasClass("jsPlumb_dragged")) {
                $(this).removeClass("jsPlumb_dragged");
                return;
            }
        });
    };
})();

function InitCloudView() {
    jsPlumb.bind("ready", function () {

        // chrome fix.
        document.onselectstart = function () { return false; };

        // render mode
        var resetRenderMode = function (desiredMode) {
            var newMode = jsPlumb.setRenderMode(desiredMode);
            jsPlumbCloud.init();
        };

        resetRenderMode(jsPlumb.CANVAS);

    });
}

function AddEntity(name, score, relevance) {
    jsPlumbCloud.addDisc(name, score, relevance);
}