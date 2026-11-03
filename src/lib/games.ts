export type GameQuestion = { prompt:string; choices:string[]; answer:number; explanation:string; graph:string; level:number };
export const identifyQuestions:GameQuestion[] = [
 {prompt:"The graph of y = x² moves 3 units up. Which transformation is shown?",choices:["Vertical translation up 3","Vertical translation down 3","Reflection across x-axis","Horizontal translation right 3"],answer:0,explanation:"Adding +3 outside the function shifts every point 3 units upward.",graph:"y = x² + 3",level:1},
 {prompt:"What does y = -f(x) do to the graph of f(x)?",choices:["Reflects across the y-axis","Reflects across the x-axis","Moves right 1","Stretches vertically"],answer:1,explanation:"A negative value outside f changes every output's sign, reflecting the graph across the x-axis.",graph:"y = -f(x)",level:2},
 {prompt:"For y = f(x - 4), which way does the graph move?",choices:["Left 4","Right 4","Up 4","Down 4"],answer:1,explanation:"The subtraction inside the input shifts the graph right by 4 units.",graph:"y = f(x - 4)",level:3}
];
export const matchQuestions:GameQuestion[] = [
 {prompt:"Which equation represents a parabola shifted 2 units right and 1 unit down?",choices:["y = (x - 2)² - 1","y = (x + 2)² - 1","y = (x - 2)² + 1","y = 2x² - 1"],answer:0,explanation:"The (x - 2) inside shifts right 2; -1 outside shifts down 1.",graph:"Vertex: (2, -1)",level:1},
 {prompt:"Choose the equation reflected across the x-axis and shifted up 2.",choices:["y = f(x) - 2","y = -f(x) + 2","y = f(-x) + 2","y = 2f(x)"],answer:1,explanation:"The negative outside reflects over the x-axis, and +2 shifts up.",graph:"y = -f(x) + 2",level:2},
 {prompt:"Which equation is a horizontal compression by factor 1/2?",choices:["y = f(2x)","y = f(x/2)","y = 2f(x)","y = f(x) + 2"],answer:0,explanation:"Multiplying x by 2 inside makes the graph half as wide.",graph:"y = f(2x)",level:3}
];
export const challengeQuestions:GameQuestion[] = [
 {prompt:"Original function: f(x) = |x|. Target: reflect across the x-axis, shift right 2, then up 3.",choices:["y = -|x - 2| + 3","y = |x + 2| + 3","y = -|x + 2| - 3","y = |x - 2| - 3"],answer:0,explanation:"Reflection gives -|...|, right 2 gives (x - 2), and up 3 adds +3.",graph:"y = -|x - 2| + 3",level:1},
 {prompt:"Original: f(x) = x². Target: vertical stretch by 3 and left 1.",choices:["y = 3(x + 1)²","y = (3x + 1)²","y = 3(x - 1)²","y = (x + 1)² + 3"],answer:0,explanation:"A vertical stretch multiplies outside by 3; left 1 uses (x + 1).",graph:"y = 3(x + 1)²",level:2},
 {prompt:"Original: f(x) = sin(x). Target: horizontal compression by 2, then down 1.",choices:["y = sin(x/2) - 1","y = 2sin(x) - 1","y = sin(2x) - 1","y = sin(2(x - 1))"],answer:2,explanation:"Compression by factor 1/2 means multiply the input by 2; down 1 subtracts 1.",graph:"y = sin(2x) - 1",level:3}
];
export function scoreAnswer(correct:boolean, current:number) { return correct ? current + 10 : current; }
