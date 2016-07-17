require('./index.scss')

var canvas = document.querySelector("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width,
  height = canvas.height;

var simulation = d3.forceSimulation()
  .force("charge", d3.forceManyBody().strength(-90))
  .force("link", d3.forceLink().id(function(d, i) { return i }).distance(50))
  .force('x', d3.forceX())
  .force('y', d3.forceY())

d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function(error, graph) {
  if (error) throw error;

  const nodes = graph.nodes;
  const links = graph.links

  simulation
    .nodes(nodes)
    .links(links)
    .force("link")
    .on("tick", ticked)

  d3.select(canvas)
    .call(d3.drag()
      .container(canvas)
      .subject(dragsubject)
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  function ticked() {

    context.clearRect(0, 0, width, height);
    context.save()
    context.translate(width / 2, height / 2)

    context.beginPath();
    graph.links.forEach(drawLink);
    context.strokeStyle = "#aaa";
    context.stroke();

    context.beginPath();
    graph.nodes.forEach(drawNode);
    context.fill();
    context.strokeStyle = "#fff";
    context.stroke();

    context.restore()
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
  context.moveTo(d.x + 10, d.y);
  context.arc(d.x, d.y, 10, 0, 2 * Math.PI);
}
