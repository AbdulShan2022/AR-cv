import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return new Response('Hello, from API!');
}

export async function POST(request: NextResponse, res: any){
  // try {
    const formData = await request.formData();
    console.log("hello", formData, request);
    // const file = formData.get('file'); // or what you need
    // const buffer = Buffer.from(await file.arrayBuffer());

    // ready your file on buffer
    
    return NextResponse.json({formData});

// } catch (error) {
//     return NextResponse.json({ error: error });
// }
}
