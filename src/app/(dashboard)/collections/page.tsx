import React from 'react'
import format from 'date-fns/format';


import connect from '@/database/connect'
import CollectionClient from '@/app/(dashboard)/collections/components/client';
import Collection from '@/schema/collectionSchema';
import { ProductColumn } from "@/app/(dashboard)/collections/components/columns";


const CollectionPage = async () => {
  

  await connect();
  const collections = await Collection.find();
  
  // console.log(JSON.parse(JSON.stringify(collections)))
  const formattedData: ProductColumn[] = collections.map((item) => ({
    slug:item.slug,
    name: item.name,
    rating:item.rating,
    featured: item.featured,
    blockchain:item.blockchain,
   mintDate: item.mintDate ? format(item.mintDate, 'MMMM do, yyyy') : "not added",
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<CollectionClient data={formattedData} />
			</div>
		</div>
	);
}

export default CollectionPage

