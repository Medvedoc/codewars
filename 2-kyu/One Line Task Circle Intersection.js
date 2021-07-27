// Solutions in JavaScript

// 2kyu - One Line Task: Circle Intersection

// https://www.codewars.com/kata/5908242330e4f567e90000a3/solutions/solutions

with(Math)circleIntersection=([a,b],[c,d],r)=>(-sin(x=2*acos(hypot(a-c,b-d)/2/r))+x)*r*r|0