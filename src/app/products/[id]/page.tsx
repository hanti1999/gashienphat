import ProductInteraction from '@/components/ProductInteraction';
import Image from 'next/image';
import { db } from '../../../../database/drizzle';
import { productDetails, products } from '../../../../database/schema';
import { eq } from 'drizzle-orm';
import CarouselSwiper from '@/components/CarouselSwiper';

// export const generateMetadata = async ({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) => {
//   // get product from db
//   return {
//     title: product.name,
//     desciption: product.name,
//   };
// };

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
    .where(eq(products.id, (await params).id));

  const detail = await db
    .select()
    .from(productDetails)
    .where(eq(productDetails.productId, (await params).id));

  // console.log(JSON.stringify(detail, null, 2));

  const selectedColor = color || (result[0].colors[0] as string);

  return (
    <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-12'>
      <div className='w-full lg:w-5/12'>
        <CarouselSwiper
          carousel={detail[0].carousel}
          coverImage={result[0].coverImage[selectedColor]}
        />
        <div className='aspect-[3/4] mt-5'>
          <video
            src={detail[0].video}
            controls
            autoPlay={false}
            className='rounded-lg'
          />
        </div>
      </div>

      <div className='w-full lg:w-7/12 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>{result[0].name}</h1>
        <p className='font-medium'>{result[0].model[selectedColor]}</p>
        <div className='flex items-center gap-2 text-gray-500'>
          <p>Danh mục: {'Bếp gas'}</p>
          <p> | </p>
          <p>Thương hiệu: {'Rinnai'}</p>
        </div>
        <p className='line-through'>
          {Number(result[0].price).toLocaleString()} đ
        </p>
        <p className='text-2xl leading-0 font-bold text-[#fb77c5]'>
          {Number(result[0].finalPrice).toLocaleString()} đ
        </p>
        <ProductInteraction product={result[0]} selectedColor={selectedColor} />
        <p className='text-gray-500'>Mô tả sản phẩm:</p>
        <h4>{detail[0].shortDescription}</h4>
        {detail[0].description.map((desc, index) => (
          <p className='pl-10 leading-tight' key={index}>
            - {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
