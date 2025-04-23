'use client'

import {  BankTwoTone, CreditCardTwoTone,  DashboardTwoTone, EuroCircleTwoTone, GlobalOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'



import React from 'react'
import Image from 'next/image'

import { Menu, Dropdown, Avatar, Button } from 'antd';
import type {MenuProps}from 'antd'

import Link from 'next/link'

export default function Header() {


  //Menu de usuario
  const menuItems: MenuProps['items']= [

    {
      key: 'dashboard',
      label: <Link href={'/dashboard'}> Dashboard</Link>,
      icon: <DashboardTwoTone/>
    },

    {
      key: 'empresas',
      label: <Link href={'/empresas'}>Empresas</Link>,
      icon: <BankTwoTone/>
    },

    {
      key: 'pagos',
      label: <Link href={'/pagos'}>Pasarela</Link>,
      icon: <CreditCardTwoTone/>
    },

    {
      key: 'precios',
      label: <Link href={'/precios'}>Planes</Link>,
      icon: <EuroCircleTwoTone/>
    }



  ];

  const userItems: MenuProps['items'] = [
    {
      key: 'perfil',
      label: <Link href={'/perfil'}>Mi perfil</Link>,
      icon: <UserOutlined/>
      
    },
    {
      key: 'logout',
      label: 'Cerrar sesión',
      icon: <LogoutOutlined/>
    }
  ];


  const languageItems: MenuProps['items'] = [
    {
      key: 'es',
      label: 'Español',
      
    },

    {
      key: 'En',
      label:'English' 
    }
  ]


  return (
    <div>
      <header className='bg-white shadow-sm top-0 z-50'>
        <div className='container mx-auto px-4'>

          <div className='flex justify-between items-center h-16'>

            <Link href="/" className='flex items-center'>

              <Image 
                src= '/logo.png'
                alt= 'Logo de la plataforma'
                width = {120}
                height = {40} />
            </Link>

            {/*Menu principal*/}
            <Menu
            mode='horizontal'
            items={menuItems}
            className='hidden md: flex border-0'
            theme='light'
            />


            {/*Menu de usuario*/}
            <div className='flex items-center gap-4'>
              <Dropdown menu={{ items: userItems}} placement='bottomRight'>

                <Avatar icon = {< UserOutlined/>} className='cursor-pointer'></Avatar>

              </Dropdown>


              {/*Menu idiomas*/}

              <Dropdown
                menu={{
                  items: languageItems,
                 
                }}
                placement='bottomRight'
              
              >
                <Button
                  type='text'
                  icon= {<GlobalOutlined/>}
                  className='hindden md:block'
                />

                

              </Dropdown>
              

            </div>

            
          </div>

        </div>

      </header>
    </div>
  )
}
