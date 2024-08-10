import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'

const ListProduct = () => {
    const [arrProduct, setArrProduct] = useState([]);

    const [search, setSearch] = useSearchParams();

    const kw = search.get('prodName');

    const getAllProductApi = async () => {
        let url = '';
        if (kw) {
            url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?keyword=${kw}`;
        } else {
            url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall`;
        }

        const res = await fetch(url);

        const data = await res.json();
        // setState vào arrProduct
        setArrProduct(data);
        console.log(data);
    };

    useEffect(() => {
        // Gọi api
        getAllProductApi();
    }, [kw]);

    const handleChange = (e) => {
        // Đưa dữ liệu lên url
        setSearch({
            prodName: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <div>
            <div className='product-header mb-3 mt-4'>
                <h2 style={{ fontSize: 16, fontWeight: 'normal', color: '#878995' }}>Products &gt; List</h2>
                <NavLink to="/product-management/create-product" className='btn'>New product</NavLink>
            </div>
            <form className="d-flex mb-3" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2 w-25 " type="text" placeholder="Search" aria-label="Search" onInput={handleChange} />
                <button className="btn product-search" type="submit" >Search</button>
            </form>

            <div className='table-responsive'>
                <table className='table table-striped table-sm'>
                    <thead className='table-title'>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Name</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {arrProduct.map((item) => {
                            return <tr key={item.id}>
                                <td><input type="checkbox" /></td>
                                <td>{item.name}</td>
                                <td><img src={item.img} alt='...' className='product-img' style={{ width: '50px' }} /></td>
                                <td>{item.price}</td>
                                <td>{item.type}</td>
                                <td>
                                    <NavLink to={`/product-management/update-product/${item.id}`} className="btn btn-sm btn-primary me-1">Edit</NavLink>
                                    <button onClick={async () => {
                                        if (window.confirm('Bạn có muốn xóa không ?')) {
                                            // Gọi api xóa
                                            const res = await axios.delete(`https://apitraining.cybersoft.edu.vn/api/ProductApi/delete/${item.id}`);
                                            // Sau khi xóa thành công thì load lại api get all product
                                            getAllProductApi();
                                        }

                                    }} className="btn btn-sm btn-danger me-1">Delete</button>
                                    <a href="#" className='btn btn-sm btn-info'>View detail</a>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-between mb-3'>
                <div>Showing 1 to 3 of 3 results</div>
                <div>Per page: 10</div>
            </div>
            {/* <nav>
                <ul className="pagination justify-content-between">
                    <li className="page-item">
                        <a className="page-link" href="#">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav> */}
        </div>
    )
}

export default ListProduct