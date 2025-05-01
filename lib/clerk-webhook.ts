import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';

export async function verifyWebhook(
  req: Request,
  secret: string
): Promise<WebhookEvent> {
  const payload = await req.json();
  const headers = {
    'svix-id': req.headers.get('svix-id')!,
    'svix-timestamp': req.headers.get('svix-timestamp')!,
    'svix-signature': req.headers.get('svix-signature')!,
  };

  const wh = new Webhook(secret);
  return wh.verify(JSON.stringify(payload), headers) as WebhookEvent;
}