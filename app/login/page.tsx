'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.STRAPI_HOST}/api/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.jwt) {
        localStorage.setItem('token', data.jwt); // Almacenar el token
        toast.success('Inicio de sesión exitoso.');
        router.push('/dashboard');
      } else {
        toast.error('Credenciales incorrectas.');
      }
    } catch (err: unknown) {
      console.error('Error al iniciar sesión:', err);
      toast.error('Ocurrió un error. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <LogIn className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-center">Iniciar sesión</h2>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="identifier">Email o nombre de usuario</Label>
              <Input
                id="identifier"
                type="text"
                required
                value={credentials.identifier}
                onChange={(e) =>
                  setCredentials({ ...credentials, identifier: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                required
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              ¿No tienes una cuenta?{' '}
              <Link href="/register" className="text-primary hover:underline">
                Registrarse
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}