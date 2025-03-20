function svgPathToPoints(svgPath) {
  const matches = svgPath.match(/[a-zA-Z][^a-zA-Z]*/g);
  if (!matches) return null;

  let x = 0, y = 0;
  let startX = 0, startY = 0;
  const points = [];

  for (let i = 0; i < matches.length; i++) {
    const command = matches[i][0];
    const coords = matches[i].substr(1).trim().split(/[\s,]+/).map(parseFloat);

    switch (command) {
      case 'M': // Move to (Move doesn't draw, but subsequent coords are implicit L)
        x = coords[0]; y = coords[1];
        startX = x; startY = y;
        points.push({ x, y });

        // If there are extra coords after 'M', treat them as 'L'
        for (let j = 2; j < coords.length; j += 2) {
          x = coords[j];
          y = coords[j + 1];
          points.push({ x, y });
        }
        break;

      case 'L': // Line to
        for (let j = 0; j < coords.length; j += 2) {
          x = coords[j];
          y = coords[j + 1];
          points.push({ x, y });
        }
        break;

      case 'H': // Horizontal Line to
        for (let j = 0; j < coords.length; j++) {
          x = coords[j];
          points.push({ x, y });
        }
        break;

      case 'V': // Vertical Line to
        for (let j = 0; j < coords.length; j++) {
          y = coords[j];
          points.push({ x, y });
        }
        break;

      case 'Z': // Close Path (Avoid duplicate point)
        if (points.length > 0 && (x !== startX || y !== startY)) {
          points.push({ x: startX, y: startY });
        }
        break;
    }
  }

  // Remove duplicate closing point
  if (points.length > 1) {
    const first = points[0];
    const last = points[points.length - 1];
    if (first.x === last.x && first.y === last.y) {
      points.pop();
    }
  }
console.log('points : ',points);
  return points;
}
