import ProductInteraction from '@/components/ProductInteraction';
import CarouselSwiper from '@/components/CarouselSwiper';
import ModalClient from '@/components/ModalClient';
import { db } from '../../../../database/drizzle';
import {
  productDetails,
  products,
  brands,
  categories,
} from '../../../../database/schema';
import { eq } from 'drizzle-orm';
import { ArrowLeft } from 'lucide-react';
import Goback from '@/components/Goback';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const result = await db
    .select()
    .from(products)
    .leftJoin(productDetails, eq(products.id, productDetails.productId))
    .where(eq(products.id, (await params).id));

  return {
    title: result[0].products.name,
    describe: result[0].product_details!.shortDescription,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string }>;
}) => {
  const color = (await searchParams).color;

  const result = await db
    .select()
    .from(products)
    .leftJoin(productDetails, eq(products.id, productDetails.productId))
    .leftJoin(brands, eq(products.brandId, brands.id))
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(eq(products.id, (await params).id));

  // console.log(JSON.stringify(result, null, 2));

  const selectedColor = color || (result[0].products.colors[0] as string);

  return (
    <div>
      <Goback />
      <div className='flex flex-col gap-4 lg:flex-row md:gap-12'>
        <div className='w-full lg:w-5/12'>
          <CarouselSwiper
            carousel={result[0].product_details!.carousel}
            coverImage={result[0].products.coverImage[selectedColor]}
          />
          <ModalClient>
            <div className='aspect-[3/4]'>
              <video
                src={result[0].product_details!.video}
                controls
                autoPlay={false}
                className='rounded-lg'
              />
            </div>
          </ModalClient>
        </div>

        <div className='w-full lg:w-7/12 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>{result[0].products.name}</h1>
          <div className='flex items-center gap-2 text-gray-500'>
            <p>Model: {result[0].products.model[selectedColor]}</p>
            <span> | </span>
            <p>Danh mục: {result[0].categories!.name}</p>
            <span> | </span>
            <p>Thương hiệu: {result[0].brands!.name}</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-2xl font-bold text-[#fb77c5]'>
              {Number(result[0].products.finalPrice).toLocaleString()} đ
            </p>
            <p className='text-2xl line-through text-gray-500'>
              {Number(result[0].products.price).toLocaleString()} đ
            </p>
            {/* <div className='px-1 py-0.5 bg-red-500 rounded-lg'>
              <p className='text-sm text-white'>
                -{Number(result[0].products.discount)}%
              </p>
            </div> */}
          </div>

          <ProductInteraction
            product={result[0].products}
            selectedColor={selectedColor}
          />
          <p className='text-gray-500'>Mô tả sản phẩm:</p>
          <h4>🔥{result[0].product_details!.shortDescription}🔥</h4>
          {result[0].product_details!.description.map((desc, index) => (
            <p className='leading-tight' key={index}>
              ✅ {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
