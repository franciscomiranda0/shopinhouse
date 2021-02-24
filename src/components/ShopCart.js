import React from 'react'
import HomeView from "../views/HomeView";
import ProductAmount from "../components/ProductAmount";
import './ShopCart.css';

const ShopCart = () => {

    const cart = [{
        sku: 43900,
        name: 'Duracell - AAA Batteries (4-Pack)',
        type: 'HardGood',
        price: 5.49,
        upc: '041333424019',
        category: [
            { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
            { id: 'pcmcat248700050021', name: 'Housewares' },
            { id: 'pcmcat303600050001', name: 'Household Batteries' },
            { id: 'abcat0208002', name: 'Alkaline Batteries' },
        ],
        shipping: 5.49,
        description:
            'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
        manufacturer: 'Duracell',
        model: 'MN2400B4Z',
        url:
            'http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC',
        image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
    },
    {
        sku: 48530,
        name: 'Duracell - AA 1.5V CopperTop Batteries (4-Pack)',
        type: 'HardGood',
        price: 5.49,
        upc: '041333415017',
        category: [
            { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
            { id: 'pcmcat248700050021', name: 'Housewares' },
            { id: 'pcmcat303600050001', name: 'Household Batteries' },
            { id: 'abcat0208002', name: 'Alkaline Batteries' },
        ],
        shipping: 5.49,
        description:
            'Long-lasting energy; DURALOCK Power Preserve technology; for toys, clocks, radios, games, remotes, PDAs and more',
        manufacturer: 'Duracell',
        model: 'MN1500B4Z',
        url:
            'http://www.bestbuy.com/site/duracell-aa-1-5v-coppertop-batteries-4-pack/48530.p?id=1099385268988&skuId=48530&cmp=RMXCC',
        image: 'http://img.bbystatic.com/BestBuy_US/images/products/4853/48530_sa.jpg',
    },
    {
        sku: 127687,
        name: 'Duracell - AA Batteries (8-Pack)',
        type: 'HardGood',
        price: 7.49,
        upc: '041333825014',
        category: [
            { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
            { id: 'pcmcat248700050021', name: 'Housewares' },
            { id: 'pcmcat303600050001', name: 'Household Batteries' },
            { id: 'abcat0208002', name: 'Alkaline Batteries' },
        ],
        shipping: 5.49,
        description:
            'Compatible with select electronic devices; AA size; DURALOCK Power Preserve technology; 8-pack',
        manufacturer: 'Duracell',
        model: 'MN1500B8Z',
        url:
            'http://www.bestbuy.com/site/duracell-aa-batteries-8-pack/127687.p?id=1051384045676&skuId=127687&cmp=RMXCC',
        image: 'http://img.bbystatic.com/BestBuy_US/images/products/1276/127687_sa.jpg',
    },
    {
        sku: 150115,
        name: 'Energizer - MAX Batteries AA (4-Pack)',
        type: 'HardGood',
        price: 4.99,
        upc: '039800011329',
        category: [
            { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
            { id: 'pcmcat248700050021', name: 'Housewares' },
            { id: 'pcmcat303600050001', name: 'Household Batteries' },
            { id: 'abcat0208002', name: 'Alkaline Batteries' },
        ],
        shipping: 5.49,
        description: '4-pack AA alkaline batteries; battery tester included',
        manufacturer: 'Energizer',
        model: 'E91BP-4',
        url:
            'http://www.bestbuy.com/site/energizer-max-batteries-aa-4-pack/150115.p?id=1051384046217&skuId=150115&cmp=RMXCC',
        image: 'http://img.bbystatic.com/BestBuy_US/images/products/1501/150115_sa.jpg',
    }];

    return (
        <HomeView title="Carrinho de compras">
            <div className='shop__cart'>
                <div className="cart__container">
                    <div className="cart__list__header">
                        <div>&nbsp;</div>
                        <div className="cart__list__header__title">
                            <div>Preço UN.</div>
                            <div>Quantidade</div>
                            <div>Subtotal</div>
                        </div>
                    </div>

                    <div className="cart__list__body__panel">
                        {cart.map((product, i) => (
                            <React.Fragment key={i}>
                                <div className="cart__list__body">
                                    <div className="cart__list__body__product__title">
                                        {product.name}
                                    </div>
                                    <div className="cart__list__body__product">
                                        <div>
                                            {product.price.toLocaleString("pt-BR",
                                                { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
                                            )}
                                        </div>
                                        <div>
                                            <ProductAmount product={product}/>
                                        </div>
                                        <div className="cart__list__body__product__subtotal">249,00xx</div>
                                    </div>
                                </div>
                                {cart.length - 1 > i &&
                                    <div className="cart__list__body__divider"></div>
                                }
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="cart__list__footer">
                        <div>&nbsp;</div>
                        <div className="cart__list__footer__info">
                            <p className="cart__list__footer__info__subtotal"><span>R$ </span>284,80</p>
                            <button className="cart__list__footer__info__button">Finalizar Compra</button>
                        </div>
                    </div>

                </div>
            </div>
        </HomeView>
    );
}

export default ShopCart;