import { Circle, Point } from "../model/types";

/**
 * Detect if two points are within a threashold of eachother
 */
export function pointsCloseTogether(p1: Point, p2: Point, delta: number): boolean {
  return ((p1.x-p2.x)**2 + (p1.y-p2.y)**2) < delta**2;
}

export function pointInCircle(point: Point, circle: Circle): boolean {
  return pointsCloseTogether(point, circle.center, circle.radius);
}

export function circlesThatContainPoint<C extends Circle>(
  point: Point,
  circles: Array<C>,
): Array<C> {
  // TODO: Should we use a third party library for computational geometry?
  // This can be done more efficiently; however, the linear solution is plenty fast for numWarps
  return circles.filter(circle => pointInCircle(point, circle));
}