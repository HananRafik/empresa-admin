'use client'
import { useState } from 'react';
import { Card, Switch, Button, Typography, Divider, Tag, Space, Badge } from 'antd';
import { CheckOutlined, CrownOutlined, StarOutlined } from '@ant-design/icons';
import Header from '@/app/components/Header';
import Footer from '@/app/components/footer';

const { Title, Text } = Typography;
const { Meta } = Card;

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);

  const pricingPlans = [
    {
      title: "Básico",
      price: annualBilling ? "€9" : "€12",
      period: annualBilling ? "/mes (anual)" : "/mes (mensual)",
      description: "Para pequeñas empresas que comienzan",
      features: [
        "Hasta 10 transacciones/mes",
        "1 empresa conectada",
        "Soporte básico",
        "Panel de control simple"
      ],
      recommended: false,
      cta: "Empezar gratis",
      popular: false
    },
    {
      title: "Profesional",
      price: annualBilling ? "€29" : "€35",
      period: annualBilling ? "/mes (anual)" : "/mes (mensual)",
      description: "Para negocios en crecimiento",
      features: [
        "Hasta 100 transacciones/mes",
        "5 empresas conectadas",
        "Soporte prioritario",
        "Panel avanzado",
        "Informes básicos",
        "Integraciones API"
      ],
      recommended: true,
      cta: "Prueba 14 días",
      popular: true
    },
    {
      title: "Empresa",
      price: "Personalizado",
      period: "",
      description: "Para grandes volúmenes y necesidades específicas",
      features: [
        "Transacciones ilimitadas",
        "Empresas ilimitadas",
        "Soporte 24/7",
        "Panel personalizado",
        "Informes avanzados",
        "Integraciones premium",
        "Asesor dedicado"
      ],
      recommended: false,
      cta: "Contactar ventas",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <Tag icon={<StarOutlined />} color="gold" className="mb-4">
              PLANES DE PRECIOS
            </Tag>
            <Title level={2} className="mb-4">
              Encuentra el plan perfecto para tu negocio
            </Title>
            <Text type="secondary" className="text-lg max-w-2xl mx-auto block">
              Desde startups hasta grandes empresas, tenemos una solución para cada etapa de tu crecimiento.
            </Text>
            
            {/* Toggle anual/mensual */}
            <div className="flex justify-center items-center mt-8">
              <Text strong className="mr-4">Facturación mensual</Text>
              <Switch 
                checkedChildren="Anual" 
                unCheckedChildren="Mensual" 
                checked={annualBilling}
                onChange={() => setAnnualBilling(!annualBilling)}
              />
              <Text strong className="ml-4">Facturación anual (20% descuento)</Text>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Badge.Ribbon 
                  text="Popular" 
                  color="volcano"
                  className={!plan.popular ? 'hidden' : ''}
                  key={`badge-${index}`}
                >
                  <Card
                    key={index}
                    hoverable
                    className={`h-full border rounded-lg ${plan.recommended ? 'border-2 border-blue-500 transform scale-105' : 'border-gray-200'}`}
                    cover={
                      <div className={`p-6 ${plan.recommended ? 'bg-blue-500' : 'bg-gray-100'}`}>
                        <Title 
                          level={3} 
                          className={`text-center mb-0 ${plan.recommended ? 'text-white' : 'text-gray-800'}`}
                        >
                          {plan.title}
                        </Title>
                      </div>
                    }
                  >
                    <Meta
                      title={
                        <div className="text-center">
                          <Title level={1} className="mb-0">
                            {plan.price}
                            <Text type="secondary" className="text-lg">
                              {plan.period}
                            </Text>
                          </Title>
                          <Text type="secondary">{plan.description}</Text>
                        </div>
                      }
                      description={
                        <div className="mt-6">
                          <Divider orientation="left">Incluye:</Divider>
                          <Space direction="vertical" size="middle" className="w-full">
                            {plan.features.map((feature, i) => (
                              <div key={i} className="flex items-start">
                                <CheckOutlined className="text-green-500 mt-1 mr-2" />
                                <Text>{feature}</Text>
                              </div>
                            ))}
                          </Space>
                          <Button 
                            type={plan.recommended ? 'primary' : 'default'} 
                            size="large" 
                            block 
                            className="mt-8"
                            icon={plan.title === "Empresa" ? null : <CrownOutlined />}
                          >
                            {plan.cta}
                          </Button>
                        </div>
                      }
                    />
                  </Card>
                </Badge.Ribbon>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Title level={3} className="text-center mb-12">
              Comparación detallada de características
            </Title>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-4">Características</th>
                    <th className="text-center pb-4">Básico</th>
                    <th className="text-center pb-4">Profesional</th>
                    <th className="text-center pb-4">Empresa</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Transacciones mensuales",
                    "Empresas conectadas",
                    "Soporte",
                    "Panel de control",
                    "Informes",
                    "API Access",
                    "Seguridad avanzada"
                  ].map((feature, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="py-4 px-4">{feature}</td>
                      <td className="text-center py-4">
                        {i === 0 ? "10" : i === 1 ? "1" : i < 4 ? <CheckOutlined className="text-green-500" /> : <Text type="secondary">-</Text>}
                      </td>
                      <td className="text-center py-4">
                        {i === 0 ? "100" : i === 1 ? "5" : <CheckOutlined className="text-green-500" />}
                      </td>
                      <td className="text-center py-4">
                        {i === 0 ? "Ilimitadas" : i === 1 ? "Ilimitadas" : <CheckOutlined className="text-green-500" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <Title level={2} className="text-white mb-4">
              ¿Necesitas algo más personalizado?
            </Title>
            <Text className="text-xl mb-8 block max-w-2xl mx-auto">
              Nuestro equipo puede crear un plan a medida para las necesidades específicas de tu empresa.
            </Text>
            <Space size="large">
              <Button size="large" type="primary" ghost>
                Hablar con ventas
              </Button>
              <Button size="large" type="default">
                Preguntas frecuentes
              </Button>
            </Space>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}