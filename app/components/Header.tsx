'use client'

import React, { useState } from 'react';
import { Menu, Button, Dropdown, Avatar, Badge, Switch, Space } from 'antd';
import type { MenuProps } from 'antd';
import {
  DashboardOutlined,
  BankOutlined,
  CreditCardOutlined,
  DollarOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuOutlined,
  NotificationOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

export default function Header() {
  const [current, setCurrent] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  // Menú principal
  const mainMenuItems: MenuItem[] = [
    getItem(
      <Link href="/dashboard">Dashboard</Link>,
      'dashboard',
      <DashboardOutlined />
    ),
    getItem(
      <Link href="/empresas">Empresas</Link>,
      'empresas',
      <BankOutlined />
    ),
    getItem(
      <Link href="/pagos">Pasarela</Link>,
      'pagos',
      <CreditCardOutlined />
    ),
    getItem(
      <Link href="/pricing">Planes</Link>,
      'precios',
      <DollarOutlined />
    )
  ];

  // Menú de usuario
  const userMenuItems: MenuItem[] = [
    getItem('Mi Perfil', 'profile', <UserOutlined />),
    getItem(
      'Idioma',
      'language',
      <GlobalOutlined />,
      [
        getItem('Español', 'es'),
        getItem('English', 'en')
      ]
    ),
    { type: 'divider' },
    getItem('Cerrar Sesión', 'logout', <LogoutOutlined />, undefined, undefined, 'danger')
  ];

  // Manejar selección de menú
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'logout') {
      // Lógica para cerrar sesión
      console.log('Cerrar sesión');
    } else if (e.key === 'es' || e.key === 'en') {
      // Lógica para cambiar idioma
      console.log(`Cambiar idioma a ${e.key}`);
    }
    setCurrent(e.key);
  };

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo y Menú Principal */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-xl font-bold flex items-center">
              <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>PayAdmin</span>
            </Link>
            
            {/* Menú Desktop */}
            <Menu
              mode="horizontal"
              items={mainMenuItems}
              selectedKeys={[current]}
              className={`hidden md:flex border-0 ${darkMode ? 'bg-gray-800 text-white' : ''}`}
              onClick={handleMenuClick}
              theme={darkMode ? 'dark' : 'light'}
            />
          </div>

          {/* Controles Derecha */}
          <div className="flex items-center space-x-4">
            {/* Modo Oscuro */}
            <Switch
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              checked={darkMode}
              onChange={(checked) => setDarkMode(checked)}
            />

            {/* Notificaciones */}
            <Badge count={5} className="hidden md:block">
              <Button 
                type="text" 
                icon={<NotificationOutlined className={darkMode ? 'text-white' : ''} />} 
                shape="circle" 
              />
            </Badge>

            {/* Selector Idioma Mobile */}
            <Dropdown 
              menu={{ 
                items: userMenuItems.filter(item => item?.key === 'language'),
                onClick: handleMenuClick
              }} 
              trigger={['click']}
            >
              <Button 
                type="text" 
                icon={<GlobalOutlined className={darkMode ? 'text-white' : ''} />} 
                className="md:hidden"
              />
            </Dropdown>

            {/* Usuario */}
            <Dropdown 
              menu={{ 
                items: userMenuItems,
                onClick: handleMenuClick
              }} 
              placement="bottomRight"
              trigger={['click']}
            >
              <Space className="cursor-pointer">
                <Avatar 
                  icon={<UserOutlined />} 
                  className={darkMode ? 'bg-gray-600' : ''}
                />
                <span className={`hidden lg:inline ${darkMode ? 'text-white' : 'text-gray-600'}`}>
                  Admin
                </span>
              </Space>
            </Dropdown>

            {/* Menú Mobile */}
            <Dropdown 
              menu={{ 
                items: mainMenuItems,
                onClick: handleMenuClick
              }} 
              trigger={['click']}
              className="md:hidden"
            >
              <Button 
                type="text" 
                icon={<MenuOutlined className={darkMode ? 'text-white' : ''} />} 
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}