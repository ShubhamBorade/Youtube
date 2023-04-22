import React from 'react'
import Button from './button'
import { useSelector } from 'react-redux';

const ButtonList = () => {

    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    return (
        <div className={'flex  mt-[48px] fixed left-30 z-10 bg-gray-50 '+ (isMenuOpen && 'ml-[180px]') + ' w-[1265px]'}>
            <Button name="Live"/>
            <Button name="Gaming"/>
            <Button name="Movies"/>
            <Button name="News"/>
            <Button name="Sports"/>
            <Button name="Music"/>
            <Button name="Cars"/>
            <Button name="Coding"/>
            <Button name="Motivation"/>
            <Button name="Vlogs"/>
            <Button name="Comedy"/>
        </div>
    )
}

export default ButtonList
