import test from "node:test";
import assert from "node:assert/strict";
import {transformedValue,formatNumber} from "../src/lib/transformations";
test("vertical translation adds k",()=>assert.equal(transformedValue(x=>x*x,2,{a:1,b:1,h:0,k:3}),7));
test("horizontal translation right by h",()=>assert.equal(transformedValue(x=>x*x,4,{a:1,b:1,h:2,k:0}),4));
test("vertical reflection changes sign",()=>assert.equal(transformedValue(x=>x*x,2,{a:-1,b:1,h:0,k:0}),-4));
test("horizontal compression by b=2",()=>assert.equal(transformedValue(x=>x*x,1,{a:1,b:2,h:0,k:0}),4));
test("format number avoids unnecessary decimals",()=>assert.equal(formatNumber(2.5),"2.5"));
