import * as Form from '@radix-ui/react-form';
import { ProductOptions } from '../../types/Product';
import { ChangeEvent } from 'react';
import { useUploadProductImageMutation } from '../../slices/productsApiSlice';
import { toast } from 'react-toastify';
import { CustomError } from '../../types/User';


type Props = {
  options: ProductOptions;
  setOptions: React.Dispatch<React.SetStateAction<ProductOptions>>

}

const UploadPosterField = ({options, setOptions}: Props) => {

	const [uploadProductImage, { isLoading: loadingUpload }] =
  useUploadProductImageMutation();

	const uploadPosterFileHandler = async (
		e: ChangeEvent<HTMLInputElement>
	) => {
		if (e.target.files === null) {
			console.log('no file selected');
		} else {
			const formData = new FormData();
			formData.append('image', e.target.files[0]);
			try {
				const res = await uploadProductImage(formData).unwrap();
				// console.log(res);
				toast.success(res.message);

				const updatedOptions = {
					...options,
					material: {
						...options.material,
						'poster': {
							...options.material['poster'],
							images: [res.image],
						},
					},
				};
				setOptions(updatedOptions);
			} catch (err) {
				if (err instanceof Error) {
					toast.error(err.message);
				} else {
					const customError = err as CustomError;
					toast.error(customError.data.message);
				}
			}
		}
	};

  return (
    <>
						<Form.Field className='flex flex-col' name='posterImageUrl'>
							<div className='flex items-baseline justify-between'>
								<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
									Poster Image URL
								</Form.Label>
								<Form.Message
									className='text-md text-red-400'
									match='valueMissing'
								>
									Poster Please enter Image URL
								</Form.Message>
								<Form.Message
									className='text-md text-red-400'
									match='typeMismatch'
								>
									Please provide a Poster Image URL
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
									type='text'
									required
									placeholder='Enter Poster Image URL'
									value={options && options.material['poster'].images[0]}
									onChange={(e) => {
										const updatedOptions = {
											...options,
											material: {
												...options.material,
												'poster': {
													...options.material['poster'],
													images: [e.target.value],
												},
											},
										};
										// Set the updated options object in the state
										setOptions(updatedOptions);
									}}
								/>
							</Form.Control>
						</Form.Field>

						<Form.Field className='flex flex-col' name='uploadPosterImage'>
							<div className='flex items-baseline justify-between'>
								<Form.Label className=' text-lg font-semibold leading-8 text-zinc-600'>
									Add Product Poster Image
								</Form.Label>
								<Form.Message
									className='text-md text-red-400'
									match='valueMissing'
								>
									Please enter Product Poster Image
								</Form.Message>
								<Form.Message
									className='text-md text-red-400'
									match='typeMismatch'
								>
									Please provide a Product Poster Image
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className='w-full inline-flex items-center justify-center rounded-none text-zinc-600 bg-slate-200 border-solid border border-zinc-500 p-2 focus:rounded-none focus:outline-dashed focus:outline-red-300 '
									type='file'
									// required
									// placeholder='Enter Number of Reviews'
									// value={rating?.numReviews}
									onChange={uploadPosterFileHandler}
								/>
							</Form.Control>
						</Form.Field>
            </>
  )
}
export default UploadPosterField