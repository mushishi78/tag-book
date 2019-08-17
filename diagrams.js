const ns = "http://www.w3.org/2000/svg";

function createPitch(element, width, height) {
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("viewBox", "0 0 " + width + " " + height);
  element.appendChild(svg);

  const g = document.createElementNS(ns, "g");
  svg.appendChild(g);

  const rect = document.createElementNS(ns, "rect");
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", "#84cf84");
  g.appendChild(rect);

  return g;
}

function addDefender(g, x, y, label) {
  const circ = document.createElementNS(ns, "circle");
  circ.setAttribute("cx", x);
  circ.setAttribute("cy", y);
  circ.setAttribute("r", 4);
  circ.setAttribute("fill", "#55f");
  g.appendChild(circ);

  const text = document.createElementNS(ns, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y + 0.2);
  text.setAttribute("font-size", 3);
  text.setAttribute("fill", "white");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("dominant-baseline", "middle");
  text.textContent = label;
  g.appendChild(text);
}

function addAttacker(g, x, y, label) {
  const circ = document.createElementNS(ns, "circle");
  circ.setAttribute("cx", x);
  circ.setAttribute("cy", y);
  circ.setAttribute("r", 4);
  circ.setAttribute("fill", "#f55");
  g.appendChild(circ);

  const text = document.createElementNS(ns, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y + 0.2);
  text.setAttribute("font-size", 3);
  text.setAttribute("fill", "white");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("dominant-baseline", "middle");
  text.textContent = label;
  g.appendChild(text);
}

function addPolyline(g, stroke, strokeWidth, points) {
  const polyline = document.createElementNS(ns, "polyline");
  polyline.setAttribute("points", points);
  polyline.setAttribute("stroke", stroke);
  polyline.setAttribute("stroke-width", strokeWidth);
  g.appendChild(polyline);
}

function addArrow(g, x, y, length, angle) {
  const points = [
    [x, y],
    [x, y + length],
    [x + 1, y + length - 2],
    [x - 1, y + length - 2],
    [x, y + length]
  ]
    .map(function(pair) {
      return pair.join(" ");
    })
    .join(",");

  const polyline = document.createElementNS(ns, "polyline");
  polyline.setAttribute("points", points);
  polyline.setAttribute("stroke", "#000");
  polyline.setAttribute("stroke-width", 0.3);
  polyline.setAttribute("transform", "rotate(" + [angle, x, y].join(",") + ")");
  g.appendChild(polyline);
}

function addBall(g, x, y) {
  const circ = document.createElementNS(ns, "circle");
  circ.setAttribute("cx", x);
  circ.setAttribute("cy", y);
  circ.setAttribute("r", 1);
  circ.setAttribute("fill", "#FFF");
  g.appendChild(circ);
}
