import { useEffect, Fragment } from 'react';
import Card from '../components/Card';
import BaseView from '../views/BaseView';
import '../styles/ListProducts.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadAll } from '../redux/product/productAction';
import { getListingData } from '../redux/product/productSelector';

const ListProducts = () => {
    const products = useSelector(getListingData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncLoadAll());
    }, [dispatch]);

    return (
        <Fragment>
            <BaseView title="Bem vindo!">
                <div className="listProducts">
                    {products?.map((item) => {
                        return <Card key={item.id} product={item} />;
                    })}
                </div>
            </BaseView>
        </Fragment>
    );
};

export default ListProducts;
