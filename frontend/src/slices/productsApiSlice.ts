import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({
				url: PRODUCTS_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getProductDetails: builder.query({
			query: (slug) => ({
				url: `${PRODUCTS_URL}/${slug}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createProduct: builder.mutation({
			query: () => ({
				url: `${PRODUCTS_URL}`,
				method: 'POST',
			}),
			invalidatesTags: ['Product'],
		}),
	}),
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation } =
	productsApiSlice;
