import { NextResponse } from 'next/server';

const CF_ANALYTICS_URL = 'https://api.cloudflare.com/client/v4/graphql';
const CF_TOKEN = process.env.CLOUDFLARE_ANALYTICS_TOKEN;
const CF_ZONE_ID = process.env.CLOUDFLARE_ZONE_ID;

export async function GET() {
  try {
    const query = `
      query {
        viewer {
          zones(filter: { zoneTag: "${CF_ZONE_ID}" }) {
            httpRequests1dGroups(
              limit: 1
              filter: { date_gt: "2024-01-01" }
            ) {
              dimensions {
                date
              }
              sum {
                pageViews
                uniqueVisitors
              }
            }
          }
        }
      }
    `;

    const response = await fetch(CF_ANALYTICS_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CF_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const stats = data.data.viewer.zones[0].httpRequests1dGroups[0];

    return NextResponse.json({
      pageViews: stats.sum.pageViews,
      uniqueVisitors: stats.sum.uniqueVisitors,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
} 