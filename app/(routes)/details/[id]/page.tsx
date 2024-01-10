import DynamicPage from '../../../../components/DynamicPage';

const Page = async ({ params }: { params: { id: string } }) => {
    const productId = parseInt(params.id, 10);
    
    return <DynamicPage product={productId} />
};

export default Page;
