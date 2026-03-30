import { useEffect } from "react";
import clientSecret from "@/secrets/client_secret_148029356875-kr1jv05injvi0gdkopbao9slm4r2e8o2.apps.googleusercontent.com.json"
// import clientSecret from "@/secrets/client_secret_2_148029356875-kr1jv05injvi0gdkopbao9slm4r2e8o2.apps.googleusercontent.com.json"


const GoogleOauth = () => {
  const handleCredentialResponse = (response : any) => {
    console.log("Encoded JWT ID token:", response.credential);

    // You usually send this token to your backend
  };

  useEffect(() => {
    // Prevent adding script multiple times
    if (document.getElementById("google-gsi-script")) return;

    const script = document.createElement("script");
    script.id = "google-gsi-script";
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (!window.google) return;

      window.google.accounts.id.initialize({
        client_id: clientSecret.web.client_id,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "outline", size: "large" }
      );
    };

    document.body.appendChild(script);

    return () => {
      // Optional: don't remove if reused globally
      // document.body.removeChild(script);
    };
  }, []);

  return <div id="googleSignInDiv"></div>;
};

export default GoogleOauth;