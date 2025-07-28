import { Layout, Typography, Button, Row, Col, Card, Avatar, Statistic, Divider, Badge } from 'antd';
import { 
  RocketOutlined, 
  TeamOutlined, 
  TrophyOutlined, 
  GlobalOutlined,
  CheckCircleOutlined,
  StarOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  SafetyCertificateOutlined,
  BulbOutlined,
  BarChartOutlined,
  CustomerServiceOutlined,
  ClockCircleOutlined,
  DollarOutlined
} from '@ant-design/icons';
import { imageConfig } from './config/images';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

function LandingPage() {
  return (
    <Layout className="app-layout">
      {/* Header */}
      <Header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <BulbOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            </div>
            <Title level={4} style={{ margin: 0, color: 'white', fontWeight: 600 }}>EmpresaCorp</Title>
          </div>
          <div className="nav-buttons">
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Inicio</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Servicios</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Nosotros</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Contacto</Button>
            <Button type="primary" size="middle" style={{ fontWeight: 600, borderRadius: '6px' }}>
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </Header>

      {/* Hero Section */}
      <Content>
        <div className="hero-section" style={{ backgroundImage: `url(${imageConfig.hero.url})` }}>
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="hero-title-container">
                <Title level={1} className="hero-title">
                  Transformamos Ideas en <span className="highlight">Resultados</span>
                </Title>
                <div className="hero-badge">
                  <span>Líderes en Consultoría</span>
                </div>
              </div>
              <Paragraph className="hero-subtitle">
                Somos líderes en consultoría empresarial, especializados en estrategias 
                innovadoras que impulsan el crecimiento y la excelencia operacional.
              </Paragraph>
              <div className="hero-buttons">
                <Button type="primary" size="large" icon={<RocketOutlined />} className="primary-btn">
                  Comenzar Proyecto
                </Button>
                <Button size="large" icon={<PlayCircleOutlined />} className="secondary-btn">
                  Ver Demo
                </Button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <Text className="stat-number">500+</Text>
                  <Text className="stat-label">Proyectos Exitosos</Text>
                </div>
                <div className="stat-item">
                  <Text className="stat-number">98%</Text>
                  <Text className="stat-label">Satisfacción Cliente</Text>
                </div>
                <div className="stat-item">
                  <Text className="stat-number">15+</Text>
                  <Text className="stat-label">Años Experiencia</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="section-container">
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} sm={12} md={6}>
                <Card className="stat-card" hoverable>
                  <Statistic 
                    title="Proyectos Completados" 
                    value={500} 
                    prefix={<TrophyOutlined className="stat-icon" />}
                    valueStyle={{ color: '#1890ff' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="stat-card" hoverable>
                  <Statistic 
                    title="Clientes Satisfechos" 
                    value={200} 
                    prefix={<TeamOutlined className="stat-icon" />}
                    valueStyle={{ color: '#52c41a' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="stat-card" hoverable>
                  <Statistic 
                    title="Años de Experiencia" 
                    value={15} 
                    prefix={<GlobalOutlined className="stat-icon" />}
                    valueStyle={{ color: '#722ed1' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="stat-card" hoverable>
                  <Statistic 
                    title="Equipo Profesional" 
                    value={50} 
                    prefix={<StarOutlined className="stat-icon" />}
                    valueStyle={{ color: '#fa8c16' }}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="section-container">
            <div className="section-header">
              <Title level={2} className="section-title">Nuestros Servicios</Title>
              <Paragraph className="section-subtitle">
                Ofrecemos soluciones integrales diseñadas para maximizar el potencial de su empresa
              </Paragraph>
            </div>
            
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card className="service-card" hoverable>
                  <div className="service-header">
                    <div className="service-icon">
                      <BarChartOutlined />
                    </div>
                    <Badge count="Popular" style={{ backgroundColor: '#52c41a' }} />
                  </div>
                  <Title level={4}>Estrategia Empresarial</Title>
                  <Paragraph>
                    Desarrollamos estrategias personalizadas que alinean sus objetivos 
                    con las mejores prácticas del mercado.
                  </Paragraph>
                  <div className="service-features">
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Análisis de mercado</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Planificación estratégica</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Implementación guiada</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn">
                    Saber Más
                  </Button>
                </Card>
              </Col>
              
              <Col xs={24} md={8}>
                <Card className="service-card" hoverable>
                  <div className="service-header">
                    <div className="service-icon">
                      <TeamOutlined />
                    </div>
                    <Badge count="Nuevo" style={{ backgroundColor: '#1890ff' }} />
                  </div>
                  <Title level={4}>Consultoría Organizacional</Title>
                  <Paragraph>
                    Optimizamos sus procesos internos y estructura organizacional 
                    para mejorar la eficiencia y productividad.
                  </Paragraph>
                  <div className="service-features">
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Optimización de procesos</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Reestructuración organizacional</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Capacitación de equipos</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn">
                    Saber Más
                  </Button>
                </Card>
              </Col>
              
              <Col xs={24} md={8}>
                <Card className="service-card" hoverable>
                  <div className="service-header">
                    <div className="service-icon">
                      <RocketOutlined />
                    </div>
                    <Badge count="Premium" style={{ backgroundColor: '#722ed1' }} />
                  </div>
                  <Title level={4}>Transformación Digital</Title>
                  <Paragraph>
                    Implementamos tecnologías innovadoras que modernizan su 
                    operación y mejoran la experiencia del cliente.
                  </Paragraph>
                  <div className="service-features">
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Automatización de procesos</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Plataformas digitales</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Analytics avanzados</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn">
                    Saber Más
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <div className="section-container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <div className="about-image-container">
                  <img 
                    src={imageConfig.team.url} 
                    alt={imageConfig.team.alt} 
                    className="about-image"
                  />
                  <div className="about-badge">
                    <SafetyCertificateOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                    <Text strong>Certificados ISO 9001</Text>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="about-content">
                  <Title level={2}>Sobre Nosotros</Title>
                  <Paragraph className="about-description">
                    Con más de 15 años de experiencia en el sector empresarial, 
                    hemos ayudado a cientos de organizaciones a alcanzar sus objetivos 
                    estratégicos y maximizar su potencial de crecimiento.
                  </Paragraph>
                  <div className="features-list">
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Equipo de expertos certificados</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Metodologías probadas y validadas</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Resultados medibles y tangibles</Text>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <Text>Soporte continuo y seguimiento</Text>
                    </div>
                  </div>
                  <div className="about-stats">
                    <div className="about-stat">
                      <DollarOutlined className="about-stat-icon" />
                      <div>
                        <Text className="about-stat-number">$2.5M</Text>
                        <Text className="about-stat-label">Ahorro Promedio</Text>
                      </div>
                    </div>
                    <div className="about-stat">
                      <ClockCircleOutlined className="about-stat-icon" />
                      <div>
                        <Text className="about-stat-number">6 meses</Text>
                        <Text className="about-stat-label">Tiempo Promedio</Text>
                      </div>
                    </div>
                  </div>
                  <Button type="primary" size="large" style={{ marginTop: 24 }} className="primary-btn">
                    Conocer Nuestro Equipo
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial-section">
          <div className="section-container">
            <Card className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <Avatar size={80} src={imageConfig.testimonial.url} alt={imageConfig.testimonial.alt} />
                  <div className="testimonial-rating">
                    <StarOutlined style={{ color: '#faad14' }} />
                    <StarOutlined style={{ color: '#faad14' }} />
                    <StarOutlined style={{ color: '#faad14' }} />
                    <StarOutlined style={{ color: '#faad14' }} />
                    <StarOutlined style={{ color: '#faad14' }} />
                  </div>
                </div>
                <Paragraph className="testimonial-text">
                  "EmpresaCorp transformó completamente nuestra operación. 
                  Su enfoque estratégico y profesionalismo nos permitió 
                  aumentar nuestra eficiencia en un 40% en solo 6 meses."
                </Paragraph>
                <div className="testimonial-author">
                  <Title level={4} style={{ margin: 0 }}>Carlos Rodríguez</Title>
                  <Text type="secondary">CEO, TechSolutions Inc.</Text>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="section-container">
            <Title level={2} className="cta-title">
              ¿Listo para Transformar su Empresa?
            </Title>
            <Paragraph className="cta-subtitle">
              Únase a cientos de empresas que ya han experimentado 
              el impacto de nuestras soluciones estratégicas.
            </Paragraph>
            <div className="cta-buttons">
              <Button type="primary" size="large" icon={<RocketOutlined />} className="primary-btn">
                Solicitar Consulta Gratuita
              </Button>
              <Button size="large" icon={<CustomerServiceOutlined />} className="secondary-btn">
                Contactar Expertos
              </Button>
            </div>
          </div>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="footer">
        <div className="footer-content">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <div className="footer-section">
                <div className="footer-logo">
                  <BulbOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                  <Title level={4} style={{ margin: 0, color: 'white' }}>EmpresaCorp</Title>
                </div>
                <Paragraph>
                  Transformamos ideas en resultados. Especialistas en 
                  consultoría empresarial y estrategias de crecimiento.
                </Paragraph>
                <div className="footer-social">
                  <Button type="text" icon={<StarOutlined />} style={{ color: '#b0b0b0' }} />
                  <Button type="text" icon={<TeamOutlined />} style={{ color: '#b0b0b0' }} />
                  <Button type="text" icon={<GlobalOutlined />} style={{ color: '#b0b0b0' }} />
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="footer-section">
                <Title level={4}>Servicios</Title>
                <ul className="footer-links">
                  <li>Estrategia Empresarial</li>
                  <li>Consultoría Organizacional</li>
                  <li>Transformación Digital</li>
                  <li>Optimización de Procesos</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="footer-section">
                <Title level={4}>Contacto</Title>
                <Paragraph>
                  <Text>Email: info@empresacorp.com</Text><br />
                  <Text>Teléfono: +1 (555) 123-4567</Text><br />
                  <Text>Dirección: Av. Principal 123, Ciudad</Text>
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Divider style={{ borderColor: '#303030' }} />
          <div className="footer-bottom">
            <Text>© 2024 EmpresaCorp. Todos los derechos reservados.</Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default LandingPage; 