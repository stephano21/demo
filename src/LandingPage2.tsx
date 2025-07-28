import { Layout, Typography, Button, Row, Col, Card, Avatar, Statistic, Divider, Tag } from 'antd';
import { 
  RocketOutlined, 
  TeamOutlined, 
  TrophyOutlined, 
  GlobalOutlined,
  CheckCircleOutlined,
  StarOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  CustomerServiceOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  HeartOutlined,
  ThunderboltOutlined,
  EyeOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { imageConfig } from './config/images';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

function LandingPage2() {
  return (
    <Layout className="app-layout">
      {/* Header */}
      <Header className="header-modern">
        <div className="header-content">
          <div className="logo-modern">
            <div className="logo-icon-modern">
              <ThunderboltOutlined style={{ fontSize: '28px', color: '#6366f1' }} />
            </div>
            <Title level={4} style={{ margin: 0, color: 'white', fontWeight: 700 }}>NexusCorp</Title>
          </div>
          <div className="nav-buttons-modern">
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Inicio</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Servicios</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Nosotros</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Contacto</Button>
            <Button type="primary" size="middle" style={{ 
              fontWeight: 600, 
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              border: 'none',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
            }}>
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </Header>

      {/* Hero Section */}
      <Content>
        <div className="hero-section-modern" style={{ backgroundImage: `url(${imageConfig.hero.url})` }}>
          <div className="hero-overlay-modern">
            <div className="hero-content-modern">
              <div className="hero-badge-modern">
                <Tag color="#6366f1" style={{ 
                  fontSize: '14px', 
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: 'none'
                }}>
                  ✨ Innovación Digital
                </Tag>
              </div>
              <Title level={1} className="hero-title-modern" style={{ color: '#ffffff' }}>
                <span style={{ color: '#ffffff' }}>Construimos el </span>
                <span className="highlight-modern">Futuro</span>
                <span style={{ color: '#ffffff' }}> Digital</span>
              </Title>
              <Paragraph className="hero-subtitle-modern" style={{ color: '#ffffff' }}>
                Transformamos empresas a través de soluciones digitales innovadoras, 
                creando experiencias únicas que conectan con el futuro.
              </Paragraph>
              <div className="hero-buttons-modern">
                <Button type="primary" size="large" icon={<RocketOutlined />} className="primary-btn-modern">
                  Explorar Soluciones
                </Button>
                <Button size="large" icon={<PlayCircleOutlined />} className="secondary-btn-modern">
                  Ver Demo
                </Button>
              </div>
              <div className="hero-stats-modern">
                <div className="stat-item-modern">
                  <Text className="stat-number-modern" style={{ color: '#6366f1' }}>250+</Text>
                  <Text className="stat-label-modern" style={{ color: '#ffffff' }}>Proyectos Digitales</Text>
                </div>
                <div className="stat-item-modern">
                  <Text className="stat-number-modern" style={{ color: '#6366f1' }}>99%</Text>
                  <Text className="stat-label-modern" style={{ color: '#ffffff' }}>Satisfacción</Text>
                </div>
                <div className="stat-item-modern">
                  <Text className="stat-number-modern" style={{ color: '#6366f1' }}>8+</Text>
                  <Text className="stat-label-modern" style={{ color: '#ffffff' }}>Años Innovando</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section-modern">
          <div className="section-container">
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} sm={12} md={6}>
                <div className="stat-card-modern">
                  <div className="stat-icon-modern">
                    <TrophyOutlined />
                  </div>
                  <Statistic 
                    title="Proyectos Exitosos" 
                    value={250} 
                    valueStyle={{ color: '#6366f1' }}
                  />
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="stat-card-modern">
                  <div className="stat-icon-modern">
                    <TeamOutlined />
                  </div>
                  <Statistic 
                    title="Clientes Felices" 
                    value={150} 
                    valueStyle={{ color: '#10b981' }}
                  />
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="stat-card-modern">
                  <div className="stat-icon-modern">
                    <GlobalOutlined />
                  </div>
                  <Statistic 
                    title="Países Alcanzados" 
                    value={12} 
                    valueStyle={{ color: '#f59e0b' }}
                  />
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="stat-card-modern">
                  <div className="stat-icon-modern">
                    <StarOutlined />
                  </div>
                  <Statistic 
                    title="Equipo Creativo" 
                    value={35} 
                    valueStyle={{ color: '#ef4444' }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section-modern">
          <div className="section-container">
            <div className="section-header-modern">
              <Title level={2} className="section-title-modern">Nuestras Soluciones</Title>
              <Paragraph className="section-subtitle-modern">
                Diseñamos experiencias digitales que transforman la forma en que las empresas se conectan con sus clientes
              </Paragraph>
            </div>
            
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card className="service-card-modern" hoverable>
                  <div className="service-icon-modern">
                    <EyeOutlined />
                  </div>
                  <Title level={4}>Diseño UX/UI</Title>
                  <Paragraph>
                    Creamos interfaces intuitivas y experiencias de usuario 
                    que cautivan y convierten visitantes en clientes leales.
                  </Paragraph>
                  <div className="service-features-modern">
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Diseño centrado en el usuario</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Prototipado interactivo</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Testing de usabilidad</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn-modern">
                    Explorar
                  </Button>
                </Card>
              </Col>
              
              <Col xs={24} md={8}>
                <Card className="service-card-modern" hoverable>
                  <div className="service-icon-modern">
                    <SettingOutlined />
                  </div>
                  <Title level={4}>Desarrollo Web</Title>
                  <Paragraph>
                    Construimos aplicaciones web modernas y escalables 
                    que impulsan el crecimiento de su negocio digital.
                  </Paragraph>
                  <div className="service-features-modern">
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Desarrollo full-stack</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Arquitectura escalable</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Optimización de rendimiento</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn-modern">
                    Explorar
                  </Button>
                </Card>
              </Col>
              
              <Col xs={24} md={8}>
                <Card className="service-card-modern" hoverable>
                  <div className="service-icon-modern">
                    <RocketOutlined />
                  </div>
                  <Title level={4}>Marketing Digital</Title>
                  <Paragraph>
                    Estrategias digitales que aumentan la visibilidad 
                    y generan resultados medibles para su empresa.
                  </Paragraph>
                  <div className="service-features-modern">
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>SEO y SEM</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Redes sociales</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Analytics avanzados</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn-modern">
                    Explorar
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section-modern">
          <div className="section-container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <div className="about-image-container-modern">
                  <img 
                    src={imageConfig.team.url} 
                    alt={imageConfig.team.alt} 
                    className="about-image-modern"
                  />
                  <div className="about-badge-modern">
                    <HeartOutlined style={{ fontSize: '20px', color: '#ef4444' }} />
                    <Text strong>Pasados por la Innovación</Text>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="about-content-modern">
                  <Title level={2}>Sobre NexusCorp</Title>
                  <Paragraph className="about-description-modern">
                    Somos un equipo apasionado por la innovación digital, 
                    especializados en crear soluciones que transforman 
                    la forma en que las empresas interactúan con el mundo digital.
                  </Paragraph>
                  <div className="features-list-modern">
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Equipo multidisciplinario</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Metodologías ágiles</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Resultados medibles</Text>
                    </div>
                    <div className="feature-item-modern">
                      <CheckCircleOutlined className="feature-icon-modern" />
                      <Text>Soporte continuo</Text>
                    </div>
                  </div>
                  <div className="about-stats-modern">
                    <div className="about-stat-modern">
                      <DollarOutlined className="about-stat-icon-modern" />
                      <div>
                        <Text className="about-stat-number-modern">$1.8M</Text>
                        <Text className="about-stat-label-modern">ROI Promedio</Text>
                      </div>
                    </div>
                    <div className="about-stat-modern">
                      <ClockCircleOutlined className="about-stat-icon-modern" />
                      <div>
                        <Text className="about-stat-number-modern">4 meses</Text>
                        <Text className="about-stat-label-modern">Tiempo Promedio</Text>
                      </div>
                    </div>
                  </div>
                  <Button type="primary" size="large" style={{ marginTop: 24 }} className="primary-btn-modern">
                    Conocer Más
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial-section-modern">
          <div className="section-container">
            <Card className="testimonial-card-modern">
              <div className="testimonial-content-modern">
                <div className="testimonial-header-modern">
                  <Avatar size={80} src={imageConfig.testimonial.url} alt={imageConfig.testimonial.alt} />
                  <div className="testimonial-rating-modern">
                    <StarOutlined style={{ color: '#fbbf24' }} />
                    <StarOutlined style={{ color: '#fbbf24' }} />
                    <StarOutlined style={{ color: '#fbbf24' }} />
                    <StarOutlined style={{ color: '#fbbf24' }} />
                    <StarOutlined style={{ color: '#fbbf24' }} />
                  </div>
                </div>
                <Paragraph className="testimonial-text-modern">
                  "NexusCorp revolucionó nuestra presencia digital. 
                  Su enfoque innovador y atención al detalle nos permitió 
                  aumentar nuestras conversiones en un 300% en solo 3 meses."
                </Paragraph>
                <div className="testimonial-author-modern">
                  <Title level={4} style={{ margin: 0 }}>Ana Martínez</Title>
                  <Text type="secondary">Directora de Marketing, DigitalFlow</Text>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section-modern">
          <div className="section-container">
            <Title level={2} className="cta-title-modern">
              ¿Listo para el Futuro Digital?
            </Title>
            <Paragraph className="cta-subtitle-modern">
              Únase a cientos de empresas que ya están transformando 
              su presencia digital con nuestras soluciones innovadoras.
            </Paragraph>
            <div className="cta-buttons-modern">
              <Button type="primary" size="large" icon={<RocketOutlined />} className="primary-btn-modern">
                Comenzar Proyecto
              </Button>
              <Button size="large" icon={<CustomerServiceOutlined />} className="secondary-btn-modern">
                Hablar con Expertos
              </Button>
            </div>
          </div>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="footer-modern">
        <div className="footer-content">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <div className="footer-section-modern">
                <div className="footer-logo-modern">
                  <ThunderboltOutlined style={{ fontSize: '24px', color: '#6366f1' }} />
                  <Title level={4} style={{ margin: 0, color: 'white' }}>NexusCorp</Title>
                </div>
                <Paragraph>
                  Construimos el futuro digital. Especialistas en 
                  innovación tecnológica y transformación digital.
                </Paragraph>
                <div className="footer-social-modern">
                  <Button type="text" icon={<StarOutlined />} style={{ color: '#9ca3af' }} />
                  <Button type="text" icon={<TeamOutlined />} style={{ color: '#9ca3af' }} />
                  <Button type="text" icon={<GlobalOutlined />} style={{ color: '#9ca3af' }} />
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="footer-section-modern">
                <Title level={4}>Servicios</Title>
                <ul className="footer-links-modern">
                  <li>Diseño UX/UI</li>
                  <li>Desarrollo Web</li>
                  <li>Marketing Digital</li>
                  <li>Consultoría Digital</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="footer-section-modern">
                <Title level={4}>Contacto</Title>
                <Paragraph>
                  <Text>Email: hello@nexuscorp.com</Text><br />
                  <Text>Teléfono: +1 (555) 987-6543</Text><br />
                  <Text>Dirección: Innovation Hub 456, Tech City</Text>
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Divider style={{ borderColor: '#374151' }} />
          <div className="footer-bottom-modern">
            <Text>© 2024 NexusCorp. Todos los derechos reservados.</Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default LandingPage2; 