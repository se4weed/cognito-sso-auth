import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Cognito SSO Auth Demo Application" },
    { name: "Cognito SSO Auth Demo Application", content: "Cognito SSO Auth Demo Application" },
  ];
};

export default function Index() {
  return (
    <div>
      initialized.
    </div>
  );
}
