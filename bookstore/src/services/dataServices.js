import axios from 'axios'


const headerConfig = {
    headers: {
        'x-access-token': localStorage.getItem('token')
    }
}

export const getBook =({obj,obj1}) =>{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',{obj,obj1})
    return response
}

export const getCartItem =() =>{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig)
    return response
}

export const editUserAddress =(custAddrobj) =>{
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,custAddrobj, headerConfig)
    return response
}

export const add_order =(custOrderObj) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,custOrderObj, headerConfig)
    return response
}

export const add_to_cart_item =(id) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`,id, headerConfig)
    return response
}

export const cart_item_quntity =(Obj, id) =>{
    console.log(Obj,id);
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,Obj, headerConfig)
    return response
}

export const add_wish_list =(id) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,id, headerConfig)
    return response
}

export const get_wishlist_items =() =>{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items', headerConfig)
    return response
}

export const removeCartItem =(id) =>{
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,id, headerConfig)
    return response
}

