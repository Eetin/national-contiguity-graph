/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(2);
	
	var canvas = document.querySelector("canvas"),
	    context = canvas.getContext("2d"),
	    width = canvas.width,
	    height = canvas.height;
	
	var simulation = d3.forceSimulation().force("charge", d3.forceManyBody().strength(-80)).force("link", d3.forceLink().id(function (d, i) {
	  return i;
	}).distance(50).strength(1)).force('x', d3.forceX()).force('y', d3.forceY());
	// .force('collide', d3.forceCollide(25))
	// .force("center", d3.forceCenter(width / 2, height / 2))
	
	d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function (error, graph) {
	  if (error) throw error;
	
	  var nodes = graph.nodes;
	  // const links = graph.links.map(d => ({ source: nodes[d.source], target: nodes[d.target] }))
	  var links = graph.links;
	
	  // function forceBoundingBox(alpha) {
	  //   for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
	  //     node = nodes[i];
	  //     if (node.x < 10) {
	  //       node.x = 10
	  //     } else if (node.x > width - 11) {
	  //       node.x = width - 11
	  //     }
	  //     if (node.y < 10) {
	  //       node.y = 10
	  //     } else if (node.y > height - 11) {
	  //       node.y = height - 11
	  //     }
	  //   }
	  // }
	
	  simulation.nodes(nodes).on("tick", ticked);
	
	  simulation.force("link").links(links);
	
	  d3.select(canvas).call(d3.drag().container(canvas).subject(dragsubject).on("start", dragstarted).on("drag", dragged).on("end", dragended));
	
	  function ticked() {
	    // forceBoundingBox(.1);
	
	    context.clearRect(0, 0, width, height);
	    context.save();
	    context.translate(width / 2, height / 2);
	
	    context.beginPath();
	    graph.links.forEach(drawLink);
	    context.strokeStyle = "#aaa";
	    context.stroke();
	
	    context.beginPath();
	    graph.nodes.forEach(drawNode);
	    context.fill();
	    context.strokeStyle = "#fff";
	    context.stroke();
	
	    context.restore();
	  }
	
	  function dragsubject() {
	    return simulation.find(d3.event.x - width / 2, d3.event.y - height / 2);
	  }
	});
	
	function dragstarted() {
	  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
	  d3.event.subject.fx = d3.event.subject.x;
	  d3.event.subject.fy = d3.event.subject.y;
	}
	
	function dragged() {
	  d3.event.subject.fx = d3.event.x;
	  d3.event.subject.fy = d3.event.y;
	}
	
	function dragended() {
	  if (!d3.event.active) simulation.alphaTarget(0);
	  d3.event.subject.fx = null;
	  d3.event.subject.fy = null;
	}
	
	function drawLink(d) {
	  context.moveTo(d.source.x, d.source.y);
	  context.lineTo(d.target.x, d.target.y);
	}
	
	function drawNode(d) {
	  context.moveTo(d.x + 3, d.y);
	  context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map