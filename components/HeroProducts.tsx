import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query';
import { getDataFromApi } from '@/services/axios.service';
import { Product } from '@/interface/productInterface';
import { useRouter } from 'next/router';

const HeroProducts = ( {product}: any) => {
	const router = useRouter()

	const btnClickHandler = (id: number) => {
		router.push('/products/'+id);
	}
	//console.log(product?.status === 200);
	{
		if(product?.status === 200){
			return (
				<div className='w-full bg-black '>
					<div className="container mx-auto flex flex-col md:flex-row items-center text-white">
						
						<div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
							
							<h1 className="font-bold text-3xl my-4">{ product?.data[0].title}</h1>
							<p className="leading-normal mb-4">{ product?.data[0].description}</p>
							<p className="uppercase tracking-loose mb-4">${ product?.data[0].price}</p>
							<button onClick={(e) => {e.preventDefault();btnClickHandler(product?.data[0].id)}} className="bg-gray-500 hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">Details</button>
						</div>
						
						<div className="w-full lg:w-1/2 lg:py-6 text-center">
							<img className='w-fluid' src={ product?.data[0].image} />						
						</div>
					</div>
				</div>
			)
		}
		
	}		
	
}

export default HeroProducts