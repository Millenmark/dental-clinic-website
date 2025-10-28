import { useEffect, useState } from "react";

export default function Confirm() {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("Processing confirmation…");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const tokenParam = search.get("token");

    if (!tokenParam) {
      setError("Missing token.");
      setLoading(false);
      return;
    }

    (async () => {
      try {
        // Decode the backend URL once
        const decodedUrl = decodeURIComponent(tokenParam.trim());
        console.log("Decoded confirmation URL:", decodedUrl);

        // Optional: basic sanity check
        if (!decodedUrl.includes("/appointments/confirm")) {
          setError("Invalid confirmation URL.");
          setLoading(false);
          return;
        }

        // Send GET request directly to backend
        const response = await fetch(decodedUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        });

        const contentType = response.headers.get("content-type") || "";
        let body: any = null;

        if (contentType.includes("application/json")) {
          body = await response.json();
        } else {
          body = await response.text();
        }

        if (response.ok) {
          setMessage(body?.message || "Appointment confirmed successfully.");
          setError(null);
        } else {
          setError(body?.message || `Request failed with ${response.status}.`);
        }
      } catch (err) {
        console.error("Error confirming appointment:", err);
        setError("Invalid or expired token.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto py-20 text-center">
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
