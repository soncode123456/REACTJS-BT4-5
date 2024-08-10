import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Detail = () => {
    const [prodDetail, setProDetail] = useState({});
    const [transformValue, setTransformValue] = useState('rotate(0deg)');
    const param = useParams();
    console.log(param);

    const getProductById = async () => {
        const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.prodId}`);

        const jsonRes = await res.json();
        console.log(jsonRes.content);

        setProDetail(jsonRes.content);
    };

    useEffect(() => {
        getProductById();
    }, [param.prodId]);

    return (
        <div className='container'>
            <h3>Detail - ProdId: {param.prodId}</h3>
            <div className="d-flex">
                <div className='w-25'>
                    <img style={{ transform: transformValue }} src={prodDetail.image} alt="..." className='w-100' />

                    <div className="row">
                        {prodDetail.detaildetailedImages?.map((deg, index) => {
                            return <div className="col-3">
                                <img onClick={() => {
                                    setTransformValue(deg);
                                }} key={index} src={prodDetail.image} style={{ transform: deg, cursor: 'pointer', border: `1px solid ${deg === transformValue ? 'orange' : '#EEE'}` }} className='w-100 p-2' />
                            </div>
                        })}
                    </div>
                </div>
                <div className="w-75">
                    <h3>{prodDetail.name}</h3>
                    <p>{prodDetail.description}</p>
                    {prodDetail.size?.map((size) => {
                        return <button key={size} className='me-2 btn btn-dark'>{size}</button>
                    })}
                </div>
            </div>
            <h3 className='mt-3'>Related Products</h3>
            <div className="row">
                {prodDetail.relatedProducts?.map((prodRelate, index) => {
                    return <div className='col-4' key={index}>
                        <div className="card">
                            <img src={prodRelate.image} alt="..." />
                        </div>
                        <div className="card-body">
                            <h3>{prodRelate.name}</h3>
                            <p>{prodRelate.price}</p>
                            <NavLink to={`/detail/${prodRelate.id}`} className="btn btn-dark">View detail</NavLink>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Detail