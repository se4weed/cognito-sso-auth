import type { MetaFunction } from "@remix-run/node";
import { useAuth } from "react-oidc-context";

export const meta: MetaFunction = () => {
  return [
    { title: "Cognito SSO Auth Demo Application" },
    { name: "Cognito SSO Auth Demo Application", content: "Cognito SSO Auth Demo Application" },
  ];
};

export default function Index() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = process.env.VITE_COGNITO_CLIENT_ID;
    const logoutUri = "https:localhost:5173/logout";
    const cognitoDomain = process.env.VITE_COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile?.identities[0]?.userId} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>
        {/* <pre>{JSON.stringify(auth, null, 2)}</pre> */}

        <Button onClick={() => auth.removeUser()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Button onClick={() => auth.signinRedirect()}>Sign in</Button>
      <Button onClick={() => signOutRedirect()}>Sign out</Button>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = ({ onClick, children }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}
