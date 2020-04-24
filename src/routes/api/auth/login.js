export async function get(req, res, next) {
  console.log(req);
  const redirectUrl = new URL('https://www.fitbit.com/oauth2/authorize');
  const queryParams = {
    client_id: process.env.FITBIT_CLIENT_ID,
    response_type: 'code',
    scope: 'nutrition',
    redirect_uri: 'http://localhost:3000/api/auth/redirect',
    expires_in: 604800,
  };
  for (let [key, value] of Object.entries(queryParams)) {
    redirectUrl.searchParams.append(key, value);
  }

  res.writeHead(302, {
    Location: redirectUrl.toString()
  })
  res.end()
}
