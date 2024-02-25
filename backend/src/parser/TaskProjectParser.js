// Generated from src/parser/TaskProjectParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TaskProjectParserListener from './TaskProjectParserListener.js';
import TaskProjectParserVisitor from './TaskProjectParserVisitor.js';

const serializedATN = [4,1,43,472,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,1,
0,1,0,1,0,1,0,1,0,1,0,5,0,105,8,0,10,0,12,0,108,9,0,1,0,1,0,1,1,1,1,1,1,
1,1,3,1,116,8,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,124,8,2,10,2,12,2,127,9,2,1,
2,1,2,1,2,1,2,3,2,133,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,145,
8,3,1,4,1,4,1,4,1,4,1,4,3,4,152,8,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,160,8,5,
10,5,12,5,163,9,5,1,5,1,5,1,5,1,5,3,5,169,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,3,6,181,8,6,1,7,1,7,1,7,1,7,3,7,187,8,7,1,7,1,7,1,8,1,8,1,
8,1,8,5,8,195,8,8,10,8,12,8,198,9,8,1,8,1,8,1,8,1,8,3,8,204,8,8,1,8,1,8,
1,9,1,9,1,9,1,9,1,9,3,9,213,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,221,8,
10,10,10,12,10,224,9,10,1,10,1,10,1,10,1,10,3,10,230,8,10,1,10,1,10,1,10,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,247,8,11,
1,12,1,12,1,12,1,12,1,12,1,12,5,12,255,8,12,10,12,12,12,258,9,12,1,12,1,
12,1,12,1,12,3,12,264,8,12,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,
1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,
19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
5,23,304,8,23,10,23,12,23,307,9,23,1,23,1,23,1,23,1,23,3,23,313,8,23,1,23,
1,23,1,24,1,24,1,24,1,24,1,24,5,24,322,8,24,10,24,12,24,325,9,24,1,24,1,
24,1,24,1,24,3,24,331,8,24,1,24,1,24,1,25,1,25,3,25,337,8,25,1,26,1,26,1,
26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,5,29,354,
8,29,10,29,12,29,357,9,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,367,
8,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,378,8,31,1,32,3,32,
381,8,32,1,32,1,32,1,32,3,32,386,8,32,1,33,1,33,5,33,390,8,33,10,33,12,33,
393,9,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,3,34,402,8,34,1,34,1,34,1,35,
1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,
37,1,37,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,3,39,433,8,39,
1,39,1,39,1,40,1,40,1,40,5,40,440,8,40,10,40,12,40,443,9,40,1,40,1,40,1,
40,3,40,448,8,40,1,40,1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,43,1,43,1,44,
1,44,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,48,0,0,49,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,0,0,494,0,
106,1,0,0,0,2,111,1,0,0,0,4,119,1,0,0,0,6,144,1,0,0,0,8,146,1,0,0,0,10,155,
1,0,0,0,12,180,1,0,0,0,14,182,1,0,0,0,16,190,1,0,0,0,18,212,1,0,0,0,20,214,
1,0,0,0,22,246,1,0,0,0,24,248,1,0,0,0,26,268,1,0,0,0,28,271,1,0,0,0,30,274,
1,0,0,0,32,277,1,0,0,0,34,280,1,0,0,0,36,283,1,0,0,0,38,286,1,0,0,0,40,289,
1,0,0,0,42,292,1,0,0,0,44,295,1,0,0,0,46,298,1,0,0,0,48,316,1,0,0,0,50,336,
1,0,0,0,52,338,1,0,0,0,54,341,1,0,0,0,56,344,1,0,0,0,58,351,1,0,0,0,60,366,
1,0,0,0,62,370,1,0,0,0,64,380,1,0,0,0,66,387,1,0,0,0,68,401,1,0,0,0,70,405,
1,0,0,0,72,412,1,0,0,0,74,417,1,0,0,0,76,422,1,0,0,0,78,427,1,0,0,0,80,436,
1,0,0,0,82,451,1,0,0,0,84,455,1,0,0,0,86,457,1,0,0,0,88,459,1,0,0,0,90,463,
1,0,0,0,92,465,1,0,0,0,94,467,1,0,0,0,96,469,1,0,0,0,98,105,3,2,1,0,99,105,
3,8,4,0,100,105,3,14,7,0,101,105,3,20,10,0,102,105,3,24,12,0,103,105,3,56,
28,0,104,98,1,0,0,0,104,99,1,0,0,0,104,100,1,0,0,0,104,101,1,0,0,0,104,102,
1,0,0,0,104,103,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,
107,109,1,0,0,0,108,106,1,0,0,0,109,110,5,0,0,1,110,1,1,0,0,0,111,112,5,
2,0,0,112,115,3,94,47,0,113,116,5,30,0,0,114,116,3,4,2,0,115,113,1,0,0,0,
115,114,1,0,0,0,116,117,1,0,0,0,117,118,5,33,0,0,118,3,1,0,0,0,119,125,5,
35,0,0,120,121,3,6,3,0,121,122,5,34,0,0,122,124,1,0,0,0,123,120,1,0,0,0,
124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,132,1,0,0,0,127,125,
1,0,0,0,128,129,3,6,3,0,129,130,5,34,0,0,130,133,1,0,0,0,131,133,3,6,3,0,
132,128,1,0,0,0,132,131,1,0,0,0,133,134,1,0,0,0,134,135,5,36,0,0,135,5,1,
0,0,0,136,145,3,26,13,0,137,145,3,28,14,0,138,145,3,30,15,0,139,145,3,32,
16,0,140,145,3,34,17,0,141,145,3,38,19,0,142,145,3,40,20,0,143,145,3,48,
24,0,144,136,1,0,0,0,144,137,1,0,0,0,144,138,1,0,0,0,144,139,1,0,0,0,144,
140,1,0,0,0,144,141,1,0,0,0,144,142,1,0,0,0,144,143,1,0,0,0,145,7,1,0,0,
0,146,147,5,3,0,0,147,151,3,94,47,0,148,152,5,30,0,0,149,152,3,10,5,0,150,
152,3,80,40,0,151,148,1,0,0,0,151,149,1,0,0,0,151,150,1,0,0,0,152,153,1,
0,0,0,153,154,5,33,0,0,154,9,1,0,0,0,155,161,5,35,0,0,156,157,3,12,6,0,157,
158,5,34,0,0,158,160,1,0,0,0,159,156,1,0,0,0,160,163,1,0,0,0,161,159,1,0,
0,0,161,162,1,0,0,0,162,168,1,0,0,0,163,161,1,0,0,0,164,165,3,12,6,0,165,
166,5,34,0,0,166,169,1,0,0,0,167,169,3,12,6,0,168,164,1,0,0,0,168,167,1,
0,0,0,169,170,1,0,0,0,170,171,5,36,0,0,171,11,1,0,0,0,172,181,3,26,13,0,
173,181,3,28,14,0,174,181,3,30,15,0,175,181,3,32,16,0,176,181,3,34,17,0,
177,181,3,38,19,0,178,181,3,40,20,0,179,181,3,42,21,0,180,172,1,0,0,0,180,
173,1,0,0,0,180,174,1,0,0,0,180,175,1,0,0,0,180,176,1,0,0,0,180,177,1,0,
0,0,180,178,1,0,0,0,180,179,1,0,0,0,181,13,1,0,0,0,182,183,5,4,0,0,183,186,
3,94,47,0,184,187,5,30,0,0,185,187,3,16,8,0,186,184,1,0,0,0,186,185,1,0,
0,0,187,188,1,0,0,0,188,189,5,33,0,0,189,15,1,0,0,0,190,196,5,35,0,0,191,
192,3,18,9,0,192,193,5,34,0,0,193,195,1,0,0,0,194,191,1,0,0,0,195,198,1,
0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,203,1,0,0,0,198,196,1,0,0,0,199,
200,3,18,9,0,200,201,5,34,0,0,201,204,1,0,0,0,202,204,3,18,9,0,203,199,1,
0,0,0,203,202,1,0,0,0,204,205,1,0,0,0,205,206,5,36,0,0,206,17,1,0,0,0,207,
213,3,26,13,0,208,213,3,36,18,0,209,213,3,42,21,0,210,213,3,44,22,0,211,
213,3,46,23,0,212,207,1,0,0,0,212,208,1,0,0,0,212,209,1,0,0,0,212,210,1,
0,0,0,212,211,1,0,0,0,213,19,1,0,0,0,214,215,5,19,0,0,215,216,3,94,47,0,
216,222,5,35,0,0,217,218,3,22,11,0,218,219,5,34,0,0,219,221,1,0,0,0,220,
217,1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,229,1,0,
0,0,224,222,1,0,0,0,225,226,3,22,11,0,226,227,5,34,0,0,227,230,1,0,0,0,228,
230,3,22,11,0,229,225,1,0,0,0,229,228,1,0,0,0,230,231,1,0,0,0,231,232,5,
36,0,0,232,233,5,33,0,0,233,21,1,0,0,0,234,247,3,26,13,0,235,247,3,28,14,
0,236,247,3,30,15,0,237,247,3,32,16,0,238,247,3,34,17,0,239,247,3,36,18,
0,240,247,3,38,19,0,241,247,3,40,20,0,242,247,3,42,21,0,243,247,3,44,22,
0,244,247,3,46,23,0,245,247,3,48,24,0,246,234,1,0,0,0,246,235,1,0,0,0,246,
236,1,0,0,0,246,237,1,0,0,0,246,238,1,0,0,0,246,239,1,0,0,0,246,240,1,0,
0,0,246,241,1,0,0,0,246,242,1,0,0,0,246,243,1,0,0,0,246,244,1,0,0,0,246,
245,1,0,0,0,247,23,1,0,0,0,248,249,5,19,0,0,249,250,5,20,0,0,250,256,5,35,
0,0,251,252,3,88,44,0,252,253,5,34,0,0,253,255,1,0,0,0,254,251,1,0,0,0,255,
258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,263,1,0,0,0,258,256,1,0,
0,0,259,260,3,88,44,0,260,261,5,34,0,0,261,264,1,0,0,0,262,264,3,88,44,0,
263,259,1,0,0,0,263,262,1,0,0,0,264,265,1,0,0,0,265,266,5,36,0,0,266,267,
5,33,0,0,267,25,1,0,0,0,268,269,5,5,0,0,269,270,5,30,0,0,270,27,1,0,0,0,
271,272,5,6,0,0,272,273,5,30,0,0,273,29,1,0,0,0,274,275,5,7,0,0,275,276,
5,30,0,0,276,31,1,0,0,0,277,278,5,8,0,0,278,279,5,30,0,0,279,33,1,0,0,0,
280,281,5,9,0,0,281,282,5,31,0,0,282,35,1,0,0,0,283,284,5,15,0,0,284,285,
5,30,0,0,285,37,1,0,0,0,286,287,5,10,0,0,287,288,3,80,40,0,288,39,1,0,0,
0,289,290,5,11,0,0,290,291,3,80,40,0,291,41,1,0,0,0,292,293,5,16,0,0,293,
294,3,80,40,0,294,43,1,0,0,0,295,296,5,17,0,0,296,297,3,80,40,0,297,45,1,
0,0,0,298,299,5,18,0,0,299,305,5,35,0,0,300,301,3,82,41,0,301,302,5,34,0,
0,302,304,1,0,0,0,303,300,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,
1,0,0,0,306,312,1,0,0,0,307,305,1,0,0,0,308,309,3,82,41,0,309,310,5,34,0,
0,310,313,1,0,0,0,311,313,3,82,41,0,312,308,1,0,0,0,312,311,1,0,0,0,313,
314,1,0,0,0,314,315,5,36,0,0,315,47,1,0,0,0,316,317,5,12,0,0,317,323,5,35,
0,0,318,319,3,50,25,0,319,320,5,34,0,0,320,322,1,0,0,0,321,318,1,0,0,0,322,
325,1,0,0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,330,1,0,0,0,325,323,1,0,
0,0,326,327,3,50,25,0,327,328,5,34,0,0,328,331,1,0,0,0,329,331,3,50,25,0,
330,326,1,0,0,0,330,329,1,0,0,0,331,332,1,0,0,0,332,333,5,36,0,0,333,49,
1,0,0,0,334,337,3,52,26,0,335,337,3,54,27,0,336,334,1,0,0,0,336,335,1,0,
0,0,337,51,1,0,0,0,338,339,5,13,0,0,339,340,3,94,47,0,340,53,1,0,0,0,341,
342,5,14,0,0,342,343,3,94,47,0,343,55,1,0,0,0,344,345,5,21,0,0,345,346,3,
96,48,0,346,347,5,37,0,0,347,348,5,38,0,0,348,349,3,58,29,0,349,350,5,33,
0,0,350,57,1,0,0,0,351,355,5,35,0,0,352,354,3,60,30,0,353,352,1,0,0,0,354,
357,1,0,0,0,355,353,1,0,0,0,355,356,1,0,0,0,356,358,1,0,0,0,357,355,1,0,
0,0,358,359,5,36,0,0,359,59,1,0,0,0,360,367,3,70,35,0,361,367,3,72,36,0,
362,367,3,74,37,0,363,367,3,76,38,0,364,367,3,78,39,0,365,367,3,62,31,0,
366,360,1,0,0,0,366,361,1,0,0,0,366,362,1,0,0,0,366,363,1,0,0,0,366,364,
1,0,0,0,366,365,1,0,0,0,367,368,1,0,0,0,368,369,5,33,0,0,369,61,1,0,0,0,
370,371,5,27,0,0,371,372,5,37,0,0,372,373,3,64,32,0,373,374,5,38,0,0,374,
377,3,66,33,0,375,376,5,28,0,0,376,378,3,66,33,0,377,375,1,0,0,0,377,378,
1,0,0,0,378,63,1,0,0,0,379,381,5,41,0,0,380,379,1,0,0,0,380,381,1,0,0,0,
381,385,1,0,0,0,382,386,3,72,36,0,383,386,3,74,37,0,384,386,3,76,38,0,385,
382,1,0,0,0,385,383,1,0,0,0,385,384,1,0,0,0,386,65,1,0,0,0,387,391,5,35,
0,0,388,390,3,68,34,0,389,388,1,0,0,0,390,393,1,0,0,0,391,389,1,0,0,0,391,
392,1,0,0,0,392,394,1,0,0,0,393,391,1,0,0,0,394,395,5,36,0,0,395,67,1,0,
0,0,396,402,3,70,35,0,397,402,3,72,36,0,398,402,3,74,37,0,399,402,3,76,38,
0,400,402,3,78,39,0,401,396,1,0,0,0,401,397,1,0,0,0,401,398,1,0,0,0,401,
399,1,0,0,0,401,400,1,0,0,0,402,403,1,0,0,0,403,404,5,33,0,0,404,69,1,0,
0,0,405,406,5,22,0,0,406,407,5,37,0,0,407,408,3,94,47,0,408,409,5,34,0,0,
409,410,3,94,47,0,410,411,5,38,0,0,411,71,1,0,0,0,412,413,5,23,0,0,413,414,
5,37,0,0,414,415,3,94,47,0,415,416,5,38,0,0,416,73,1,0,0,0,417,418,5,24,
0,0,418,419,5,37,0,0,419,420,3,94,47,0,420,421,5,38,0,0,421,75,1,0,0,0,422,
423,5,25,0,0,423,424,5,37,0,0,424,425,3,94,47,0,425,426,5,38,0,0,426,77,
1,0,0,0,427,428,5,26,0,0,428,429,5,37,0,0,429,432,3,94,47,0,430,431,5,34,
0,0,431,433,5,30,0,0,432,430,1,0,0,0,432,433,1,0,0,0,433,434,1,0,0,0,434,
435,5,38,0,0,435,79,1,0,0,0,436,441,5,35,0,0,437,438,5,29,0,0,438,440,5,
34,0,0,439,437,1,0,0,0,440,443,1,0,0,0,441,439,1,0,0,0,441,442,1,0,0,0,442,
447,1,0,0,0,443,441,1,0,0,0,444,445,5,29,0,0,445,448,5,34,0,0,446,448,5,
29,0,0,447,444,1,0,0,0,447,446,1,0,0,0,448,449,1,0,0,0,449,450,5,36,0,0,
450,81,1,0,0,0,451,452,3,84,42,0,452,453,5,32,0,0,453,454,3,86,43,0,454,
83,1,0,0,0,455,456,5,30,0,0,456,85,1,0,0,0,457,458,5,30,0,0,458,87,1,0,0,
0,459,460,3,90,45,0,460,461,5,39,0,0,461,462,3,92,46,0,462,89,1,0,0,0,463,
464,5,29,0,0,464,91,1,0,0,0,465,466,5,29,0,0,466,93,1,0,0,0,467,468,5,29,
0,0,468,95,1,0,0,0,469,470,5,29,0,0,470,97,1,0,0,0,34,104,106,115,125,132,
144,151,161,168,180,186,196,203,212,222,229,246,256,263,305,312,323,330,
336,355,366,377,380,385,391,401,432,441,447];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TaskProjectParser extends antlr4.Parser {

    static grammarFileName = "TaskProjectParser.g4";
    static literalNames = [ null, null, "'task '", "'project '", "'user '", 
                            "'name:'", "'description:'", "'deadline:'", 
                            "'status:'", "'priority:'", "'deps:'", "'users:'", 
                            "'callbacks:'", "'onUnblock:'", null, "'email:'", 
                            "'tasks:'", "'projects:'", "'additional:'", 
                            "'set '", "'deps '", "'function '", "'assign'", 
                            "'started'", "'blocked'", "'finished'", "'ping'", 
                            "'if '", "'else '", null, null, null, "':'", 
                            "';'", "','", "'{'", "'}'", "'('", "')'", "'->'", 
                            "'='", "'!'" ];
    static symbolicNames = [ null, "LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", 
                             "USER_DEF", "NAME", "DESCRIPTION", "DEADLINE", 
                             "STATUS", "PRIORITY", "DEPS", "USERS", "CALLBACKS", 
                             "ONUNBLOCK", "REMINDER", "EMAIL", "TASKS", 
                             "PROJECTS", "ADDITIONAL", "SET", "SET_DEPS", 
                             "FUNCTION", "ASSIGN", "STARTED", "BLOCKED", 
                             "FINISHED", "PING", "IF", "ELSE", "TEXT", "QUOTED_TEXT", 
                             "NUM", "COLON", "SEMICOLON", "COMMA", "OPEN_BRACES", 
                             "CLOSE_BRACES", "OPEN_PAREN", "CLOSE_PAREN", 
                             "ARROW", "EQ", "NEGATION", "SPACE", "NEWLINE" ];
    static ruleNames = [ "program", "task", "taskBody", "taskProperty", 
                         "project", "projectBody", "projectProperty", "user", 
                         "userBody", "userProperty", "set", "setProperty", 
                         "setDepsArrowNotation", "setName", "setDescription", 
                         "setDeadline", "setStatus", "setPriority", "setEmail", 
                         "setDeps", "setUsers", "setTasks", "setProjects", 
                         "setAdditional", "setCallbacks", "callBackFields", 
                         "onUnblock", "reminder", "func", "functionBody", 
                         "funcFields", "conditional", "condition", "block", 
                         "blockFields", "assign", "started", "blocked", 
                         "finished", "ping", "array", "additional", "additionalKey", 
                         "additionalValue", "depsArrow", "left", "right", 
                         "varname", "funcname" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TaskProjectParser.ruleNames;
        this.literalNames = TaskProjectParser.literalNames;
        this.symbolicNames = TaskProjectParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TaskProjectParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2621468) !== 0)) {
	            this.state = 104;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 98;
	                this.task();
	                break;

	            case 2:
	                this.state = 99;
	                this.project();
	                break;

	            case 3:
	                this.state = 100;
	                this.user();
	                break;

	            case 4:
	                this.state = 101;
	                this.set();
	                break;

	            case 5:
	                this.state = 102;
	                this.setDepsArrowNotation();
	                break;

	            case 6:
	                this.state = 103;
	                this.func();
	                break;

	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 109;
	        this.match(TaskProjectParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	task() {
	    let localctx = new TaskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TaskProjectParser.RULE_task);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(TaskProjectParser.TASK_DEF);
	        this.state = 112;
	        this.varname();
	        this.state = 115;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.state = 113;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 35:
	            this.state = 114;
	            this.taskBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 117;
	        this.match(TaskProjectParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	taskBody() {
	    let localctx = new TaskBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TaskProjectParser.RULE_taskBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 125;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 120;
	                this.taskProperty();
	                this.state = 121;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 127;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 128;
	            this.taskProperty();
	            this.state = 129;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 131;
	            this.taskProperty();
	            break;

	        }
	        this.state = 134;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	taskProperty() {
	    let localctx = new TaskPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TaskProjectParser.RULE_taskProperty);
	    try {
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 138;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 139;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 140;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 141;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 142;
	            this.setUsers();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 143;
	            this.setCallbacks();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	project() {
	    let localctx = new ProjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TaskProjectParser.RULE_project);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(TaskProjectParser.PROJECT_DEF);
	        this.state = 147;
	        this.varname();
	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 148;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;

	        case 2:
	            this.state = 149;
	            this.projectBody();
	            break;

	        case 3:
	            this.state = 150;
	            this.array();
	            break;

	        }
	        this.state = 153;
	        this.match(TaskProjectParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	projectBody() {
	    let localctx = new ProjectBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TaskProjectParser.RULE_projectBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 161;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 156;
	                this.projectProperty();
	                this.state = 157;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 163;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 168;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 164;
	            this.projectProperty();
	            this.state = 165;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 167;
	            this.projectProperty();
	            break;

	        }
	        this.state = 170;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	projectProperty() {
	    let localctx = new ProjectPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TaskProjectParser.RULE_projectProperty);
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 172;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 173;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 174;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 175;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 176;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 177;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 178;
	            this.setUsers();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 179;
	            this.setTasks();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	user() {
	    let localctx = new UserContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TaskProjectParser.RULE_user);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(TaskProjectParser.USER_DEF);
	        this.state = 183;
	        this.varname();
	        this.state = 186;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.state = 184;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 35:
	            this.state = 185;
	            this.userBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 188;
	        this.match(TaskProjectParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	userBody() {
	    let localctx = new UserBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TaskProjectParser.RULE_userBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 196;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 191;
	                this.userProperty();
	                this.state = 192;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 198;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 199;
	            this.userProperty();
	            this.state = 200;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 202;
	            this.userProperty();
	            break;

	        }
	        this.state = 205;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	userProperty() {
	    let localctx = new UserPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TaskProjectParser.RULE_userProperty);
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.setName();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this.setEmail();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 209;
	            this.setTasks();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 210;
	            this.setProjects();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 211;
	            this.setAdditional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	set() {
	    let localctx = new SetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TaskProjectParser.RULE_set);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(TaskProjectParser.SET);
	        this.state = 215;
	        this.varname();
	        this.state = 216;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 222;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 217;
	                this.setProperty();
	                this.state = 218;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 224;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 229;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 225;
	            this.setProperty();
	            this.state = 226;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 228;
	            this.setProperty();
	            break;

	        }
	        this.state = 231;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	        this.state = 232;
	        this.match(TaskProjectParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setProperty() {
	    let localctx = new SetPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TaskProjectParser.RULE_setProperty);
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 234;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 235;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 236;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 237;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 238;
	            this.setPriority();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 239;
	            this.setEmail();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 240;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 241;
	            this.setUsers();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 242;
	            this.setTasks();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 243;
	            this.setProjects();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 244;
	            this.setAdditional();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 245;
	            this.setCallbacks();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setDepsArrowNotation() {
	    let localctx = new SetDepsArrowNotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TaskProjectParser.RULE_setDepsArrowNotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(TaskProjectParser.SET);
	        this.state = 249;
	        this.match(TaskProjectParser.SET_DEPS);
	        this.state = 250;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 256;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 251;
	                this.depsArrow();
	                this.state = 252;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 258;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 263;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 259;
	            this.depsArrow();
	            this.state = 260;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 262;
	            this.depsArrow();
	            break;

	        }
	        this.state = 265;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	        this.state = 266;
	        this.match(TaskProjectParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setName() {
	    let localctx = new SetNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TaskProjectParser.RULE_setName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(TaskProjectParser.NAME);
	        this.state = 269;
	        this.match(TaskProjectParser.QUOTED_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setDescription() {
	    let localctx = new SetDescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, TaskProjectParser.RULE_setDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(TaskProjectParser.DESCRIPTION);
	        this.state = 272;
	        this.match(TaskProjectParser.QUOTED_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setDeadline() {
	    let localctx = new SetDeadlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TaskProjectParser.RULE_setDeadline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(TaskProjectParser.DEADLINE);
	        this.state = 275;
	        this.match(TaskProjectParser.QUOTED_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setStatus() {
	    let localctx = new SetStatusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TaskProjectParser.RULE_setStatus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(TaskProjectParser.STATUS);
	        this.state = 278;
	        this.match(TaskProjectParser.QUOTED_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setPriority() {
	    let localctx = new SetPriorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, TaskProjectParser.RULE_setPriority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(TaskProjectParser.PRIORITY);
	        this.state = 281;
	        this.match(TaskProjectParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setEmail() {
	    let localctx = new SetEmailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, TaskProjectParser.RULE_setEmail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(TaskProjectParser.EMAIL);
	        this.state = 284;
	        this.match(TaskProjectParser.QUOTED_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setDeps() {
	    let localctx = new SetDepsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, TaskProjectParser.RULE_setDeps);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.match(TaskProjectParser.DEPS);
	        this.state = 287;
	        this.array();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setUsers() {
	    let localctx = new SetUsersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TaskProjectParser.RULE_setUsers);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.match(TaskProjectParser.USERS);
	        this.state = 290;
	        this.array();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setTasks() {
	    let localctx = new SetTasksContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, TaskProjectParser.RULE_setTasks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.match(TaskProjectParser.TASKS);
	        this.state = 293;
	        this.array();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setProjects() {
	    let localctx = new SetProjectsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, TaskProjectParser.RULE_setProjects);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(TaskProjectParser.PROJECTS);
	        this.state = 296;
	        this.array();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setAdditional() {
	    let localctx = new SetAdditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, TaskProjectParser.RULE_setAdditional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(TaskProjectParser.ADDITIONAL);
	        this.state = 299;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 305;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 300;
	                this.additional();
	                this.state = 301;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 307;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 312;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 308;
	            this.additional();
	            this.state = 309;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 311;
	            this.additional();
	            break;

	        }
	        this.state = 314;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setCallbacks() {
	    let localctx = new SetCallbacksContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, TaskProjectParser.RULE_setCallbacks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.match(TaskProjectParser.CALLBACKS);
	        this.state = 317;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 323;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 318;
	                this.callBackFields();
	                this.state = 319;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 325;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 330;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 326;
	            this.callBackFields();
	            this.state = 327;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 329;
	            this.callBackFields();
	            break;

	        }
	        this.state = 332;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callBackFields() {
	    let localctx = new CallBackFieldsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, TaskProjectParser.RULE_callBackFields);
	    try {
	        this.state = 336;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 334;
	            this.onUnblock();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 335;
	            this.reminder();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	onUnblock() {
	    let localctx = new OnUnblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, TaskProjectParser.RULE_onUnblock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.match(TaskProjectParser.ONUNBLOCK);
	        this.state = 339;
	        this.varname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reminder() {
	    let localctx = new ReminderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, TaskProjectParser.RULE_reminder);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(TaskProjectParser.REMINDER);
	        this.state = 342;
	        this.varname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, TaskProjectParser.RULE_func);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(TaskProjectParser.FUNCTION);
	        this.state = 345;
	        this.funcname();
	        this.state = 346;
	        this.match(TaskProjectParser.OPEN_PAREN);
	        this.state = 347;
	        this.match(TaskProjectParser.CLOSE_PAREN);
	        this.state = 348;
	        this.functionBody();
	        this.state = 349;
	        this.match(TaskProjectParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, TaskProjectParser.RULE_functionBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 355;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 264241152) !== 0)) {
	            this.state = 352;
	            this.funcFields();
	            this.state = 357;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 358;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcFields() {
	    let localctx = new FuncFieldsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, TaskProjectParser.RULE_funcFields);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.state = 360;
	            this.assign();
	            break;
	        case 23:
	            this.state = 361;
	            this.started();
	            break;
	        case 24:
	            this.state = 362;
	            this.blocked();
	            break;
	        case 25:
	            this.state = 363;
	            this.finished();
	            break;
	        case 26:
	            this.state = 364;
	            this.ping();
	            break;
	        case 27:
	            this.state = 365;
	            this.conditional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 368;
	        this.match(TaskProjectParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, TaskProjectParser.RULE_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.match(TaskProjectParser.IF);
	        this.state = 371;
	        this.match(TaskProjectParser.OPEN_PAREN);
	        this.state = 372;
	        this.condition();
	        this.state = 373;
	        this.match(TaskProjectParser.CLOSE_PAREN);
	        this.state = 374;
	        this.block();
	        this.state = 377;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 375;
	            this.match(TaskProjectParser.ELSE);
	            this.state = 376;
	            this.block();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, TaskProjectParser.RULE_condition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 379;
	            this.match(TaskProjectParser.NEGATION);
	        }

	        this.state = 385;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.state = 382;
	            this.started();
	            break;
	        case 24:
	            this.state = 383;
	            this.blocked();
	            break;
	        case 25:
	            this.state = 384;
	            this.finished();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, TaskProjectParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 391;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 130023424) !== 0)) {
	            this.state = 388;
	            this.blockFields();
	            this.state = 393;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 394;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blockFields() {
	    let localctx = new BlockFieldsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, TaskProjectParser.RULE_blockFields);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.state = 396;
	            this.assign();
	            break;
	        case 23:
	            this.state = 397;
	            this.started();
	            break;
	        case 24:
	            this.state = 398;
	            this.blocked();
	            break;
	        case 25:
	            this.state = 399;
	            this.finished();
	            break;
	        case 26:
	            this.state = 400;
	            this.ping();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 403;
	        this.match(TaskProjectParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, TaskProjectParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(TaskProjectParser.ASSIGN);
	        this.state = 406;
	        this.match(TaskProjectParser.OPEN_PAREN);
	        this.state = 407;
	        this.varname();
	        this.state = 408;
	        this.match(TaskProjectParser.COMMA);
	        this.state = 409;
	        this.varname();
	        this.state = 410;
	        this.match(TaskProjectParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	started() {
	    let localctx = new StartedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, TaskProjectParser.RULE_started);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(TaskProjectParser.STARTED);
	        this.state = 413;
	        this.match(TaskProjectParser.OPEN_PAREN);
	        this.state = 414;
	        this.varname();
	        this.state = 415;
	        this.match(TaskProjectParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blocked() {
	    let localctx = new BlockedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, TaskProjectParser.RULE_blocked);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
	        this.match(TaskProjectParser.BLOCKED);
	        this.state = 418;
	        this.match(TaskProjectParser.OPEN_PAREN);
	        this.state = 419;
	        this.varname();
	        this.state = 420;
	        this.match(TaskProjectParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finished() {
	    let localctx = new FinishedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, TaskProjectParser.RULE_finished);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(TaskProjectParser.FINISHED);
	        this.state = 423;
	        this.match(TaskProjectParser.OPEN_PAREN);
	        this.state = 424;
	        this.varname();
	        this.state = 425;
	        this.match(TaskProjectParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ping() {
	    let localctx = new PingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, TaskProjectParser.RULE_ping);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 427;
	        this.match(TaskProjectParser.PING);
	        this.state = 428;
	        this.match(TaskProjectParser.OPEN_PAREN);
	        this.state = 429;
	        this.varname();
	        this.state = 432;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 430;
	            this.match(TaskProjectParser.COMMA);
	            this.state = 431;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	        }

	        this.state = 434;
	        this.match(TaskProjectParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, TaskProjectParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 436;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 441;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 437;
	                this.match(TaskProjectParser.TEXT);
	                this.state = 438;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 443;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	        }

	        this.state = 447;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 444;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 445;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 446;
	            this.match(TaskProjectParser.TEXT);
	            break;

	        }
	        this.state = 449;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additional() {
	    let localctx = new AdditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, TaskProjectParser.RULE_additional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this.additionalKey();
	        this.state = 452;
	        this.match(TaskProjectParser.COLON);
	        this.state = 453;
	        this.additionalValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additionalKey() {
	    let localctx = new AdditionalKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, TaskProjectParser.RULE_additionalKey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455;
	        this.match(TaskProjectParser.QUOTED_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additionalValue() {
	    let localctx = new AdditionalValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, TaskProjectParser.RULE_additionalValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        this.match(TaskProjectParser.QUOTED_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	depsArrow() {
	    let localctx = new DepsArrowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, TaskProjectParser.RULE_depsArrow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        this.left();
	        this.state = 460;
	        this.match(TaskProjectParser.ARROW);
	        this.state = 461;
	        this.right();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	left() {
	    let localctx = new LeftContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, TaskProjectParser.RULE_left);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.match(TaskProjectParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	right() {
	    let localctx = new RightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, TaskProjectParser.RULE_right);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
	        this.match(TaskProjectParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varname() {
	    let localctx = new VarnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, TaskProjectParser.RULE_varname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
	        this.match(TaskProjectParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcname() {
	    let localctx = new FuncnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, TaskProjectParser.RULE_funcname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 469;
	        this.match(TaskProjectParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TaskProjectParser.EOF = antlr4.Token.EOF;
TaskProjectParser.LEADING_SPACE = 1;
TaskProjectParser.TASK_DEF = 2;
TaskProjectParser.PROJECT_DEF = 3;
TaskProjectParser.USER_DEF = 4;
TaskProjectParser.NAME = 5;
TaskProjectParser.DESCRIPTION = 6;
TaskProjectParser.DEADLINE = 7;
TaskProjectParser.STATUS = 8;
TaskProjectParser.PRIORITY = 9;
TaskProjectParser.DEPS = 10;
TaskProjectParser.USERS = 11;
TaskProjectParser.CALLBACKS = 12;
TaskProjectParser.ONUNBLOCK = 13;
TaskProjectParser.REMINDER = 14;
TaskProjectParser.EMAIL = 15;
TaskProjectParser.TASKS = 16;
TaskProjectParser.PROJECTS = 17;
TaskProjectParser.ADDITIONAL = 18;
TaskProjectParser.SET = 19;
TaskProjectParser.SET_DEPS = 20;
TaskProjectParser.FUNCTION = 21;
TaskProjectParser.ASSIGN = 22;
TaskProjectParser.STARTED = 23;
TaskProjectParser.BLOCKED = 24;
TaskProjectParser.FINISHED = 25;
TaskProjectParser.PING = 26;
TaskProjectParser.IF = 27;
TaskProjectParser.ELSE = 28;
TaskProjectParser.TEXT = 29;
TaskProjectParser.QUOTED_TEXT = 30;
TaskProjectParser.NUM = 31;
TaskProjectParser.COLON = 32;
TaskProjectParser.SEMICOLON = 33;
TaskProjectParser.COMMA = 34;
TaskProjectParser.OPEN_BRACES = 35;
TaskProjectParser.CLOSE_BRACES = 36;
TaskProjectParser.OPEN_PAREN = 37;
TaskProjectParser.CLOSE_PAREN = 38;
TaskProjectParser.ARROW = 39;
TaskProjectParser.EQ = 40;
TaskProjectParser.NEGATION = 41;
TaskProjectParser.SPACE = 42;
TaskProjectParser.NEWLINE = 43;

TaskProjectParser.RULE_program = 0;
TaskProjectParser.RULE_task = 1;
TaskProjectParser.RULE_taskBody = 2;
TaskProjectParser.RULE_taskProperty = 3;
TaskProjectParser.RULE_project = 4;
TaskProjectParser.RULE_projectBody = 5;
TaskProjectParser.RULE_projectProperty = 6;
TaskProjectParser.RULE_user = 7;
TaskProjectParser.RULE_userBody = 8;
TaskProjectParser.RULE_userProperty = 9;
TaskProjectParser.RULE_set = 10;
TaskProjectParser.RULE_setProperty = 11;
TaskProjectParser.RULE_setDepsArrowNotation = 12;
TaskProjectParser.RULE_setName = 13;
TaskProjectParser.RULE_setDescription = 14;
TaskProjectParser.RULE_setDeadline = 15;
TaskProjectParser.RULE_setStatus = 16;
TaskProjectParser.RULE_setPriority = 17;
TaskProjectParser.RULE_setEmail = 18;
TaskProjectParser.RULE_setDeps = 19;
TaskProjectParser.RULE_setUsers = 20;
TaskProjectParser.RULE_setTasks = 21;
TaskProjectParser.RULE_setProjects = 22;
TaskProjectParser.RULE_setAdditional = 23;
TaskProjectParser.RULE_setCallbacks = 24;
TaskProjectParser.RULE_callBackFields = 25;
TaskProjectParser.RULE_onUnblock = 26;
TaskProjectParser.RULE_reminder = 27;
TaskProjectParser.RULE_func = 28;
TaskProjectParser.RULE_functionBody = 29;
TaskProjectParser.RULE_funcFields = 30;
TaskProjectParser.RULE_conditional = 31;
TaskProjectParser.RULE_condition = 32;
TaskProjectParser.RULE_block = 33;
TaskProjectParser.RULE_blockFields = 34;
TaskProjectParser.RULE_assign = 35;
TaskProjectParser.RULE_started = 36;
TaskProjectParser.RULE_blocked = 37;
TaskProjectParser.RULE_finished = 38;
TaskProjectParser.RULE_ping = 39;
TaskProjectParser.RULE_array = 40;
TaskProjectParser.RULE_additional = 41;
TaskProjectParser.RULE_additionalKey = 42;
TaskProjectParser.RULE_additionalValue = 43;
TaskProjectParser.RULE_depsArrow = 44;
TaskProjectParser.RULE_left = 45;
TaskProjectParser.RULE_right = 46;
TaskProjectParser.RULE_varname = 47;
TaskProjectParser.RULE_funcname = 48;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_program;
    }

	EOF() {
	    return this.getToken(TaskProjectParser.EOF, 0);
	};

	task = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TaskContext);
	    } else {
	        return this.getTypedRuleContext(TaskContext,i);
	    }
	};

	project = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProjectContext);
	    } else {
	        return this.getTypedRuleContext(ProjectContext,i);
	    }
	};

	user = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UserContext);
	    } else {
	        return this.getTypedRuleContext(UserContext,i);
	    }
	};

	set = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetContext);
	    } else {
	        return this.getTypedRuleContext(SetContext,i);
	    }
	};

	setDepsArrowNotation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetDepsArrowNotationContext);
	    } else {
	        return this.getTypedRuleContext(SetDepsArrowNotationContext,i);
	    }
	};

	func = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncContext);
	    } else {
	        return this.getTypedRuleContext(FuncContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TaskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_task;
    }

	TASK_DEF() {
	    return this.getToken(TaskProjectParser.TASK_DEF, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	taskBody() {
	    return this.getTypedRuleContext(TaskBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterTask(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitTask(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitTask(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TaskBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_taskBody;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	taskProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TaskPropertyContext);
	    } else {
	        return this.getTypedRuleContext(TaskPropertyContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterTaskBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitTaskBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitTaskBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TaskPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_taskProperty;
    }

	setName() {
	    return this.getTypedRuleContext(SetNameContext,0);
	};

	setDescription() {
	    return this.getTypedRuleContext(SetDescriptionContext,0);
	};

	setDeadline() {
	    return this.getTypedRuleContext(SetDeadlineContext,0);
	};

	setStatus() {
	    return this.getTypedRuleContext(SetStatusContext,0);
	};

	setPriority() {
	    return this.getTypedRuleContext(SetPriorityContext,0);
	};

	setDeps() {
	    return this.getTypedRuleContext(SetDepsContext,0);
	};

	setUsers() {
	    return this.getTypedRuleContext(SetUsersContext,0);
	};

	setCallbacks() {
	    return this.getTypedRuleContext(SetCallbacksContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterTaskProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitTaskProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitTaskProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_project;
    }

	PROJECT_DEF() {
	    return this.getToken(TaskProjectParser.PROJECT_DEF, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	projectBody() {
	    return this.getTypedRuleContext(ProjectBodyContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterProject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitProject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitProject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProjectBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_projectBody;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	projectProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProjectPropertyContext);
	    } else {
	        return this.getTypedRuleContext(ProjectPropertyContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterProjectBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitProjectBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitProjectBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProjectPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_projectProperty;
    }

	setName() {
	    return this.getTypedRuleContext(SetNameContext,0);
	};

	setDescription() {
	    return this.getTypedRuleContext(SetDescriptionContext,0);
	};

	setDeadline() {
	    return this.getTypedRuleContext(SetDeadlineContext,0);
	};

	setStatus() {
	    return this.getTypedRuleContext(SetStatusContext,0);
	};

	setPriority() {
	    return this.getTypedRuleContext(SetPriorityContext,0);
	};

	setDeps() {
	    return this.getTypedRuleContext(SetDepsContext,0);
	};

	setUsers() {
	    return this.getTypedRuleContext(SetUsersContext,0);
	};

	setTasks() {
	    return this.getTypedRuleContext(SetTasksContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterProjectProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitProjectProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitProjectProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UserContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_user;
    }

	USER_DEF() {
	    return this.getToken(TaskProjectParser.USER_DEF, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	userBody() {
	    return this.getTypedRuleContext(UserBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterUser(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitUser(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitUser(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UserBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_userBody;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	userProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UserPropertyContext);
	    } else {
	        return this.getTypedRuleContext(UserPropertyContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterUserBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitUserBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitUserBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UserPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_userProperty;
    }

	setName() {
	    return this.getTypedRuleContext(SetNameContext,0);
	};

	setEmail() {
	    return this.getTypedRuleContext(SetEmailContext,0);
	};

	setTasks() {
	    return this.getTypedRuleContext(SetTasksContext,0);
	};

	setProjects() {
	    return this.getTypedRuleContext(SetProjectsContext,0);
	};

	setAdditional() {
	    return this.getTypedRuleContext(SetAdditionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterUserProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitUserProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitUserProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_set;
    }

	SET() {
	    return this.getToken(TaskProjectParser.SET, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	setProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetPropertyContext);
	    } else {
	        return this.getTypedRuleContext(SetPropertyContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setProperty;
    }

	setName() {
	    return this.getTypedRuleContext(SetNameContext,0);
	};

	setDescription() {
	    return this.getTypedRuleContext(SetDescriptionContext,0);
	};

	setDeadline() {
	    return this.getTypedRuleContext(SetDeadlineContext,0);
	};

	setStatus() {
	    return this.getTypedRuleContext(SetStatusContext,0);
	};

	setPriority() {
	    return this.getTypedRuleContext(SetPriorityContext,0);
	};

	setEmail() {
	    return this.getTypedRuleContext(SetEmailContext,0);
	};

	setDeps() {
	    return this.getTypedRuleContext(SetDepsContext,0);
	};

	setUsers() {
	    return this.getTypedRuleContext(SetUsersContext,0);
	};

	setTasks() {
	    return this.getTypedRuleContext(SetTasksContext,0);
	};

	setProjects() {
	    return this.getTypedRuleContext(SetProjectsContext,0);
	};

	setAdditional() {
	    return this.getTypedRuleContext(SetAdditionalContext,0);
	};

	setCallbacks() {
	    return this.getTypedRuleContext(SetCallbacksContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDepsArrowNotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setDepsArrowNotation;
    }

	SET() {
	    return this.getToken(TaskProjectParser.SET, 0);
	};

	SET_DEPS() {
	    return this.getToken(TaskProjectParser.SET_DEPS, 0);
	};

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	depsArrow = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DepsArrowContext);
	    } else {
	        return this.getTypedRuleContext(DepsArrowContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetDepsArrowNotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetDepsArrowNotation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetDepsArrowNotation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setName;
    }

	NAME() {
	    return this.getToken(TaskProjectParser.NAME, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setDescription;
    }

	DESCRIPTION() {
	    return this.getToken(TaskProjectParser.DESCRIPTION, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetDescription(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetDescription(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDeadlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setDeadline;
    }

	DEADLINE() {
	    return this.getToken(TaskProjectParser.DEADLINE, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetDeadline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetDeadline(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetDeadline(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetStatusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setStatus;
    }

	STATUS() {
	    return this.getToken(TaskProjectParser.STATUS, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetStatus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetStatus(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetStatus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetPriorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setPriority;
    }

	PRIORITY() {
	    return this.getToken(TaskProjectParser.PRIORITY, 0);
	};

	NUM() {
	    return this.getToken(TaskProjectParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetPriority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetPriority(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetPriority(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetEmailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setEmail;
    }

	EMAIL() {
	    return this.getToken(TaskProjectParser.EMAIL, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetEmail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetEmail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetEmail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDepsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setDeps;
    }

	DEPS() {
	    return this.getToken(TaskProjectParser.DEPS, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetDeps(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetDeps(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetDeps(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetUsersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setUsers;
    }

	USERS() {
	    return this.getToken(TaskProjectParser.USERS, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetUsers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetUsers(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetUsers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetTasksContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setTasks;
    }

	TASKS() {
	    return this.getToken(TaskProjectParser.TASKS, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetTasks(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetTasks(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetTasks(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetProjectsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setProjects;
    }

	PROJECTS() {
	    return this.getToken(TaskProjectParser.PROJECTS, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetProjects(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetProjects(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetProjects(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetAdditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setAdditional;
    }

	ADDITIONAL() {
	    return this.getToken(TaskProjectParser.ADDITIONAL, 0);
	};

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	additional = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditionalContext);
	    } else {
	        return this.getTypedRuleContext(AdditionalContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetAdditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetAdditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetAdditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetCallbacksContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setCallbacks;
    }

	CALLBACKS() {
	    return this.getToken(TaskProjectParser.CALLBACKS, 0);
	};

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	callBackFields = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallBackFieldsContext);
	    } else {
	        return this.getTypedRuleContext(CallBackFieldsContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetCallbacks(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetCallbacks(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetCallbacks(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallBackFieldsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_callBackFields;
    }

	onUnblock() {
	    return this.getTypedRuleContext(OnUnblockContext,0);
	};

	reminder() {
	    return this.getTypedRuleContext(ReminderContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterCallBackFields(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitCallBackFields(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitCallBackFields(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OnUnblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_onUnblock;
    }

	ONUNBLOCK() {
	    return this.getToken(TaskProjectParser.ONUNBLOCK, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterOnUnblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitOnUnblock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitOnUnblock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReminderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_reminder;
    }

	REMINDER() {
	    return this.getToken(TaskProjectParser.REMINDER, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterReminder(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitReminder(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitReminder(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_func;
    }

	FUNCTION() {
	    return this.getToken(TaskProjectParser.FUNCTION, 0);
	};

	funcname() {
	    return this.getTypedRuleContext(FuncnameContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(TaskProjectParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(TaskProjectParser.CLOSE_PAREN, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitFunc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitFunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_functionBody;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	funcFields = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncFieldsContext);
	    } else {
	        return this.getTypedRuleContext(FuncFieldsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitFunctionBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitFunctionBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncFieldsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_funcFields;
    }

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	started() {
	    return this.getTypedRuleContext(StartedContext,0);
	};

	blocked() {
	    return this.getTypedRuleContext(BlockedContext,0);
	};

	finished() {
	    return this.getTypedRuleContext(FinishedContext,0);
	};

	ping() {
	    return this.getTypedRuleContext(PingContext,0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterFuncFields(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitFuncFields(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitFuncFields(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_conditional;
    }

	IF() {
	    return this.getToken(TaskProjectParser.IF, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(TaskProjectParser.OPEN_PAREN, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(TaskProjectParser.CLOSE_PAREN, 0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(TaskProjectParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitConditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitConditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_condition;
    }

	started() {
	    return this.getTypedRuleContext(StartedContext,0);
	};

	blocked() {
	    return this.getTypedRuleContext(BlockedContext,0);
	};

	finished() {
	    return this.getTypedRuleContext(FinishedContext,0);
	};

	NEGATION() {
	    return this.getToken(TaskProjectParser.NEGATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_block;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	blockFields = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockFieldsContext);
	    } else {
	        return this.getTypedRuleContext(BlockFieldsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockFieldsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_blockFields;
    }

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	started() {
	    return this.getTypedRuleContext(StartedContext,0);
	};

	blocked() {
	    return this.getTypedRuleContext(BlockedContext,0);
	};

	finished() {
	    return this.getTypedRuleContext(FinishedContext,0);
	};

	ping() {
	    return this.getTypedRuleContext(PingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterBlockFields(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitBlockFields(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitBlockFields(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_assign;
    }

	ASSIGN() {
	    return this.getToken(TaskProjectParser.ASSIGN, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(TaskProjectParser.OPEN_PAREN, 0);
	};

	varname = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarnameContext);
	    } else {
	        return this.getTypedRuleContext(VarnameContext,i);
	    }
	};

	COMMA() {
	    return this.getToken(TaskProjectParser.COMMA, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(TaskProjectParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StartedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_started;
    }

	STARTED() {
	    return this.getToken(TaskProjectParser.STARTED, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(TaskProjectParser.OPEN_PAREN, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(TaskProjectParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterStarted(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitStarted(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitStarted(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_blocked;
    }

	BLOCKED() {
	    return this.getToken(TaskProjectParser.BLOCKED, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(TaskProjectParser.OPEN_PAREN, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(TaskProjectParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterBlocked(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitBlocked(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitBlocked(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinishedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_finished;
    }

	FINISHED() {
	    return this.getToken(TaskProjectParser.FINISHED, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(TaskProjectParser.OPEN_PAREN, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(TaskProjectParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterFinished(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitFinished(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitFinished(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_ping;
    }

	PING() {
	    return this.getToken(TaskProjectParser.PING, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(TaskProjectParser.OPEN_PAREN, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(TaskProjectParser.CLOSE_PAREN, 0);
	};

	COMMA() {
	    return this.getToken(TaskProjectParser.COMMA, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterPing(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitPing(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitPing(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_array;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TEXT);
	    } else {
	        return this.getToken(TaskProjectParser.TEXT, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_additional;
    }

	additionalKey() {
	    return this.getTypedRuleContext(AdditionalKeyContext,0);
	};

	COLON() {
	    return this.getToken(TaskProjectParser.COLON, 0);
	};

	additionalValue() {
	    return this.getTypedRuleContext(AdditionalValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterAdditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitAdditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitAdditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditionalKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_additionalKey;
    }

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterAdditionalKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitAdditionalKey(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitAdditionalKey(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditionalValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_additionalValue;
    }

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterAdditionalValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitAdditionalValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitAdditionalValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DepsArrowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_depsArrow;
    }

	left() {
	    return this.getTypedRuleContext(LeftContext,0);
	};

	ARROW() {
	    return this.getToken(TaskProjectParser.ARROW, 0);
	};

	right() {
	    return this.getTypedRuleContext(RightContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterDepsArrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitDepsArrow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitDepsArrow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeftContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_left;
    }

	TEXT() {
	    return this.getToken(TaskProjectParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterLeft(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitLeft(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitLeft(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_right;
    }

	TEXT() {
	    return this.getToken(TaskProjectParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterRight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitRight(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitRight(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_varname;
    }

	TEXT() {
	    return this.getToken(TaskProjectParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterVarname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitVarname(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitVarname(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_funcname;
    }

	TEXT() {
	    return this.getToken(TaskProjectParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterFuncname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitFuncname(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitFuncname(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TaskProjectParser.ProgramContext = ProgramContext; 
TaskProjectParser.TaskContext = TaskContext; 
TaskProjectParser.TaskBodyContext = TaskBodyContext; 
TaskProjectParser.TaskPropertyContext = TaskPropertyContext; 
TaskProjectParser.ProjectContext = ProjectContext; 
TaskProjectParser.ProjectBodyContext = ProjectBodyContext; 
TaskProjectParser.ProjectPropertyContext = ProjectPropertyContext; 
TaskProjectParser.UserContext = UserContext; 
TaskProjectParser.UserBodyContext = UserBodyContext; 
TaskProjectParser.UserPropertyContext = UserPropertyContext; 
TaskProjectParser.SetContext = SetContext; 
TaskProjectParser.SetPropertyContext = SetPropertyContext; 
TaskProjectParser.SetDepsArrowNotationContext = SetDepsArrowNotationContext; 
TaskProjectParser.SetNameContext = SetNameContext; 
TaskProjectParser.SetDescriptionContext = SetDescriptionContext; 
TaskProjectParser.SetDeadlineContext = SetDeadlineContext; 
TaskProjectParser.SetStatusContext = SetStatusContext; 
TaskProjectParser.SetPriorityContext = SetPriorityContext; 
TaskProjectParser.SetEmailContext = SetEmailContext; 
TaskProjectParser.SetDepsContext = SetDepsContext; 
TaskProjectParser.SetUsersContext = SetUsersContext; 
TaskProjectParser.SetTasksContext = SetTasksContext; 
TaskProjectParser.SetProjectsContext = SetProjectsContext; 
TaskProjectParser.SetAdditionalContext = SetAdditionalContext; 
TaskProjectParser.SetCallbacksContext = SetCallbacksContext; 
TaskProjectParser.CallBackFieldsContext = CallBackFieldsContext; 
TaskProjectParser.OnUnblockContext = OnUnblockContext; 
TaskProjectParser.ReminderContext = ReminderContext; 
TaskProjectParser.FuncContext = FuncContext; 
TaskProjectParser.FunctionBodyContext = FunctionBodyContext; 
TaskProjectParser.FuncFieldsContext = FuncFieldsContext; 
TaskProjectParser.ConditionalContext = ConditionalContext; 
TaskProjectParser.ConditionContext = ConditionContext; 
TaskProjectParser.BlockContext = BlockContext; 
TaskProjectParser.BlockFieldsContext = BlockFieldsContext; 
TaskProjectParser.AssignContext = AssignContext; 
TaskProjectParser.StartedContext = StartedContext; 
TaskProjectParser.BlockedContext = BlockedContext; 
TaskProjectParser.FinishedContext = FinishedContext; 
TaskProjectParser.PingContext = PingContext; 
TaskProjectParser.ArrayContext = ArrayContext; 
TaskProjectParser.AdditionalContext = AdditionalContext; 
TaskProjectParser.AdditionalKeyContext = AdditionalKeyContext; 
TaskProjectParser.AdditionalValueContext = AdditionalValueContext; 
TaskProjectParser.DepsArrowContext = DepsArrowContext; 
TaskProjectParser.LeftContext = LeftContext; 
TaskProjectParser.RightContext = RightContext; 
TaskProjectParser.VarnameContext = VarnameContext; 
TaskProjectParser.FuncnameContext = FuncnameContext; 
