"use client";
import { Heading } from "@/components/heading";
import Navbar from "@/components/navbar";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { ProductColumn, columns } from "./columns";

interface ProductsClientProps {
	data: ProductColumn[];
}

const CollectionClient: React.FC<ProductsClientProps> = ({ data }) => {
	const router = useRouter();
	//   console.log(data);
	return (
		<div className="p-4 ">
			
			<div className="flex items-center justify-between pb-7">
				<Heading
					title="Collection"
					description="Manage NFT Collection for your website"
				/>
				<Button onClick={() => router.push(`/collections/new`)}>
					<Plus className="mr-2 h-4 w-4" /> Add New
				</Button>
			</div>
			<Separator />
			<DataTable searchKey="name" columns={columns} data={data} />
<div className="py-6">
				<Navbar />
			</div>
			<Separator />
		</div>
	);
};

export default CollectionClient;
