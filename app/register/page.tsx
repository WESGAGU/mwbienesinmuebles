'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { UserPlus, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ApiError {
  response?: {
    data?: {
      error?: {
        message?: string;
      };
    };
  };
}

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      if (response.jwt) {
        localStorage.setItem('token', response.jwt);
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const apiError = err as ApiError;
        setError(apiError.response?.data?.error?.message || 'Error al registrar usuario');
      } else {
        setError('Error al registrar usuario');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <UserPlus className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-center">Crear cuenta</h2>
          <p className="text-sm text-muted-foreground text-center">
            Ingresa tus datos para registrarte
          </p>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {isSuccess && (
             <Alert variant="default" className="mb-4 border-green-500 bg-green-50">
             <CheckCircle className="h-4 w-4 text-green-500" />
             <AlertTitle className="text-green-800">¡Registro exitoso!</AlertTitle>
             <AlertDescription className="text-green-700">
               Has sido registrado correctamente. Serás redirigido en unos segundos.
             </AlertDescription>
           </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input
                id="username"
                type="text"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Registrarse
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="text-primary hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}