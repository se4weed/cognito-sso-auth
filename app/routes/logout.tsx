import { redirect } from '@remix-run/react'
import { useAuth } from 'react-oidc-context';

export default function Logout() {
  const auth = useAuth();
  auth.removeUser();
  auth.signoutRedirect();

  redirect('/')
}
