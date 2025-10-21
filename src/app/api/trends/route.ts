import { NextResponse } from 'next/server'
import supabaseAdmin from '~/lib/supabaseAdmin'

export async function GET() {
  try {
   
    const { data: totalsData, error: totalsError } = await supabaseAdmin
      .from('prompts')
      .select('category')
    
    if (totalsError) throw totalsError

 
    const totals = { all: totalsData.length, coding: 0, marketing: 0, general: 0 }
    totalsData.forEach(p => {
      const cat = p.category || 'general'
      if (totals[cat as keyof typeof totals] !== undefined) totals[cat as keyof typeof totals]++
    })


    const { data: timeData, error: timeError } = await supabaseAdmin
      .rpc('get_last_60min_counts')
    

    if (timeError) throw timeError

    return NextResponse.json({
      totals,
      last60min: timeData
    })
  } catch (error: any) {
    console.error('Error fetching trends:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
