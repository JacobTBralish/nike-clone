import axios from "axios";

export const AllMensClothes = async () => {
    var response = await axios.get('https://raw.githubusercontent.com/JacobTBralish/NikeData/master/AllMensClothesPg1-15.json');
    return response.data;
}

export const AllMensShoes = async () => {
    var response = await axios.get('https://raw.githubusercontent.com/JacobTBralish/NikeData/master/AllMensShoesPg1-6.json');
    return response.data;
}

export const AllWomensShoes = async () => {
    var response = await axios.get('https://raw.githubusercontent.com/JacobTBralish/NikeData/master/AllWomensShoesPg1-6.json');
    return response.data;
}
export const AllNikeStores = async () => {
    var response = await axios.get('https://raw.githubusercontent.com/JacobTBralish/NikeData/master/nikeStoreLocations.json');
    return response.data;
}