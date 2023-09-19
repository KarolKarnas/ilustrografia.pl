import { ProductNoId } from '../types/Product.ts';
export const products: ProductNoId[] = [
	{
		name: 'Basilisk',
		slug: 'basilisk',
		rating: {
			rating: 0,
			numReviews: 0,
		},
		categories: [
			{
				name: 'Neo-Slavic Census',
				slug: 'neo-slavic-census',
			},
			{
				name: 'Basilisks of Warsaw',
				slug: 'basilisks-of-warsaw',
			}
		],
		tags: [{ name: '', slug: '' }],
		images: ['/images/neo-slavic-census/basilisk-1.jpg'],
		statistics: [
			'+50 to the skill of creating calluses.',
			"+10 for knowledge of Warsaw's topography.",
			'+25% protection against turning into stone.',
			"It's safest to keep the property deed with a printout.",
		],
		options: {
			material: {
				optionName: 'Material',
				'art-print': {
					title: 'Art Print',
					images: ['/images/neo-slavic-census/basilisk-art-print-1.jpg'],
				},
				'painting-on-canvas': {
					title: 'Painting On Canvas',
					images: [
						'/images/neo-slavic-census/basilisk-painting-on-canvas-1.jpg',
					],
				},
				poster: {
					title: 'Poster',
					images: ['/images/neo-slavic-census/basilisk-poster-1.jpg'],
				},
				'premium-print': {
					title: 'Premium Print',
					images: ['/images/neo-slavic-census/basilisk-premium-print-1.jpg'],
				},
			},
			size: {
				optionName: 'Size',
				s20x30: {
					title: '20x30',
					images: [],
				},
				s20x40: {
					title: '20x40',
					images: [],
				},
				s30x40: {
					title: '30x40',
					images: [],
				},
				s40x60: {
					title: '40x60',
					images: [],
				},
				s50x70: {
					title: '50x70',
					images: [],
				},
				s60x90: {
					title: '60x90',
					images: [],
				},
				s70x100: {
					title: '70x100',
					images: [],
				},
			},
		},
		variations: [
			//ART-PRINT
			{
				productSlug: 'basilisk',
				options: { material: 'art-print', size: 's20x40' },
				SKU: 'basilisk-art-print-s20x40',
				price: 109,
				countInStock: 2,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'art-print', size: 's30x40' },
				SKU: 'basilisk-art-print-s30x40',
				price: 179,
				countInStock: 0,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'art-print', size: 's40x60' },
				SKU: 'basilisk-art-print-s40x60',
				price: 259,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'art-print', size: 's50x70' },
				SKU: 'basilisk-art-print-s50x70',
				price: 319,
				countInStock: 8,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'art-print', size: 's60x90' },
				SKU: 'basilisk-art-print-s60x90',
				price: 399,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'art-print', size: 's70x100' },
				SKU: 'basilisk-art-print-s70x100',
				price: 499,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			//CANVAS
			{
				productSlug: 'basilisk',
				options: { material: 'painting-on-canvas', size: 's20x40' },
				SKU: 'basilisk-painting-on-canvas-s20x40',
				price: 209,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'painting-on-canvas', size: 's30x40' },
				SKU: 'basilisk-painting-on-canvas-s30x40',
				price: 249,
				countInStock: 8,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'painting-on-canvas', size: 's40x60' },
				SKU: 'basilisk-painting-on-canvas-s40x60',
				price: 299,
				countInStock: 15,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'painting-on-canvas', size: 's50x70' },
				SKU: 'basilisk-painting-on-canvas-s50x70',
				price: 349,
				countInStock: 12,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'painting-on-canvas', size: 's60x90' },
				SKU: 'basilisk-painting-on-canvas-s60x90',
				price: 449,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'painting-on-canvas', size: 's70x100' },
				SKU: 'basilisk-painting-on-canvas-s70x100',
				price: 569,
				countInStock: 3,
				tags: [{ name: '', slug: '' }],
			},
			// POSTER
			{
				productSlug: 'basilisk',
				options: { material: 'poster', size: 's20x30' },
				SKU: 'basilisk-poster-s20x30',
				price: 49,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'poster', size: 's30x40' },
				SKU: 'basilisk-poster-s30x40',
				price: 59,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'poster', size: 's40x60' },
				SKU: 'basilisk-poster-s40x60',
				price: 99,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'poster', size: 's50x70' },
				SKU: 'basilisk-poster-s50x70',
				price: 129,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'poster', size: 's60x90' },
				SKU: 'basilisk-poster-s60x90',
				price: 129,
				countInStock: 16,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'poster', size: 's70x100' },
				SKU: 'basilisk-poster-s70x100',
				price: 209,
				countInStock: 11,
				tags: [{ name: '', slug: '' }],
			},
			// PREMIUM PRINT
			{
				productSlug: 'basilisk',
				options: { material: 'premium-print', size: 's20x30' },
				SKU: 'basilisk-premium-print-s20x30',
				price: 59,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'premium-print', size: 's30x40' },
				SKU: 'basilisk-premium-print-s30x40',
				price: 99,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'premium-print', size: 's40x60' },
				SKU: 'basilisk-premium-print-s40x60',
				price: 149,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'premium-print', size: 's50x70' },
				SKU: 'basilisk-premium-print-s50x70',
				price: 209,
				countInStock: 16,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'premium-print', size: 's60x90' },
				SKU: 'basilisk-premium-print-s60x90',
				price: 269,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'basilisk',
				options: { material: 'premium-print', size: 's70x100' },
				SKU: 'basilisk-premium-print-s70x100',
				price: 299,
				countInStock: 1,
				tags: [{ name: '', slug: '' }],
			},
		],
	},
	//BOBO
	{
		name: 'Forest Bobo',
		slug: 'forest-bobo',
		rating: {
			rating: 0,
			numReviews: 0,
		},
		categories: [
			{
				name: 'Neo-Slavic Census',
				slug: 'neo-slavic-census',
			},
		],
		tags: [{ name: '', slug: '' }],
		images: ['/images/neo-slavic-census/forest-bobo-1.jpg'],
		statistics: [
			'+10 life energy on Mondays.',
			'+50 for dealings with the Forest Guardian.',
			'+15% for fern growth in the living room.',
			"Hanging in the bedroom improves the mattress's bed elasticity.",
		],
		options: {
			material: {
				optionName: 'Material',
				'art-print': {
					title: 'Art Print',
					images: [
						'/images/neo-slavic-census/forest-bobo-art-print-1.jpg',
					],
				},
				'painting-on-canvas': {
					title: 'Painting On Canvas',
					images: [
						'/images/neo-slavic-census/forest-bobo-painting-on-canvas-1.jpg',
					],
				},
				poster: {
					title: 'Poster',
					images: ['/images/neo-slavic-census/forest-bobo-poster-1.jpg'],
				},
				'premium-print': {
					title: 'Premium Print',
					images: [
						'/images/neo-slavic-census/forest-bobo-premium-print-1.jpg',
					],
				},
			},
			size: {
				optionName: 'Size',
				s20x30: {
					title: '20x30',
					images: [],
				},
				s20x40: {
					title: '20x40',
					images: [],
				},
				s30x40: {
					title: '30x40',
					images: [],
				},
				s40x60: {
					title: '40x60',
					images: [],
				},
				s50x70: {
					title: '50x70',
					images: [],
				},
				s60x90: {
					title: '60x90',
					images: [],
				},
				s70x100: {
					title: '70x100',
					images: [],
				},
			},
		},
		variations: [
			//ART-PRINT
			{
				productSlug: 'forest-bobo',
				options: { material: 'art-print', size: 's20x40' },
				SKU: 'forest-bobo-art-print-s20x40',
				price: 109,
				countInStock: 2,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'art-print', size: 's30x40' },
				SKU: 'forest-bobo-art-print-s30x40',
				price: 179,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'art-print', size: 's40x60' },
				SKU: 'forest-bobo-art-print-s40x60',
				price: 259,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'art-print', size: 's50x70' },
				SKU: 'forest-bobo-art-print-s50x70',
				price: 319,
				countInStock: 8,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'art-print', size: 's60x90' },
				SKU: 'forest-bobo-art-print-s60x90',
				price: 399,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'art-print', size: 's70x100' },
				SKU: 'forest-bobo-art-print-s70x100',
				price: 499,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			//CANVAS
			{
				productSlug: 'forest-bobo',
				options: { material: 'painting-on-canvas', size: 's20x40' },
				SKU: 'forest-bobo-painting-on-canvas-s20x40',
				price: 209,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'painting-on-canvas', size: 's30x40' },
				SKU: 'forest-bobo-painting-on-canvas-s300x40',
				price: 249,
				countInStock: 8,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'painting-on-canvas', size: 's40x60' },
				SKU: 'forest-bobo-painting-on-canvas-s40x60',
				price: 299,
				countInStock: 15,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'painting-on-canvas', size: 's50x70' },
				SKU: 'forest-bobo-painting-on-canvas-s50x70',
				price: 349,
				countInStock: 12,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'painting-on-canvas', size: 's60x90' },
				SKU: 'forest-bobo-painting-on-canvas-s60x90',
				price: 449,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'painting-on-canvas', size: 's70x100' },
				SKU: 'forest-bobo-painting-on-canvas-s70x100',
				price: 569,
				countInStock: 3,
				tags: [{ name: '', slug: '' }],
			},
			// POSTER
			{
				productSlug: 'forest-bobo',
				options: { material: 'poster', size: 's20x30' },
				SKU: 'forest-bobo-poster-s20x30',
				price: 49,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'poster', size: 's30x40' },
				SKU: 'forest-bobo-poster-s30x40',
				price: 59,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'poster', size: 's40x60' },
				SKU: 'forest-bobo-poster-s40x60',
				price: 99,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'poster', size: 's50x70' },
				SKU: 'forest-bobo-poster-s50x70',
				price: 129,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'poster', size: 's60x90' },
				SKU: 'forest-bobo-poster-s60x90',
				price: 129,
				countInStock: 16,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'poster', size: 's70x100' },
				SKU: 'forest-bobo-poster-s70x100',
				price: 209,
				countInStock: 11,
				tags: [{ name: '', slug: '' }],
			},
			// PREMIUM PRINT
			{
				productSlug: 'forest-bobo',
				options: { material: 'premium-print', size: 's20x30' },
				SKU: 'forest-bobo-premium-print-s20x30',
				price: 59,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'premium-print', size: 's30x40' },
				SKU: 'forest-bobo-premium-print-s30x40',
				price: 99,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'premium-print', size: 's40x60' },
				SKU: 'forest-bobo-premium-print-s40x60',
				price: 149,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'premium-print', size: 's50x70' },
				SKU: 'forest-bobo-premium-print-s50x70',
				price: 209,
				countInStock: 16,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'premium-print', size: 's60x90' },
				SKU: 'forest-bobo-premium-print-s60x90',
				price: 269,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'forest-bobo',
				options: { material: 'premium-print', size: 's70x100' },
				SKU: 'forest-bobo-premium-print-s70x100',
				price: 299,
				countInStock: 1,
				tags: [{ name: '', slug: '' }],
			},
		],
	},
	// NIMFA WIOSENNA
	{
		name: 'Spring Nymph',
		slug: 'spring-nymph',
		rating: {
			rating: 0,
			numReviews: 0,
		},
		categories: [
			{
				name: 'Fantasy Illustrations',
				slug: 'fantasy-illustrations',
			},
		],
		tags: [{ name: '', slug: '' }],
		images: ['/images/fantasy-illustrations/spring-nymph-1.jpg'],
		statistics: [
			'+50 to the ability to disrupt human picnic plans.',
			'+25 to convincing flowers to bloom at the most inappropriate times.',
			'+10% to the chance of avoiding pollen allergies when battling in grassy areas.',
			"Ability 'Nature's Chuckle': Spring Nymph can produce sounds of leafy laughter, causing enemies to lose concentration and accuracy.",
		],
		options: {
			material: {
				optionName: 'Material',
				'art-print': {
					title: 'Art Print',
					images: [
						'/images/fantasy-illustrations/spring-nymph-art-print-1.jpg',
					],
				},
				'painting-on-canvas': {
					title: 'Painting On Canvas',
					images: [
						'/images/fantasy-illustrations/spring-nymph-painting-on-canvas-1.jpg',
					],
				},
				poster: {
					title: 'Poster',
					images: ['/images/fantasy-illustrations/spring-nymph-poster-1.jpg'],
				},
				'premium-print': {
					title: 'Premium Print',
					images: [
						'/images/fantasy-illustrations/spring-nymph-premium-print-1.jpg',
					],
				},
			},
			size: {
				optionName: 'Size',
				s20x30: {
					title: '20x30',
					images: [],
				},
				s20x40: {
					title: '20x40',
					images: [],
				},
				s30x40: {
					title: '30x40',
					images: [],
				},
				s40x60: {
					title: '40x60',
					images: [],
				},
				s50x70: {
					title: '50x70',
					images: [],
				},
				s60x90: {
					title: '60x90',
					images: [],
				},
				s70x100: {
					title: '70x100',
					images: [],
				},
			},
		},
		variations: [
			//ART-PRINT
			{
				productSlug: 'spring-nymph',
				options: { material: 'art-print', size: 's20x40' },
				SKU: 'spring-nymph-art-print-s20x40',
				price: 109,
				countInStock: 2,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'art-print', size: 's30x40' },
				SKU: 'spring-nymph-art-print-s20x40',
				price: 179,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'art-print', size: 's40x60' },
				SKU: 'spring-nymph-art-print-s40x60',
				price: 259,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'art-print', size: 's50x70' },
				SKU: 'spring-nymph-art-print-s50x70',
				price: 319,
				countInStock: 8,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'art-print', size: 's60x90' },
				SKU: 'spring-nymph-art-print-s60x90',
				price: 399,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'art-print', size: 's70x100' },
				SKU: 'spring-nymph-art-print-s70x100',
				price: 499,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			//CANVAS
			{
				productSlug: 'spring-nymph',
				options: { material: 'painting-on-canvas', size: 's20x40' },
				SKU: 'spring-nymph-na-painting-on-canvas-s20x40',
				price: 209,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'painting-on-canvas', size: 's30x40' },
				SKU: 'spring-nymph-na-painting-on-canvas-s30x40',
				price: 249,
				countInStock: 8,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'painting-on-canvas', size: 's40x60' },
				SKU: 'spring-nymph-na-painting-on-canvas-s40x60',
				price: 299,
				countInStock: 15,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'painting-on-canvas', size: 's50x70' },
				SKU: 'spring-nymph-na-painting-on-canvas-s50x70',
				price: 349,
				countInStock: 12,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'painting-on-canvas', size: 's60x90' },
				SKU: 'spring-nymph-na-painting-on-canvas-s60x90',
				price: 449,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'painting-on-canvas', size: 's70x100' },
				SKU: 'spring-nymph-na-painting-on-canvas-s70x100',
				price: 569,
				countInStock: 3,
				tags: [{ name: '', slug: '' }],
			},
			// POSTER
			{
				productSlug: 'spring-nymph',
				options: { material: 'poster', size: 's20x30' },
				SKU: 'spring-nymph-poster-s20x30',
				price: 49,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'poster', size: 's30x40' },
				SKU: 'spring-nymph-poster-s30x40',
				price: 59,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'poster', size: 's40x60' },
				SKU: 'spring-nymph-poster-s40x60',
				price: 99,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'poster', size: 's50x70' },
				SKU: 'spring-nymph-poster-s50x70',
				price: 129,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'poster', size: 's60x90' },
				SKU: 'spring-nymph-poster-s60x90',
				price: 129,
				countInStock: 16,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'poster', size: 's70x100' },
				SKU: 'spring-nymph-poster-s70x100',
				price: 209,
				countInStock: 11,
				tags: [{ name: '', slug: '' }],
			},
			// PREMIUM PRINT
			{
				productSlug: 'spring-nymph',
				options: { material: 'premium-print', size: 's20x30' },
				SKU: 'spring-nymph-premium-print-s20x30',
				price: 59,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'premium-print', size: 's30x40' },
				SKU: 'spring-nymph-premium-print-s30x40',
				price: 99,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'premium-print', size: 's40x60' },
				SKU: 'spring-nymph-premium-print-s40x60',
				price: 149,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'premium-print', size: 's50x70' },
				SKU: 'spring-nymph-premium-print-s50x70',
				price: 209,
				countInStock: 16,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'premium-print', size: 's60x90' },
				SKU: 'spring-nymph-premium-print-s60x90',
				price: 269,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				productSlug: 'spring-nymph',
				options: { material: 'premium-print', size: 's70x100' },
				SKU: 'spring-nymph-premium-print-s70x100',
				price: 299,
				countInStock: 1,
				tags: [{ name: '', slug: '' }],
			},
		],
	},
];
