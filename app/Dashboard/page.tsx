"use client";

import { useRouter } from "next/navigation";
import DashboardComponent from "@/components/pages/Dashboard"; 
// Renomeie seu arquivo components/pages/Dashboard.tsx se precisar, ou importe assim

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Redireciona de volta para o login
    router.push("/");
  };

  return (
    // Renderizamos o componente que estava na pasta components
    <DashboardComponent onLogout={handleLogout} />
  );
}