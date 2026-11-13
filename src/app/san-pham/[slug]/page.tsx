import { cache } from 'react';
import { notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import ProductInteraction from '@/components/ProductInteraction';
import CarouselSwiper from '@/components/CarouselSwiper';
import ModalClient from '@/components/ModalClient';
import Goback from '@/components/Goback';
import { db } from '../../../../database/drizzle';
import {
  productDetails,
  products,
  brands,
  categories,
} from '../../../../database/schema';

const getProductBySlug = cache(async (slug: string) => {
  const result = await db
    .select()
    .from(products)
    .leftJoin(productDetails, eq(products.id, productDetails.productId))
    .leftJoin(brands, eq(products.brandId, brands.id))
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(eq(products.slug, slug))
    .limit(1);
  return result[0] ?? null;
});

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const result = await db
    .select()
    .from(products)
    .leftJoin(productDetails, eq(products.id, productDetails.productId))
    .where(eq(products.slug, (await params).slug));

  return {
    title: result[0].products.name,
    description: result[0].product_details!.shortDescription,
  };
};

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const data = await getProductBySlug(slug);
  if (!data) {
    notFound();
  }

  return (
    <div>
      <Goback />
      <div className='flex flex-col gap-4 lg:flex-row md:gap-12'>
        <div className='w-full lg:w-5/12'>
          <CarouselSwiper
            carousel={data.product_details?.carousel ?? []}
            coverImage={data.products.coverImage}
          />
          {data.product_details?.video &&
            data.product_details.video !== 'null' && (
              <ModalClient>
                <div className='aspect-3/4'>
                  <video
                    src={data.product_details.video}
                    controls
                    autoPlay={false}
                    className='rounded-lg'
                  />
                </div>
              </ModalClient>
            )}
        </div>
        <div className='w-full lg:w-7/12 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>{data.products.name}</h1>
          <div className='flex items-center gap-2 text-gray-500'>
            <p>Model: {data.products.model}</p>
            <span> | </span>
            <p>Danh mục: {data.categories?.name}</p>
            <span> | </span>
            <p>Hãng: {data.brands?.name}</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-2xl font-bold text-[#fb77c5]'>
              {Number(data.products.finalPrice).toLocaleString()} đ
            </p>
            <p className='text-2xl line-through text-gray-500'>
              {Number(data.products.price).toLocaleString()} đ
            </p>
          </div>
          <ProductInteraction />
          <p className='text-gray-500'>Mô tả sản phẩm:</p>
          {data.product_details && (
            <>
              <h4>🔥{data.product_details.shortDescription}🔥</h4>
              {data.product_details.description.map((desc, index) => (
                <p className='leading-tight' key={index}>
                  ✅ {desc}
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
