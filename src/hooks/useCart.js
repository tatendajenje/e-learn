import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { updateCart } from "../redux/features/shop/cartSlice";

const useCart = () => {
    const { cart } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    let [ total, updateTotal ] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, cur) => acc += Number(cur.price) * cur.quantity, 0);
        updateTotal(total.toFixed(2));
    }, [cart])

    const inCart = (id) => cart.find(item => item.id === id, {});

    const addToCart = (course) => {
        let newCart = [];
        
        if(cart.length) {
            const itemExists = inCart(course.id);
            if(itemExists) {
                newCart = cart.map((item) => item.id === course.id ? { ...item, quantity: item.quantity + 1} : item);
            } else {
                newCart = [...cart, {...course, quantity: 1}];
            }
        } else {
            let item = {...course, quantity: 1};
            newCart = [item];
        }
        dispatch(updateCart(newCart)); 
    }

    const subtractFromCart = (id) => {
       const course = cart.find(item => item.id === id);

       // if quantity is == 0, remove from cart, else just reduce by 1; 
       if('id' in course) {
        const quantity = course.quantity - 1;
        if(quantity === 0) {
            removeFromCart(course.id);
        } else {
            const newCart = cart.map(item => item.id === course.id ? { ...item, quantity} : item);
            dispatchEvent(updateCart(newCart))
        }
       }
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        dispatch(updateCart(newCart));
    }

    const emptyCart = () => {
        dispatch(updateCart([]));
    }

    return  {cart, total, addToCart, subtractFromCart, removeFromCart, emptyCart}

}

export default useCart;