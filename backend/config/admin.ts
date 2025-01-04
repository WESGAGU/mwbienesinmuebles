// Define el tipo para la función env
type EnvFunction = {
  (key: string): string | undefined; // Para valores de tipo string
  bool(key: string, defaultValue?: boolean): boolean; // Para valores de tipo boolean
  int(key: string, defaultValue?: number): number; // Para valores de tipo number
  array(key: string, defaultValue?: string[]): string[]; // Para valores de tipo array
};

export default ({ env }: { env: EnvFunction }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'), // Usa la variable de entorno ADMIN_JWT_SECRET
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'), // Usa la variable de entorno API_TOKEN_SALT
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'), // Usa la variable de entorno TRANSFER_TOKEN_SALT
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true), // Usa la variable de entorno FLAG_NPS (con valor predeterminado true)
    promoteEE: env.bool('FLAG_PROMOTE_EE', true), // Usa la variable de entorno FLAG_PROMOTE_EE (con valor predeterminado true)
  },
});