import { useEffect, useMemo, useState } from "react";

export default function Confirm() {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("Processing confirmation…");
  const [loading, setLoading] = useState<boolean>(true);

  const tokenParam = useMemo(() => {
    const search = new URLSearchParams(window.location.search);
    return search.get("token");
  }, []);

  useEffect(() => {
    if (!tokenParam) {
      setError("Missing token.");
      setLoading(false);
      return;
    }

    // token is a URL-encoded full URL to backend with query params
    (async () => {
      try {
        const decoded = decodeURIComponent(tokenParam);

        // Validate that it points to the expected backend host/path
        const url = new URL(decoded);
        if (
          url.hostname !== "dental-clinic-dashboard.test" ||
          (!url.pathname.startsWith("/api/appointments/confirm") &&
            !url.pathname.startsWith("/appointments/confirm"))
        ) {
          setError("Invalid confirmation URL.");
          setLoading(false);
          return;
        }

        // Perform a GET request to backend to complete confirmation
        const response = await fetch(decoded, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        });

        let bodyText = "";
        let bodyJson: any = null;
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          try {
            bodyJson = await response.json();
          } catch {
            // ignore JSON parse errors
          }
        } else {
          try {
            bodyText = await response.text();
          } catch {
            // ignore text read errors
          }
        }

        if (response.ok) {
          const msg = bodyJson?.message || bodyText || "Appointment confirmed.";
          setMessage(msg);
          setError(null);
        } else {
          const msg =
            bodyJson?.message ||
            bodyText ||
            `Request failed (${response.status}).`;
          setError(msg);
        }
      } catch (e) {
        setError("Invalid token format.");
      } finally {
        setLoading(false);
      }
    })();
  }, [tokenParam]);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-4">Appointment Confirmation</h1>
      {loading ? (
        <p>Processing confirmation…</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <p className="text-green-700">{message}</p>
      )}
    </div>
  );
}
