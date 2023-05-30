export const URL_HOST =
  process.env.NODE_ENV === "production"
    ? "https://worker-proxy1.heyyhey.workers.dev/?targetUrl=http://dccmusiclibrarybackend-env.eba-xevmbssv.us-east-2.elasticbeanstalk.com"
    : "http://127.0.0.1:8000";
