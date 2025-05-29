import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
});

export async function uploadToS3(
  bucket: string,
  key: string,
  body: Buffer | Uint8Array | Blob | string,
  contentType?: string
) {
  const cmd = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: contentType,
    ACL: "private",
  });
  return s3.send(cmd);
}