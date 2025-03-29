import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/mongoose';
import Park from '@/models/Park';

// GET /api/parks/[id] - Get a park by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    
    const park = await Park.findOne({ id: params.id });
    
    if (!park) {
      return NextResponse.json(
        { error: 'Park not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ park }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching park ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch park' },
      { status: 500 }
    );
  }
}

// PATCH /api/parks/[id] - Update a park by ID
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    
    const park = await Park.findOneAndUpdate(
      { id: params.id },
      { $set: body },
      { new: true }
    );
    
    if (!park) {
      return NextResponse.json(
        { error: 'Park not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ park }, { status: 200 });
  } catch (error) {
    console.error(`Error updating park ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to update park' },
      { status: 500 }
    );
  }
}
