export const URL_HOST =
  process.env.NODE_ENV === "production"
    ? "https://cors-everywhere-me.herokuapp.com/http://dccmusiclibrarybackend-env.eba-xevmbssv.us-east-2.elasticbeanstalk.com/"
    : "http://127.0.0.1:8000";
