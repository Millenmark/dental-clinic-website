import { useEffect, useMemo, useState } from "react";

export default function Confirm() {
  const [error, setError] = useState<string | null>(null);

  const tokenParam = useMemo(() => {
    const search = new URLSearchParams(window.location.search);
    return search.get("token");
  }, []);

  useEffect(() => {
    if (!tokenParam) {
      setError("Missing token.");
      return;
    }

    // token is a URL-encoded full URL to backend with query params
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
        return;
      }

      // Perform a GET redirect to backend to complete confirmation
      window.location.replace(decoded);
    } catch (e) {
      setError("Invalid token format.");
    }
  }, [tokenParam]);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-4">Confirming your appointment…</h1>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <p>Please wait while we securely confirm your appointment.</p>
      )}
    </div>
  );
}
