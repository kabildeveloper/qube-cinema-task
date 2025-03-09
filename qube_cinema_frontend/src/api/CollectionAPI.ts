import axiosInstance from "../axios.ts";
import {CollectionDetailType, CollectionType} from "../types/collectionType.ts";

export const getCollections = async () => {
    const response = await axiosInstance.get<CollectionType[]>('/collections');
    return response.data;
}

export const getCollectionById = async (id:number|string) => {
    const response = await axiosInstance.get<CollectionDetailType>(`/collections/${id}`);
    return response.data;
}