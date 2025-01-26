import { CarRange } from "@/types/EVTools";
import { evRangeData } from "@/dummyData/dummyData";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<CarRange[]>> {
  return NextResponse.json(evRangeData);
}
