import btoa from 'btoa';
import fetch from 'node-fetch';

export async function get(req, res, next) {
  const appUrl = new URL('http://' + req.headers.host + req.url);
  const fitbitCode = appUrl.searchParams.get('code');
  const fitbitClientId = process.env.FITBIT_CLIENT_ID;
  const fitbitClientSecret = process.env.FITBIT_CLIENT_SECRET;
  const authHeader = 'Basic ' + btoa(`${fitbitClientId}:${fitbitClientSecret}`);

  const fitbitUrl = new URL('https://api.fitbit.com/oauth2/token');
  const body = {
    code: fitbitCode,
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:3000/api/auth/redirect',
    client_id: fitbitClientId,
  };
  for (let [key, value] of Object.entries(body)) {
    fitbitUrl.searchParams.append(key, value);
  }

  const json = await fetch(fitbitUrl.toString(), {
    method: 'POST',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => res.json());

  const redirectUrl = new URL('http://localhost:3000');
  redirectUrl.hash = Object.entries(json)
    .map(([key, val]) => `${key}=${val}`)
    .join('&');

  res.writeHead(302, {
    Location: redirectUrl,
  });
  res.end();
}
