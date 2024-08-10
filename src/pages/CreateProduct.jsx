import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const navigate = useNavigate();

  const prodEditForm = useFormik({
    initialValues: {
      id: '',
      name: '',
      price: '',
      description: '',
      img: '',
      type: 'APPLE',
      delete: false,
    },
    onSubmit: async (value) => {
      console.log(value);
      // Gọi api update
      const res = await axios.post(`https://apitraining.cybersoft.edu.vn/api/ProductApi/create`, value);
      // Sau khi chỉnh sửa xong thì dùng navigate chuyển về trang quản lý
      alert('Thêm thành công !');
      navigate('/product-management')
    }
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Update Product</h5>
              <form onSubmit={prodEditForm.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">ID</label>
                  <input value={prodEditForm.values.id} onChange={prodEditForm.handleChange} type="text" className="form-control" name="id" placeholder="Enter product ID" />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input value={prodEditForm.values.name} onChange={prodEditForm.handleChange} type="text" className="form-control" name="name" placeholder="Enter product name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input value={prodEditForm.values.price} onChange={prodEditForm.handleChange} type="number" className="form-control" name="price" placeholder="Enter product price" />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">Image URL</label>
                  <input value={prodEditForm.values.img} onChange={prodEditForm.handleChange} type="text" className="form-control" name="img" placeholder="Enter image URL" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input value={prodEditForm.values.description} onChange={prodEditForm.handleChange} className="form-control" name="description" type='text' placeholder="Enter product description"></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="type" className="form-label">Type</label>
                  <select value={prodEditForm.values.type} onChange={prodEditForm.handleChange} name="type" className='form-control'>
                    <option value="SONY">SONY</option>
                    <option value="APPLE">APPLE</option>
                    <option value="SAMSUNG">SAMSUNG</option>
                    <option value="XIAOMI">XIAOMI</option>
                  </select>
                </div>
                <div className="mb-3 form-check">
                  <input value={prodEditForm.values.id} onChange={prodEditForm.handleChange} type="checkbox" className="form-check-input" name="deleted" />
                  <label className="form-check-label" htmlFor="deleted">Deleted</label>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct