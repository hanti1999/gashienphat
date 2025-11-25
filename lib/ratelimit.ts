import { Ratelimit } from '@upstash/ratelimit';
import redis from '../database/redis';

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, '10 s'),
  analytics: true,
  prefix: '@upstash/ratelimit',
});

export default ratelimit;
