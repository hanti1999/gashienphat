import ProductInteraction from '@/components/ProductInteraction';
import { ProductType } from '@/types';
import Image from 'next/image';

const product: ProductType = {
  id: 1,
  name: 'Bếp gas đôi Rinnai RV-370',
  model: {
    black: 'RV-370(GM)N',
    white: 'RV-370(SM)N',
  },
  price: 1790000,
  discount: 20,
  finalPrice: 1432000,
  brandId: '1',
  categoryId: '1',
  coverImage: {
    white: '/products/rinnai-rv-370(sm)n.jpg',
    black: '/products/rinnai-rv-370(gm)n.jpg',
  },
  colors: ['white', 'black'],
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  // get product from db
  return {
    title: product.name,
    desciption: product.name,
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

  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-12'>
      <div className='w-full lg:w-5/12 relative aspect-square'>
        <Image
          src={product.coverImage[selectedColor]}
          alt={product.name}
          fill
          className='object-contain rounded-md'
        />
      </div>

      <div className='w-full lg:w-7/12 flex flex-col gap-4'>
        <h1 className='text-2xl font-medium'>{product.name}</h1>
        <p className='font-medium'>{product.model[selectedColor]}</p>
        <div className='flex items-center gap-2 text-gray-500'>
          <p>Danh mục: {'Bếp gas'}</p>
          <p> | </p>
          <p>Thương hiệu: {'Rinnai'}</p>
        </div>
        <p className='line-through'>{product.price.toLocaleString()} đ</p>
        <p className='text-2xl leading-0 font-bold text-[#fb77c5]'>
          {product.finalPrice.toLocaleString()} đ
        </p>
        <ProductInteraction product={product} selectedColor={selectedColor} />
        <p className='text-gray-500'>Mô tả sản phẩm:</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          soluta, sint sed obcaecati unde quibusdam ex nobis. Fugit assumenda
          quaerat saepe sint quibusdam cupiditate impedit unde blanditiis
          voluptatum nulla. Quas.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
