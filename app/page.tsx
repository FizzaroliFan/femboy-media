"use client";

import { useRouter } from "next/navigation"; // Importante: use next/navigation, não next/router
import AuthForm from "../components/pages/Authform";

export default function Home() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // Isso força o navegador a ir para a rota /dashboard
    console.log('logado')
    router.push("/dashboard");
  };

  return (
    <main>
      {/* Passamos a função de redirecionamento para o formulário */}
      <AuthForm onLoginSuccess={handleLoginSuccess} />
    </main>
  );
}