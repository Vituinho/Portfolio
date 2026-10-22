export type StackDomain = 'frontend' | 'backend' | 'data' | 'cloud';

export interface RouteStation {
  domain: StackDomain;
  name: { en: string; pt: string };
  detail: { en: string; pt: string };
}

export const stackDomainLabels: Record<StackDomain, { en: string; pt: string }> = {
  frontend: { en: 'Frontend', pt: 'Frontend' },
  backend: { en: 'Backend', pt: 'Backend' },
  data: { en: 'Data', pt: 'Dados' },
  cloud: { en: 'Cloud', pt: 'Nuvem' }
};

// The GVV Paraná order data path, from checkout to the off-site backup.
export const systemRoute: RouteStation[] = [
  {
    domain: 'frontend',
    name: { en: 'Next.js storefront', pt: 'Loja em Next.js' },
    detail: { en: 'Catalog, cart and checkout', pt: 'Catálogo, carrinho e checkout' }
  },
  {
    domain: 'backend',
    name: { en: 'Payment webhooks', pt: 'Webhooks de pagamento' },
    detail: { en: 'Mercado Pago events verified by signature', pt: 'Eventos do Mercado Pago verificados por assinatura' }
  },
  {
    domain: 'data',
    name: { en: 'PostgreSQL on Railway', pt: 'PostgreSQL no Railway' },
    detail: { en: 'Orders, stock and products through Prisma', pt: 'Pedidos, estoque e produtos via Prisma' }
  },
  {
    domain: 'cloud',
    name: { en: 'GitHub Actions', pt: 'GitHub Actions' },
    detail: { en: 'Verified pg_dump every 6 hours', pt: 'pg_dump verificado a cada 6 horas' }
  },
  {
    domain: 'cloud',
    name: { en: 'Amazon S3', pt: 'Amazon S3' },
    detail: { en: 'Encrypted backups through an IAM OIDC role, with no stored keys', pt: 'Backups criptografados via role IAM OIDC, sem chaves armazenadas' }
  },
  {
    domain: 'cloud',
    name: { en: 'CloudWatch and SNS', pt: 'CloudWatch e SNS' },
    detail: { en: 'Email alert if a backup is missed', pt: 'Alerta por e-mail se um backup não acontecer' }
  }
];
