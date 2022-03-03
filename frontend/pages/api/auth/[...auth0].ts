// このファイルによって下記のルーティングが生成される
// /api/auth/login
// /api/auth/logout
// /api/auth/callback: The route Auth0 will redirect the user to after a successful login.
// /api/auth/me: The route to fetch the user profile from.

// Auth0
import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();