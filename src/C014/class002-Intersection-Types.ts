// Example: Intersection of Literal Types
// In this example, we think of types as sets, and the intersection of the sets results in only common elements.
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

// The intersection of AB, AC, and AD is 'A', because it's the only common value between the three sets.
type Intersection = AB & AC & AD;  // Type Intersection will be 'A'
