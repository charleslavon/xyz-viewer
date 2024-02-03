import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!process.env.CDN_AUTH || !process.env.CDN_ACCOUNT_ID)
          throw new Error('Invalid CDN environment variables');
    
        const { videoId } = req.query;
        const request = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CDN_ACCOUNT_ID}/stream/${videoId}/token`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.CDN_AUTH}`
          }
        });
        const data = await request.json();
        if(!data.success) {
            throw new Error("failed to get a video auth token")
        }

        res.status(200).json(data.result);
      } catch (error: any) {
        res.status(500).json({
          message: error?.message || 'Unknown error',
        });
      }
}

export default handler;