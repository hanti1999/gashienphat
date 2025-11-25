import ProductList from '@/components/ProductList';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import React from 'react';
import ratelimit from '../../../lib/ratelimit';

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect('/too-fast');

  return (
    <div>
      <ProductList category={category} params='products' />
    </div>
  );
};

export default ProductPage;
