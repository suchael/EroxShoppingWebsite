import React, { useEffect } from 'react'
import Footer from './includes/Footer';
import Header from './includes/Header';
import Banner from '../components/Banner';
import Spinner from '../components/Spinner';
import NotFound from "../components/404";
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from "../store/apiquery/productApiSlice"
import { data_productList } from './VirtualData';

const ViewProduct = () => {
  const params = useParams();
  const paramsID = Number(params.id); // Convert to number

  const { 
    // isLoading, 
    // data : details , 
    // isSuccess, 
    // isError 
  } = useGetProductQuery(params.id || '');

    const isLoading = false;
    const isSuccess = true;
    const isError = false


    const details = data_productList.data.find(product => product.id === paramsID) || null;

  // console.log("M data: ", details)

  return (
    <>
    <Header />
    <Banner page="Shop Details" path={["Home", "Shop Details"]}/>
    {
      !isLoading && isSuccess ? (
        details ? <ProductDetails product={details} /> : <NotFound />
      ) : (
        isError ? <NotFound /> : <Spinner />
      )
    }
    <Footer />
  </>
  )
}

export default ViewProduct;