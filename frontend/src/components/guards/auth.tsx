import apiUrl from "@/lib/apiUrl";
import useAuth from "@/state/auth";
import { Navigate } from "@tanstack/react-router";
import { ReactNode, useEffect, useState } from "react";
import Spinner from "../spinners/spinner";
import { Label } from "../ui/label";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const [isAuthenticating, setAuthenticating] = useState(true);
  const { isAuthenticated, toggle } = useAuth();

  useEffect(() => {
    const disposeableTimeout = setTimeout(async () => {
      try {
        const checkResponse = await fetch(apiUrl + "/authentication/check", {
          method: "GET",
        });

        const checkStatus = checkResponse.status;

        if (checkStatus === 200) {
          toggle();
        }

        return setAuthenticating(false);
      } catch {
        return setAuthenticating(false);
      }
    }, 500);

    return () => clearTimeout(disposeableTimeout);
  }, []);

  if (isAuthenticating)
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex items-center space-x-3">
          <Spinner className="w-4 h-4" />
          <Label>Checking authentication...</Label>
        </div>
      </div>
    );

  if (!isAuthenticating && !isAuthenticated)
    return (
      <Navigate
        to="/authentication/login"
        search={{ redirect: location.pathname }}
      />
    );

  return children;
}
