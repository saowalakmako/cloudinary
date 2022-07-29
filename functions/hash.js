import crypto from 'crypto';

export const handler = async (event, context) => {
    const eventBody = JSON.parse(event.body);
    const timestamp = Date.now() / 1000 | 0;
    const input = `timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
    const hash = crypto.createHash('sha256').update(input).digest('hex');

    console.log(eventBody, hash);

    return {
        statusCode: 200,
        body: JSON.stringify({
            hash, timestamp, api_key: process.env.CLOUDINARY_API_KEY
        })
    }
}