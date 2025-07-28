import { Layout, Typography, Button, Row, Col, Card, Avatar, Statistic, Divider, Badge } from 'antd';
import { 
  TeamOutlined, 
  GlobalOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  PlayCircleOutlined,
  CustomerServiceOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  BankOutlined,
  AuditOutlined,
  ProjectOutlined,
  RiseOutlined,
  CrownOutlined,
  TrophyFilled,
  StarFilled
} from '@ant-design/icons';
import { imageConfig } from './config/images';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

function LandingPage3() {
  return (
    <Layout className="app-layout">
      {/* Header */}
      <Header className="header-corporate">
        <div className="header-content">
          <div className="logo-corporate">
            <div className="logo-icon-corporate">
              <CrownOutlined style={{ fontSize: '28px', color: '#d4af37' }} />
            </div>
            <Title level={4} style={{ margin: 0, color: 'white', fontWeight: 700 }}>PrestigeCorp</Title>
          </div>
          <div className="nav-buttons-corporate">
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Inicio</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Servicios</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Nosotros</Button>
            <Button type="text" style={{ color: 'white', fontWeight: 500 }}>Contacto</Button>
            <Button type="primary" size="middle" style={{ 
              fontWeight: 600, 
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
              border: 'none',
              boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
            }}>
              Acceso Ejecutivo
            </Button>
          </div>
        </div>
      </Header>

      {/* Hero Section */}
      <Content>
        <div className="hero-section-corporate" style={{ backgroundImage: `url(${imageConfig.corporate.hero.url})` }}>
          <div className="hero-overlay-corporate">
            <div className="hero-content-corporate">
              <div className="hero-badge-corporate">
                <Badge.Ribbon text="Excelencia Corporativa" color="#d4af37" style={{ fontSize: '12px' }}>
                  <div className="hero-badge-container-corporate">
                    <Title level={1} className="hero-title-corporate">
                      Lideramos la <span className="highlight-corporate">Excelencia</span> Empresarial
                    </Title>
                  </div>
                </Badge.Ribbon>
              </div>
              <Paragraph className="hero-subtitle-corporate">
                Somos consultores ejecutivos de élite, especializados en estrategias corporativas 
                que transforman organizaciones en líderes de su industria.
              </Paragraph>
              <div className="hero-buttons-corporate">
                <Button type="primary" size="large" icon={<RiseOutlined />} className="primary-btn-corporate">
                  Consulta Ejecutiva
                </Button>
                <Button size="large" icon={<PlayCircleOutlined />} className="secondary-btn-corporate">
                  Ver Presentación
                </Button>
              </div>
              <div className="hero-stats-corporate">
                <div className="stat-item-corporate">
                  <Text className="stat-number-corporate">$50B+</Text>
                  <Text className="stat-label-corporate">Valor Creado</Text>
                </div>
                <div className="stat-item-corporate">
                  <Text className="stat-number-corporate">100%</Text>
                  <Text className="stat-label-corporate">Tasa de Éxito</Text>
                </div>
                <div className="stat-item-corporate">
                  <Text className="stat-number-corporate">25+</Text>
                  <Text className="stat-label-corporate">Años de Liderazgo</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section-corporate">
          <div className="section-container">
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} sm={12} md={6}>
                <Card className="stat-card-corporate" hoverable>
                  <div className="stat-icon-corporate">
                    <TrophyFilled />
                  </div>
                  <Statistic 
                    title="Fortune 500" 
                    value={150} 
                    valueStyle={{ color: '#d4af37' }}
                  />
                  <Text type="secondary">Empresas Atendidas</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="stat-card-corporate" hoverable>
                  <div className="stat-icon-corporate">
                    <StarFilled />
                  </div>
                  <Statistic 
                    title="ROI Promedio" 
                    value={450} 
                    suffix="%" 
                    valueStyle={{ color: '#d4af37' }}
                  />
                  <Text type="secondary">Retorno de Inversión</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="stat-card-corporate" hoverable>
                  <div className="stat-icon-corporate">
                    <GlobalOutlined />
                  </div>
                  <Statistic 
                    title="Presencia Global" 
                    value={45} 
                    suffix="Países" 
                    valueStyle={{ color: '#d4af37' }}
                  />
                  <Text type="secondary">Mercados Alcanzados</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="stat-card-corporate" hoverable>
                  <div className="stat-icon-corporate">
                    <TeamOutlined />
                  </div>
                  <Statistic 
                    title="Equipo Elite" 
                    value={85} 
                    suffix="Expertos" 
                    valueStyle={{ color: '#d4af37' }}
                  />
                  <Text type="secondary">Consultores Senior</Text>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section-corporate">
          <div className="section-container">
            <div className="section-header-corporate">
              <Title level={2} className="section-title-corporate">Servicios Ejecutivos</Title>
              <Paragraph className="section-subtitle-corporate">
                Ofrecemos soluciones estratégicas de alto nivel diseñadas para ejecutivos 
                que buscan transformar sus organizaciones en líderes de la industria
              </Paragraph>
            </div>
            
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card className="service-card-corporate" hoverable>
                  <div className="service-image-corporate">
                    <img src={imageConfig.corporate.finance.url} alt="Análisis Financiero" />
                    <div className="service-overlay-corporate">
                      <BankOutlined className="service-icon-corporate" />
                    </div>
                  </div>
                  <Title level={4}>Análisis Financiero Estratégico</Title>
                  <Paragraph>
                    Evaluación integral de la salud financiera y desarrollo de estrategias 
                    para maximizar el valor accionario y la rentabilidad.
                  </Paragraph>
                  <div className="service-features-corporate">
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Análisis de flujos de caja</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Optimización de capital</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Estrategias de inversión</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn-corporate">
                    Conocer Más
                  </Button>
                </Card>
              </Col>
              
              <Col xs={24} md={8}>
                <Card className="service-card-corporate" hoverable>
                  <div className="service-image-corporate">
                    <img src={imageConfig.corporate.project.url} alt="Gestión de Proyectos" />
                    <div className="service-overlay-corporate">
                      <ProjectOutlined className="service-icon-corporate" />
                    </div>
                  </div>
                  <Title level={4}>Gestión de Proyectos Ejecutivos</Title>
                  <Paragraph>
                    Liderazgo y dirección de iniciativas estratégicas críticas que 
                    impulsan el crecimiento y la transformación organizacional.
                  </Paragraph>
                  <div className="service-features-corporate">
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Gestión de portafolio</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Control de riesgos</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Optimización de recursos</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn-corporate">
                    Conocer Más
                  </Button>
                </Card>
              </Col>
              
              <Col xs={24} md={8}>
                <Card className="service-card-corporate" hoverable>
                  <div className="service-image-corporate">
                    <img src={imageConfig.corporate.audit.url} alt="Auditoría Empresarial" />
                    <div className="service-overlay-corporate">
                      <AuditOutlined className="service-icon-corporate" />
                    </div>
                  </div>
                  <Title level={4}>Auditoría Estratégica Corporativa</Title>
                  <Paragraph>
                    Evaluación exhaustiva de procesos, riesgos y oportunidades 
                    para optimizar la eficiencia operacional y el cumplimiento.
                  </Paragraph>
                  <div className="service-features-corporate">
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Auditoría de procesos</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Evaluación de riesgos</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Cumplimiento normativo</Text>
                    </div>
                  </div>
                  <Button type="link" icon={<ArrowRightOutlined />} className="service-btn-corporate">
                    Conocer Más
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section-corporate">
          <div className="section-container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <div className="about-image-container-corporate">
                  <img 
                    src={imageConfig.corporate.executive.url} 
                    alt={imageConfig.corporate.executive.alt} 
                    className="about-image-corporate"
                  />
                  <div className="about-badge-corporate">
                    <CrownOutlined style={{ fontSize: '24px', color: '#d4af37' }} />
                    <Text strong>Líderes en Consultoría Ejecutiva</Text>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="about-content-corporate">
                  <Title level={2}>Sobre PrestigeCorp</Title>
                  <Paragraph className="about-description-corporate">
                    Durante más de 25 años, hemos sido el socio estratégico preferido 
                    de las empresas Fortune 500, proporcionando consultoría ejecutiva 
                    de élite que transforma organizaciones en líderes de la industria.
                  </Paragraph>
                  <div className="features-list-corporate">
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Equipo de consultores senior</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Metodologías probadas de élite</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Resultados medibles y tangibles</Text>
                    </div>
                    <div className="feature-item-corporate">
                      <CheckCircleOutlined className="feature-icon-corporate" />
                      <Text>Soporte ejecutivo continuo</Text>
                    </div>
                  </div>
                  <div className="about-stats-corporate">
                    <div className="about-stat-corporate">
                      <DollarOutlined className="about-stat-icon-corporate" />
                      <div>
                        <Text className="about-stat-number-corporate">$5.2B</Text>
                        <Text className="about-stat-label-corporate">Valor Promedio Creado</Text>
                      </div>
                    </div>
                    <div className="about-stat-corporate">
                      <ClockCircleOutlined className="about-stat-icon-corporate" />
                      <div>
                        <Text className="about-stat-number-corporate">18 meses</Text>
                        <Text className="about-stat-label-corporate">Tiempo Promedio</Text>
                      </div>
                    </div>
                  </div>
                  <Button type="primary" size="large" style={{ marginTop: 24 }} className="primary-btn-corporate">
                    Conocer Nuestro Equipo
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial-section-corporate">
          <div className="section-container">
            <Card className="testimonial-card-corporate">
              <div className="testimonial-content-corporate">
                <div className="testimonial-header-corporate">
                  <Avatar size={80} src={imageConfig.corporate.ceo.url} alt={imageConfig.corporate.ceo.alt} />
                  <div className="testimonial-rating-corporate">
                    <StarFilled style={{ color: '#d4af37' }} />
                    <StarFilled style={{ color: '#d4af37' }} />
                    <StarFilled style={{ color: '#d4af37' }} />
                    <StarFilled style={{ color: '#d4af37' }} />
                    <StarFilled style={{ color: '#d4af37' }} />
                  </div>
                </div>
                <Paragraph className="testimonial-text-corporate">
                  "PrestigeCorp transformó completamente nuestra estrategia corporativa. 
                  Su enfoque ejecutivo y metodología de élite nos permitió 
                  aumentar nuestro valor de mercado en un 300% en solo 18 meses."
                </Paragraph>
                <div className="testimonial-author-corporate">
                  <Title level={4} style={{ margin: 0 }}>Michael Anderson</Title>
                  <Text type="secondary">CEO, GlobalTech Industries</Text>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section-corporate">
          <div className="section-container">
            <Title level={2} className="cta-title-corporate">
              ¿Listo para Liderar su Industria?
            </Title>
            <Paragraph className="cta-subtitle-corporate">
              Únase a las empresas Fortune 500 que ya han experimentado 
              el poder de nuestra consultoría ejecutiva de élite.
            </Paragraph>
            <div className="cta-buttons-corporate">
              <Button type="primary" size="large" icon={<RiseOutlined />} className="primary-btn-corporate">
                Solicitar Consulta Ejecutiva
              </Button>
              <Button size="large" icon={<CustomerServiceOutlined />} className="secondary-btn-corporate">
                Contactar Director
              </Button>
            </div>
          </div>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="footer-corporate">
        <div className="footer-content">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <div className="footer-section-corporate">
                <div className="footer-logo-corporate">
                  <CrownOutlined style={{ fontSize: '24px', color: '#d4af37' }} />
                  <Title level={4} style={{ margin: 0, color: 'white' }}>PrestigeCorp</Title>
                </div>
                <Paragraph>
                  Lideramos la excelencia empresarial. Especialistas en 
                  consultoría ejecutiva de élite y estrategias corporativas.
                </Paragraph>
                <div className="footer-social-corporate">
                  <Button type="text" icon={<StarFilled />} style={{ color: '#d4af37' }} />
                  <Button type="text" icon={<TrophyFilled />} style={{ color: '#d4af37' }} />
                  <Button type="text" icon={<GlobalOutlined />} style={{ color: '#d4af37' }} />
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="footer-section-corporate">
                <Title level={4}>Servicios Ejecutivos</Title>
                <ul className="footer-links-corporate">
                  <li>Análisis Financiero Estratégico</li>
                  <li>Gestión de Proyectos Ejecutivos</li>
                  <li>Auditoría Estratégica Corporativa</li>
                  <li>Consultoría de Liderazgo</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="footer-section-corporate">
                <Title level={4}>Contacto Ejecutivo</Title>
                <Paragraph>
                  <Text>Email: executive@prestigecorp.com</Text><br />
                  <Text>Teléfono: +1 (555) 999-8888</Text><br />
                  <Text>Dirección: Executive Tower 789, Business District</Text>
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Divider style={{ borderColor: '#2c2c2c' }} />
          <div className="footer-bottom-corporate">
            <Text>© 2024 PrestigeCorp. Todos los derechos reservados.</Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default LandingPage3; 