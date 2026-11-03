import Anthropic from "@anthropic-ai/sdk";
import {NextRequest,NextResponse} from "next/server";
export const runtime="nodejs";
export async function POST(req:NextRequest){
 try{
  const body=await req.json();const message=typeof body.message==="string"?body.message.trim():"";
  if(!message)return NextResponse.json({error:"Please enter a question."},{status:400});
  if(message.length>2000)return NextResponse.json({error:"Please keep your question under 2,000 characters."},{status:400});
  if(!process.env.ANTHROPIC_API_KEY)return NextResponse.json({error:"The AI assistant is not configured yet. Add ANTHROPIC_API_KEY to the server environment, then restart or redeploy GraFix."},{status:503});
  const client=new Anthropic({apiKey:process.env.ANTHROPIC_API_KEY});
  const response=await client.messages.create({
   model:process.env.ANTHROPIC_MODEL||"claude-haiku-5-5",max_tokens:900,
   system:"You are GraFix, a friendly Pre-Calculus tutor for Senior High School students. Focus on graph transformations. Explain in clear student-friendly language, show steps for math, distinguish inside versus outside changes, and use y = a f(b(x - h)) + k when relevant. Be accurate. If a question is unrelated, briefly redirect to graph transformations. Do not claim to see a graph unless the student describes it.",
   messages:[{role:"user",content:message}]
  });
  const reply=response.content.filter(c=>c.type==="text").map(c=>c.text).join("\n").trim();
  return NextResponse.json({reply:reply||"I couldn't form a text response. Please try rephrasing your question."});
 }catch(error){
  console.error("GraFix assistant error",error);
  if(error instanceof Anthropic.APIError)return NextResponse.json({error:"The AI service could not complete the request. Check the API account, model access, and billing configuration, then try again."},{status:502});
  return NextResponse.json({error:"The request could not be processed. Please try again."},{status:500});
 }
}
