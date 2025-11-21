import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Definimos que o Dashboard aceita uma função para "Sair" (logout)
interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 bg-gray-100">
      <Card className="w-full max-w-4xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-pink-500 text-2xl">Feed Femboy Social</CardTitle>
          <Button variant="outline" onClick={onLogout}>Sair</Button>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Bem-vindo ao seu feed! (Aqui entrarão os posts)</p>
        </CardContent>
      </Card>
    </div>
  );
}