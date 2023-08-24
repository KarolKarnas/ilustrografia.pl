import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetOrderDetailsQuery } from '../../slices/ordersApiSlice';
import { getError } from '../../utils/utils';
import { ApiError } from '../../types/ApiError';
import { toCheckOrder } from '../../utils/typeCheck';
import Message from '../../components/Message';

const OrderDetailsPage = () => {
	const { id: orderId } = useParams();
	console.log(orderId);

	const { data, error, isLoading } = useGetOrderDetailsQuery(orderId);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		<div>{getError(error as ApiError)}</div>;
	}

	const order = toCheckOrder(data);

	return (
		<div className='flex flex-col items-center w-full mt-4'>
			<div className='flex w-8/12 gap-20'>
				{/* col 1 */}
				<div className=' w-3/4'>
					<section className='mb-7'>
						<h1 className='text-4xl font-bold text-center my-5 text-zinc-300'>
							Order {order._id}
						</h1>
						<h2 className='text-4xl text-zinc-400'>Shipping</h2>
						<p className='py-2'>
							<strong>Name: </strong> {order.user.name}
						</p>
						<p className='py-2'>
							<strong>Email: </strong>{' '}
							<a
								className='text-red-400 hover:text-zinc-500'
								href={`mailto:${order.user.email}`}
							>
								{order.user.email}
							</a>
						</p>
						<p className='py-2'>
							<strong>Address: </strong> {order.shippingAddress?.address},{' '}
							{order.shippingAddress?.city} {order.shippingAddress?.postalCode},{' '}
							{order.shippingAddress?.country}
						</p>
						<Message
							variant={order.isPaid ? 'good' : 'bad'}
							message={
								order.isPaid
									? 'Your order has been delivered'
									: 'Have not been delivered yet'
							}
						/>
						<hr className=' h-px mx-auto my-3'></hr>
					</section>

					<section className='mb-7'>
						<h2 className='text-4xl text-zinc-400'>Payment Method</h2>
						<p className='py-2'>
							<strong>Method: </strong> {order.paymentMethod}
						</p>
						<Message
							variant={order.isPaid ? 'good' : 'bad'}
							message={
								order.isPaid
									? 'Your order has been paid'
									: 'Have not been paid yet'
							}
						/>
						<hr className=' h-px mx-auto my-3'></hr>
					</section>

					<section>
						<h2 className='text-4xl text-zinc-400'>Ordered Items</h2>
						<div className='mt-4'>
							{order.orderItems.map((variation, index) => (
								<div key={index}>
									<div className='flex items-center justify-between mb-4'>
										<img
											className='basis-1/12 w-10'
											src={variation.image}
											alt={variation.variationName}
										/>
										<Link
											className='basis-6/12 text-center underline hover:text-red-300'
											to={variation.pathnameWithQuery}
										>
											{' '}
											<div>{variation.variationName}</div>{' '}
										</Link>

										<div className='basis-2/12'>
											{variation.qty} x {variation.price}zł ={' '}
											{variation.price * variation.qty}zł
										</div>
									</div>
									<hr className=' h-px mx-auto my-3 w-10/12'></hr>
								</div>
							))}
						</div>
					</section>
				</div>
				{/* col 2  */}
				<div className='flex flex-col items-center justify-around w-1/4  bg-white shadow-2xl p-2'>
					<div>
						<h3 className='text-3xl font-bold text-center mt-5'>
							Order Summary
						</h3>
						<div className='flex justify-between border-b w-full py-2'>
							<div>Items</div>
							<div>{order.itemsPrice}zł</div>
						</div>
						<div className='flex justify-between border-b w-full py-2'>
							<div>Shipping</div>
							<div>{order.shippingPrice}zł</div>
						</div>
						<div className='flex justify-between border-b w-full py-2'>
							<div>Tax</div>
							<div>{order.taxPrice}zł</div>
						</div>
						<div className='flex justify-between border-b w-full py-2'>
							<div className='text-lg'>
								<strong>Total</strong>
							</div>
							<div className='text-lg'>
								<strong>{order.totalPrice}zł</strong>
							</div>
						</div>
						<div className='flex justify-between w-full py-2'>
							{error && <div>{getError(error as ApiError)}</div>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default OrderDetailsPage;