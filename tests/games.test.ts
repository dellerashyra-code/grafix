import test from "node:test";
import assert from "node:assert/strict";
import {scoreAnswer} from "../src/lib/games";
test("correct answer awards ten points",()=>assert.equal(scoreAnswer(true,20),30));
test("incorrect answer does not change score",()=>assert.equal(scoreAnswer(false,20),20));
