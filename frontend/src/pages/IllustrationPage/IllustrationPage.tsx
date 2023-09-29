import { useParams } from "react-router-dom";
import _ from "lodash";
import { useGetProductDetailsQuery, useGetProductsByCategoryQuery } from "../../slices/productsApiSlice";
import Spinner from "../../components/Spinner";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import YouTubeEmbed from "../../components/YouTubeEmbed";

import { Product } from "../../types/Product";

import ProductGrid from "../../components/ProductGrid";

import SectionMain from "../../components/SectionMain";
import SectionMainTitles from "../../components/SectionMainTitles";
import IllustrationsGrid from "../../components/IllustrationsGrid";
import Button from "../../components/Button";

const IllustrationPage = () => {
  const params = useParams();
  const slug = params.slug;

  if (!slug) {
    return <div>No slug provided</div>;
  }
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(slug);

  // console.log(product?.categories[0].slug)
  const {
    data: categoryProducts,
    isLoading: isLoadingCategory,
    error: errorCategory,
  } = useGetProductsByCategoryQuery(`${product?.categories[0].slug}`);

  // console.log(categoryProducts)


  if (!product) {
    return <Spinner />;
  }

  const materialValues: string[] = _.uniq(_.map(product?.variations, "options.material"));
  // console.log(materialValues);



  const sizeValues: string[] = _.uniq(_.map(product?.variations, "options.size"));
  // console.log(sizeValues);

  const getSizesForMaterialFromProduct = (
    product: Product,
    material: string,
  ) => {
    const sizes = _.uniq(
      product.variations
        .filter((variation) => variation.options.material === material)
        .map((variation) => variation.options.size),
    );
    return sizes;
  };

  const sizesByMaterial: { [key: string]: string[] } = {};

  materialValues.forEach((material: string) => {
    sizesByMaterial[`${material}`] = getSizesForMaterialFromProduct(
      product,
      material,
    );
  });

  // console.log(sizesByMaterial);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div className="flex w-11/12 flex-col gap-16">
      <div className="my-5 flex w-full justify-center gap-20">
        <div className=" w-5/12">
          <img className="md:sticky md:top-8 " src={product?.images[0]} alt={product?.slug} />
        </div>
        <div className="w-4/12 dark:text-ivory">
          <h1 className=" mb-1 font-fondamento text-3xl">{product?.name}</h1>

          {product.details.latinName ? (
            <span className=" mb-1 font-fondamento text-xl">
              {product.details.latinName}
            </span>
          ) : null}

          {product.details.occurrence ? (
            <p className=" font-montserrat text-sm">
              <strong>Occurrence: </strong>
              {product.details.occurrence}
            </p>
          ) : null}

          {product.details.ytLink ? (
            <div className="my-10">
              <YouTubeEmbed embedId={product.details.ytLink} />
            </div>
          ) : null}
          <p className="first-letter:bg-red-magic w-full whitespace-pre-line first-letter:px-5 first-letter:py-2 first-letter:font-fondamento first-letter:text-2xl first-letter:text-ivory first-line:leading-10">
            {product.details.story}
          </p>
        </div>
      </div>

<SectionMain >

<ProductGrid product={product} materialValues={materialValues} sizesByMaterial={sizesByMaterial} />

</SectionMain>


<SectionMain color="second">
        <SectionMainTitles
          heading={categoryProducts && categoryProducts[0]?.categories[0]?.name}
          main={
            "   Step into a world of art and enchantment with Ilustrografia"
          }
          strong=" Illustrations and Stories:"
        />

        <IllustrationsGrid products={categoryProducts} />

        <Button
          text={`About ${
            categoryProducts && categoryProducts[0]?.categories[0]?.name
          }`}
          color={"black"}
          link={`/projects/${
            categoryProducts && categoryProducts[0]?.categories[0]?.slug
          }`}
        />
      </SectionMain>


   </div>
  );
};
export default IllustrationPage;
