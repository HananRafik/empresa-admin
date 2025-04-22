'use client'

import { Divider, Button, Typography, Space, Row, Col } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
  QuestionCircleOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const { Text, Title } = Typography;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Producto',
      links: [
        { label: 'Características', href: '/features' },
        { label: 'Precios', href: '/pricing' },
        { label: 'API', href: '/docs' },
        { label: 'Integraciones', href: '/integrations' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nosotros', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Empleo', href: '/careers' },
        { label: 'Socios', href: '/partners' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Centro de ayuda', href: '/help' },
        { label: 'Documentación', href: '/documentation' },
        { label: 'Guías', href: '/guides' },
        { label: 'Comunidad', href: '/community' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '/privacy' },
        { label: 'Términos', href: '/terms' },
        { label: 'Seguridad', href: '/security' },
        { label: 'GDPR', href: '/gdpr' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 mt-12">
      <div className="container mx-auto px-4 py-12">
        {/* Sección superior */}
        <Row gutter={[24, 24]}>
          {/* Descripción */}
          <Col xs={24} md={8}>
            <Title level={4} className="mb-4">
              PayAdmin
            </Title>
            <Text type="secondary" className="block mb-4">
              La plataforma todo-en-uno para administrar empresas, procesar pagos y hacer crecer tu negocio.
            </Text>
            <Space size="middle" className="mb-4">
              <Button 
                shape="circle" 
                icon={<FacebookOutlined />} 
                href="https://facebook.com" 
                target="_blank"
              />
              <Button 
                shape="circle" 
                icon={<TwitterOutlined />} 
                href="https://twitter.com" 
                target="_blank"
              />
              <Button 
                shape="circle" 
                icon={<LinkedinOutlined />} 
                href="https://linkedin.com" 
                target="_blank"
              />
              <Button 
                shape="circle" 
                icon={<GithubOutlined />} 
                href="https://github.com" 
                target="_blank"
              />
            </Space>
          </Col>

          {/* Links */}
          {footerLinks.map((section) => (
            <Col xs={12} sm={6} md={4} key={section.title}>
              <Title level={5} className="mb-4">
                {section.title}
              </Title>
              <Space direction="vertical">
                {section.links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </Space>
            </Col>
          ))}

          {/* Contacto */}
          <Col xs={24} sm={12} md={4}>
            <Title level={5} className="mb-4">
              Contacto
            </Title>
            <Space direction="vertical">
              <Button 
                type="text" 
                icon={<QuestionCircleOutlined />} 
                className="text-gray-600 p-0"
                href="/support"
              >
                Soporte
              </Button>
              <Button 
                type="text" 
                icon={<PhoneOutlined />} 
                className="text-gray-600 p-0"
                href="tel:+1234567890"
              >
                +1 (234) 567-890
              </Button>
              <Button 
                type="text" 
                icon={<MailOutlined />} 
                className="text-gray-600 p-0"
                href="mailto:soporte@payadmin.com"
              >
                soporte@payadmin.com
              </Button>
            </Space>
          </Col>
        </Row>

        <Divider className="my-8" />

        {/* Sección inferior */}
        <Row justify="space-between" align="middle">
          <Col>
            <Text type="secondary">
              © {currentYear} PayAdmin. Todos los derechos reservados.
            </Text>
          </Col>
          <Col>
            <Space>
              <Link href="/terms" className="text-gray-600 hover:text-blue-500">
                Términos
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-blue-500">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-blue-500">
                Cookies
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
    </footer>
  );
}