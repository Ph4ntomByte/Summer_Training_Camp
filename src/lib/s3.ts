import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'eu-central-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function uploadToS3(
  bucket: string,
  key: string,
  body: Buffer | Uint8Array | Blob | string,
  contentType?: string
) {
  try {
    console.log('S3 upload configuration:', {
      region: process.env.AWS_REGION,
      hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
      hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
      bucket,
      key,
      contentType,
      bodySize: body instanceof Buffer ? body.length : 'unknown'
    });

    const cmd = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      ACL: "public-read",
    });

    const result = await s3.send(cmd);
    console.log('S3 upload successful:', result);
    return result;
  } catch (error) {
    console.error('S3 upload error:', error);
    throw error;
  }
}