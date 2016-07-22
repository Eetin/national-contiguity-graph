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
	
	var spriteWidth = 16,
	    spriteHeight = 11;
	
	var spritePositions = {
	  'ad': { x: 16, y: 0 },
	  'ae': { x: 32, y: 0 },
	  'af': { x: 48, y: 0 },
	  'ag': { x: 64, y: 0 },
	  'ai': { x: 80, y: 0 },
	  'al': { x: 96, y: 0 },
	  'am': { x: 112, y: 0 },
	  'an': { x: 128, y: 0 },
	  'ao': { x: 144, y: 0 },
	  'ar': { x: 160, y: 0 },
	  'as': { x: 176, y: 0 },
	  'at': { x: 192, y: 0 },
	  'au': { x: 208, y: 0 },
	  'aw': { x: 224, y: 0 },
	  'az': { x: 240, y: 0 },
	  'ba': { x: 0, y: 11 },
	  'bb': { x: 16, y: 11 },
	  'bd': { x: 32, y: 11 },
	  'be': { x: 48, y: 11 },
	  'bf': { x: 64, y: 11 },
	  'bg': { x: 80, y: 11 },
	  'bh': { x: 96, y: 11 },
	  'bi': { x: 112, y: 11 },
	  'bj': { x: 128, y: 11 },
	  'bm': { x: 144, y: 11 },
	  'bn': { x: 160, y: 11 },
	  'bo': { x: 176, y: 11 },
	  'br': { x: 192, y: 11 },
	  'bs': { x: 208, y: 11 },
	  'bt': { x: 224, y: 11 },
	  'bv': { x: 240, y: 11 },
	  'bw': { x: 0, y: 22 },
	  'by': { x: 16, y: 22 },
	  'bz': { x: 32, y: 22 },
	  'ca': { x: 48, y: 22 },
	  'catalonia': { x: 64, y: 22 },
	  'cd': { x: 80, y: 22 },
	  'cf': { x: 96, y: 22 },
	  'cg': { x: 112, y: 22 },
	  'ch': { x: 128, y: 22 },
	  'ci': { x: 144, y: 22 },
	  'ck': { x: 160, y: 22 },
	  'cl': { x: 176, y: 22 },
	  'cm': { x: 192, y: 22 },
	  'cn': { x: 208, y: 22 },
	  'co': { x: 224, y: 22 },
	  'cr': { x: 240, y: 22 },
	  'cu': { x: 0, y: 33 },
	  'cv': { x: 16, y: 33 },
	  'cw': { x: 32, y: 33 },
	  'cy': { x: 48, y: 33 },
	  'cz': { x: 64, y: 33 },
	  'de': { x: 80, y: 33 },
	  'dj': { x: 96, y: 33 },
	  'dk': { x: 112, y: 33 },
	  'dm': { x: 128, y: 33 },
	  'do': { x: 144, y: 33 },
	  'dz': { x: 160, y: 33 },
	  'ec': { x: 176, y: 33 },
	  'ee': { x: 192, y: 33 },
	  'eg': { x: 208, y: 33 },
	  'eh': { x: 224, y: 33 },
	  'england': { x: 240, y: 33 },
	  'er': { x: 0, y: 44 },
	  'es': { x: 16, y: 44 },
	  'et': { x: 32, y: 44 },
	  'eu': { x: 48, y: 44 },
	  'fi': { x: 64, y: 44 },
	  'fj': { x: 80, y: 44 },
	  'fk': { x: 96, y: 44 },
	  'fm': { x: 112, y: 44 },
	  'fo': { x: 128, y: 44 },
	  'fr': { x: 144, y: 44 },
	  'ga': { x: 160, y: 44 },
	  'gb': { x: 176, y: 44 },
	  'gd': { x: 192, y: 44 },
	  'ge': { x: 208, y: 44 },
	  'gf': { x: 224, y: 44 },
	  'gg': { x: 240, y: 44 },
	  'gh': { x: 0, y: 55 },
	  'gi': { x: 16, y: 55 },
	  'gl': { x: 32, y: 55 },
	  'gm': { x: 48, y: 55 },
	  'gn': { x: 64, y: 55 },
	  'gp': { x: 80, y: 55 },
	  'gq': { x: 96, y: 55 },
	  'gr': { x: 112, y: 55 },
	  'gs': { x: 128, y: 55 },
	  'gt': { x: 144, y: 55 },
	  'gu': { x: 160, y: 55 },
	  'gw': { x: 176, y: 55 },
	  'gy': { x: 192, y: 55 },
	  'hk': { x: 208, y: 55 },
	  'hm': { x: 224, y: 55 },
	  'hn': { x: 240, y: 55 },
	  'hr': { x: 0, y: 66 },
	  'ht': { x: 16, y: 66 },
	  'hu': { x: 32, y: 66 },
	  'ic': { x: 48, y: 66 },
	  'id': { x: 64, y: 66 },
	  'ie': { x: 80, y: 66 },
	  'il': { x: 96, y: 66 },
	  'im': { x: 112, y: 66 },
	  'in': { x: 128, y: 66 },
	  'io': { x: 144, y: 66 },
	  'iq': { x: 160, y: 66 },
	  'ir': { x: 176, y: 66 },
	  'is': { x: 192, y: 66 },
	  'it': { x: 208, y: 66 },
	  'je': { x: 224, y: 66 },
	  'jm': { x: 240, y: 66 },
	  'jo': { x: 0, y: 77 },
	  'jp': { x: 16, y: 77 },
	  'ke': { x: 32, y: 77 },
	  'kg': { x: 48, y: 77 },
	  'kh': { x: 64, y: 77 },
	  'ki': { x: 80, y: 77 },
	  'km': { x: 96, y: 77 },
	  'kn': { x: 112, y: 77 },
	  'kp': { x: 128, y: 77 },
	  'kr': { x: 144, y: 77 },
	  'kurdistan': { x: 160, y: 77 },
	  'kw': { x: 176, y: 77 },
	  'ky': { x: 192, y: 77 },
	  'kz': { x: 208, y: 77 },
	  'la': { x: 224, y: 77 },
	  'lb': { x: 240, y: 77 },
	  'lc': { x: 0, y: 88 },
	  'li': { x: 16, y: 88 },
	  'lk': { x: 32, y: 88 },
	  'lr': { x: 48, y: 88 },
	  'ls': { x: 64, y: 88 },
	  'lt': { x: 80, y: 88 },
	  'lu': { x: 96, y: 88 },
	  'lv': { x: 112, y: 88 },
	  'ly': { x: 128, y: 88 },
	  'ma': { x: 144, y: 88 },
	  'mc': { x: 160, y: 88 },
	  'md': { x: 176, y: 88 },
	  'me': { x: 192, y: 88 },
	  'mg': { x: 208, y: 88 },
	  'mh': { x: 224, y: 88 },
	  'mk': { x: 240, y: 88 },
	  'ml': { x: 0, y: 99 },
	  'mm': { x: 16, y: 99 },
	  'mn': { x: 32, y: 99 },
	  'mo': { x: 48, y: 99 },
	  'mp': { x: 64, y: 99 },
	  'mq': { x: 80, y: 99 },
	  'mr': { x: 96, y: 99 },
	  'ms': { x: 112, y: 99 },
	  'mt': { x: 128, y: 99 },
	  'mu': { x: 144, y: 99 },
	  'mv': { x: 160, y: 99 },
	  'mw': { x: 176, y: 99 },
	  'mx': { x: 192, y: 99 },
	  'my': { x: 208, y: 99 },
	  'mz': { x: 224, y: 99 },
	  'na': { x: 240, y: 99 },
	  'nc': { x: 0, y: 110 },
	  'ne': { x: 16, y: 110 },
	  'nf': { x: 32, y: 110 },
	  'ng': { x: 48, y: 110 },
	  'ni': { x: 64, y: 110 },
	  'nl': { x: 80, y: 110 },
	  'no': { x: 96, y: 110 },
	  'np': { x: 112, y: 110 },
	  'nr': { x: 128, y: 110 },
	  'nu': { x: 144, y: 110 },
	  'nz': { x: 160, y: 110 },
	  'om': { x: 176, y: 110 },
	  'pa': { x: 192, y: 110 },
	  'pe': { x: 208, y: 110 },
	  'pf': { x: 224, y: 110 },
	  'pg': { x: 240, y: 110 },
	  'ph': { x: 0, y: 121 },
	  'pk': { x: 16, y: 121 },
	  'pl': { x: 32, y: 121 },
	  'pm': { x: 48, y: 121 },
	  'pn': { x: 64, y: 121 },
	  'pr': { x: 80, y: 121 },
	  'ps': { x: 96, y: 121 },
	  'pt': { x: 112, y: 121 },
	  'pw': { x: 128, y: 121 },
	  'py': { x: 144, y: 121 },
	  'qa': { x: 160, y: 121 },
	  're': { x: 176, y: 121 },
	  'ro': { x: 192, y: 121 },
	  'rs': { x: 208, y: 121 },
	  'ru': { x: 224, y: 121 },
	  'rw': { x: 240, y: 121 },
	  'sa': { x: 0, y: 132 },
	  'sb': { x: 16, y: 132 },
	  'sc': { x: 32, y: 132 },
	  'scotland': { x: 48, y: 132 },
	  'sd': { x: 64, y: 132 },
	  'se': { x: 80, y: 132 },
	  'sg': { x: 96, y: 132 },
	  'sh': { x: 112, y: 132 },
	  'si': { x: 128, y: 132 },
	  'sk': { x: 144, y: 132 },
	  'sl': { x: 160, y: 132 },
	  'sm': { x: 176, y: 132 },
	  'sn': { x: 192, y: 132 },
	  'so': { x: 208, y: 132 },
	  'somaliland': { x: 224, y: 132 },
	  'sr': { x: 240, y: 132 },
	  'ss': { x: 0, y: 143 },
	  'st': { x: 16, y: 143 },
	  'sv': { x: 32, y: 143 },
	  'sx': { x: 48, y: 143 },
	  'sy': { x: 64, y: 143 },
	  'sz': { x: 80, y: 143 },
	  'tc': { x: 96, y: 143 },
	  'td': { x: 112, y: 143 },
	  'tf': { x: 128, y: 143 },
	  'tg': { x: 144, y: 143 },
	  'th': { x: 160, y: 143 },
	  'tibet': { x: 176, y: 143 },
	  'tj': { x: 192, y: 143 },
	  'tk': { x: 208, y: 143 },
	  'tl': { x: 224, y: 143 },
	  'tm': { x: 240, y: 143 },
	  'tn': { x: 0, y: 154 },
	  'to': { x: 16, y: 154 },
	  'tr': { x: 32, y: 154 },
	  'tt': { x: 48, y: 154 },
	  'tv': { x: 64, y: 154 },
	  'tw': { x: 80, y: 154 },
	  'tz': { x: 96, y: 154 },
	  'ua': { x: 112, y: 154 },
	  'ug': { x: 128, y: 154 },
	  'um': { x: 144, y: 154 },
	  'us': { x: 160, y: 154 },
	  'uy': { x: 176, y: 154 },
	  'uz': { x: 192, y: 154 },
	  'va': { x: 208, y: 154 },
	  'vc': { x: 224, y: 154 },
	  've': { x: 240, y: 154 },
	  'vg': { x: 0, y: 165 },
	  'vi': { x: 16, y: 165 },
	  'vn': { x: 32, y: 165 },
	  'vu': { x: 48, y: 165 },
	  'wales': { x: 64, y: 165 },
	  'wf': { x: 80, y: 165 },
	  'ws': { x: 96, y: 165 },
	  'xk': { x: 112, y: 165 },
	  'ye': { x: 128, y: 165 },
	  'yt': { x: 144, y: 165 },
	  'za': { x: 160, y: 165 },
	  'zanzibar': { x: 176, y: 165 },
	  'zm': { x: 192, y: 165 },
	  'zw': { x: 208, y: 165 }
	};
	
	var tooltip = d3.select('body').append('div').classed('tooltip', true).style('opacity', 0);
	
	var simulation = d3.forceSimulation().stop().force('charge', d3.forceManyBody().strength(-90)).force('link', d3.forceLink().id(function (d, i) {
	  return i;
	}).distance(50)).force('x', d3.forceX()).force('y', d3.forceY());
	
	var flags = new Image();
	flags.onload = function () {
	  return simulation.restart();
	};
	flags.src = 'https://dl.dropboxusercontent.com/s/z3y2giip5o29esl/flags_small.png';
	
	d3.json('https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json', function (error, graph) {
	  if (error) throw error;
	
	  var nodes = graph.nodes;
	  var links = graph.links;
	
	  var dragsubject = function dragsubject() {
	    return simulation.find(d3.event.x - width / 2, d3.event.y - height / 2, 10);
	  };
	
	  var ticked = function ticked() {
	    context.clearRect(0, 0, width, height);
	    context.save();
	    context.translate(width / 2, height / 2);
	
	    context.beginPath();
	    graph.links.forEach(drawLink);
	    context.strokeStyle = '#aaa';
	    context.stroke();
	
	    graph.nodes.forEach(drawNode);
	
	    context.restore();
	  };
	
	  simulation.nodes(nodes).on('tick', ticked);
	
	  simulation.force('link').links(links);
	
	  d3.select(window).on('mousemove', showTooltip);
	
	  d3.select(canvas).call(d3.drag().container(canvas).subject(dragsubject).on('start', dragstarted).on('drag', dragged).on('end', dragended));
	});
	
	var showTooltip = function showTooltip(event) {
	  event = event || d3.event;
	  var rect = canvas.getBoundingClientRect();
	  var subject = simulation.find(event.x - width / 2 - rect.left, event.y - height / 2 - rect.top, 10);
	  if (subject) {
	    tooltip.html(subject.country);
	    var tooltipRect = tooltip.node().getBoundingClientRect();
	    tooltip.style('left', event.x - tooltipRect.width / 2 + 'px').style('top', event.y - rect.top + tooltipRect.height - 7 + 'px').style('opacity', 1);
	  } else {
	    tooltip.style('opacity', 0);
	  }
	};
	
	var hideTooltip = function hideTooltip() {
	  tooltip.style('opacity', 0);
	};
	
	var showTooltipBuilder = function showTooltipBuilder(event) {
	  return function () {
	    return showTooltip(event);
	  };
	};
	
	var dragstarted = function dragstarted() {
	  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
	  d3.event.subject.fx = d3.event.subject.x;
	  d3.event.subject.fy = d3.event.subject.y;
	  hideTooltip();
	};
	
	var dragged = function dragged() {
	  d3.event.subject.fx = d3.event.x;
	  d3.event.subject.fy = d3.event.y;
	};
	
	var dragended = function dragended() {
	  if (!d3.event.active) simulation.alphaTarget(0);
	  d3.event.subject.fx = null;
	  d3.event.subject.fy = null;
	  var callback = showTooltipBuilder(d3.event);
	  var t = d3.timer(function (elapsed) {
	    if (elapsed > 100) t.stop();
	    callback();
	  });
	};
	
	var drawLink = function drawLink(d) {
	  context.moveTo(d.source.x, d.source.y);
	  context.lineTo(d.target.x, d.target.y);
	};
	
	var drawNode = function drawNode(d) {
	  var spritePos = spritePositions[d.code];
	  context.fillStyle = 'black';
	  context.strokeRect(d.x - spriteWidth / 2 - .5, d.y - spriteHeight / 2 - .5, spriteWidth + 1, spriteHeight + 1);
	  context.drawImage(flags, spritePos.x, spritePos.y, spriteWidth, spriteHeight, d.x - spriteWidth / 2, d.y - spriteHeight / 2, spriteWidth, spriteHeight);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map