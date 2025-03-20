function getDistance(point1, point2) {
    const horizontalDistance = point2.x - point1.x;
    const verticalDistance = point2.y - point1.y;
    const distance = Math.sqrt(horizontalDistance ** 2 + verticalDistance ** 2);
    return distance;
  }

  function getTheCorner(points) {
    if (points.length === 0) return [];
    
    if (points.length === 4) return [points[0],points[1],points[2],points[3]];
    // Initialize extreme points
    let topLeft = { x: Infinity, y: Infinity };
    let topRight = { x: -Infinity, y: Infinity };
    let bottomLeft = { x: Infinity, y: -Infinity };
    let bottomRight = { x: -Infinity, y: -Infinity };

    // Loop through the points to determine the extreme points
    for (let p of points) {
        if (p.x + p.y < topLeft.x + topLeft.y) topLeft = p;
        if (p.x - p.y > topRight.x - topRight.y) topRight = p;
        if (p.y - p.x > bottomLeft.y - bottomLeft.x) bottomLeft = p;
        if (p.x + p.y > bottomRight.x + bottomRight.y) bottomRight = p;
    }

    return [ topLeft, bottomLeft, bottomRight, topRight ];
}




function getCenterPoint(line1Start, line1End, line2Start, line2End) {

  const intersectionPoint = getIntersectionPoint(line1Start, line1End, line2Start, line2End);
  return intersectionPoint;
}

function getIntersectionPoint(p1, p2, p3, p4) {

  var c2x = p3.x - p4.x; // (x3 - x4)
  var c3x = p1.x - p2.x; // (x1 - x2)
  var c2y = p3.y - p4.y; // (y3 - y4)
  var c3y = p1.y - p2.y; // (y1 - y2)

  // down part of intersection point formula
  var d  = c3x * c2y - c3y * c2x;

  if (d == 0) {
    throw new Error('Number of intersection points is zero or infinity.');
  }

  // upper part of intersection point formula
  var u1 = p1.x * p2.y - p1.y * p2.x; // (x1 * y2 - y1 * x2)
  var u4 = p3.x * p4.y - p3.y * p4.x; // (x3 * y4 - y3 * x4)

  // intersection point formula
  
  var px = (u1 * c2x - c3x * u4) / d;
  var py = (u1 * c2y - c3y * u4) / d;
  
  var p = { x: px, y: py };

  return p;
}