import { NextResponse } from "next/server";
// const { Configuration, OpenAIApi } = require("openai");
import { Configuration,OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
//openai

export async function POST(req:Request){
    const body=await req.json()
    // console.log(body)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:body.msg,
        temperature: 0,
        max_tokens: 250,
      });
      const res=response.data.choices[0].text
    return NextResponse.json({message:res})
}

//post api 
//openai --api key