"use client";
import Image from "next/image";
import Logo from "@/public/Logo.webp";
import styles from "@/styles/shop-header.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CartItem from "./headerCartItem";
import { cartItemType } from "@/types/cartItemType";
import { getUniqueId } from "@/lib/generateId";

export default function ShopHeader() {
  const [cart, setCart] = useState<cartItemType[]>([]);
  const [cartSum, setCartSum] = useState(0);

  /* Cart summary state, true means user can see context menu */
  const [cartVisibility, setCartVisibility] = useState(false);

  /* Burger button click state; true means user can see context menu*/
  const [toggled, setToggled] = useState(false);

  function toggleMobileCart() {
    toggled ? setToggled(false) : setToggled(true);
  }
  function toggleCart() {
    cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
  }
  /* function toggleCartStyle() {
    const cart = cartRef.current;
    if (cartRef.current !== null) {
      cartVisibility
        ? (cart.style.display = "none")
        : (cart.style.display = "flex");
    }
  } */
  function toggleMobileNavbar() {
    const modal = document.getElementById("modal");
    modal.style.display === "none"
      ? (modal.style.display = "flex")
      : (modal.style.display = "none");
  }
  const stringifyCart = () => {
    let array = [];
    for (let i = 0; i < cart.length; i++) {
        array.push(JSON.stringify(cart[i]));
    }
    return array;
  };
  const createCartItem = () => {
    let item = JSON.parse(sessionStorage.getItem("bella-ciao-item-data"));
    item.quantity = +document.getElementById("quantOrderPage").textContent;
    item.id = getUniqueId();
    item.full_price = (item.full_price * item.quantity).toFixed(2);
    return item;
  }
  function deleteCartItem(e: Event) {
    if ((e.target as HTMLImageElement).id.slice(0, 5) === "trash"){
      setCart((cart) => cart.filter((item) => item.id !== (e.target as HTMLImageElement).id.substring(5)))
    }
  }
  function loadCartFromSession() {
    if (sessionStorage.getItem("bella-ciao-session-cart") !== null) {
      setCart(JSON.parse(sessionStorage.getItem("bella-ciao-session-cart")));
    }
  }
  function saveCartToSession(item: cartItemType){
      sessionStorage.setItem(
        "bella-ciao-session-cart",
        "[" + [...stringifyCart()].toString() + "]"
      );
  }
  function updateCartItemQuantity(change: number, item_id: string){
    let oldCart = cart
    let item = oldCart.filter((item) => item.id === item_id)
    item[0].quantity = change
    item[0].full_price = (change * +item[0].price.substring(1))
    oldCart = oldCart.filter((item) => item.id !== item_id)
    oldCart.push(item[0])
    setCart(oldCart)
  }
  useEffect(() => {
    loadCartFromSession();
  },[])

  useEffect(() => {
    setCartSum((sum) => cart.reduce((acc, obj) => acc + obj.full_price, 0))
  },[cart])

  useEffect(() => {
    window.addEventListener('click', deleteCartItem)

    return () => {
      window.removeEventListener('click', deleteCartItem)
    }
  },[])

  

  return <></>;
}
