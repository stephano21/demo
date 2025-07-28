import { useState } from 'react';
import { 
  Layout, 
  Typography, 
  Button, 
  Row, 
  Col, 
  Card, 
  Avatar, 
  Tag, 
  Timeline, 
  Progress, 
  Divider,
  Tabs,
  Image,
  Space,
  Badge,
  Statistic,
  List,
  Rate
} from 'antd';
import { 
  CodeOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  RocketOutlined,
  BulbOutlined,
  TrophyFilled,
  CompassOutlined,
  SettingOutlined,
  DatabaseOutlined,
  CloudOutlined,
  MobileOutlined,
  ApiOutlined,
  BarChartOutlined,
  CustomerServiceOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  SyncOutlined,
  CheckCircleFilled,
 
  DownloadOutlined,
 
} from '@ant-design/icons';
import { imageConfig } from './config/images';
import './Portfolio.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

// Componente para iconos de Python (simulado)
const PythonOutlined = () => <span style={{ fontSize: '16px' }}>🐍</span>;

// Datos del portafolio mejorados
const portfolioData = {
  personal: {
    name: "Carlos Rodríguez",
    title: "Senior Full Stack Developer & Business Consultant",
    subtitle: "Transformando Ideas en Soluciones Digitales",
    location: "Madrid, España",
    email: "carlos.rodriguez@email.com",
    phone: "+34 600 123 456",
    linkedin: "linkedin.com/in/carlosrodriguez",
    github: "github.com/carlosrodriguez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    summary: "Desarrollador senior con más de 8 años de experiencia en tecnologías web modernas y consultoría empresarial. Especializado en arquitecturas escalables, transformación digital y optimización de procesos empresariales.",
    about: "Soy un apasionado desarrollador y consultor que combina habilidades técnicas sólidas con una comprensión profunda de las necesidades empresariales. Mi enfoque se centra en crear soluciones que no solo funcionan técnicamente, sino que también generan valor real para las organizaciones.",
    philosophy: "Creo en la innovación constante, el aprendizaje continuo y la excelencia en cada proyecto. Mi objetivo es transformar desafíos complejos en oportunidades de crecimiento."
  },
  skills: {
    technical: [
      { name: "React/Next.js", level: 95, icon: <CodeOutlined />, color: "#1890ff" },
      { name: "Node.js/Express", level: 90, icon: <ApiOutlined />, color: "#52c41a" },
      { name: "Python/Django", level: 85, icon: <PythonOutlined />, color: "#722ed1" },
      { name: "PostgreSQL/MongoDB", level: 88, icon: <DatabaseOutlined />, color: "#fa8c16" },
      { name: "AWS/Docker", level: 82, icon: <CloudOutlined />, color: "#eb2f96" },
      { name: "TypeScript", level: 92, icon: <CodeOutlined />, color: "#13c2c2" },
      { name: "React Native", level: 85, icon: <MobileOutlined />, color: "#f5222d" },
      { name: "Vue.js", level: 80, icon: <CodeOutlined />, color: "#fa541c" }
    ],
    business: [
      { name: "Análisis de Negocio", level: 90, icon: <BarChartOutlined />, color: "#1890ff" },
      { name: "Gestión de Proyectos", level: 85, icon: <ProjectOutlined />, color: "#52c41a" },
      { name: "Estrategia Digital", level: 88, icon: <CompassOutlined />, color: "#722ed1" },
      { name: "Optimización de Procesos", level: 87, icon: <SettingOutlined />, color: "#fa8c16" },
      { name: "Liderazgo de Equipos", level: 83, icon: <TeamOutlined />, color: "#eb2f96" },
      { name: "Consultoría Empresarial", level: 85, icon: <CustomerServiceOutlined />, color: "#13c2c2" }
    ],
    soft: [
      { name: "Comunicación", level: 92, icon: <CustomerServiceOutlined />, color: "#1890ff" },
      { name: "Resolución de Problemas", level: 88, icon: <BulbOutlined />, color: "#52c41a" },
      { name: "Trabajo en Equipo", level: 90, icon: <TeamOutlined />, color: "#722ed1" },
      { name: "Adaptabilidad", level: 85, icon: <SyncOutlined />, color: "#fa8c16" },
      { name: "Creatividad", level: 87, icon: <ExperimentOutlined />, color: "#eb2f96" }
    ]
  },
  experience: [
    {
      period: "2022 - Presente",
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer & Tech Lead",
      description: "Lideré el desarrollo de aplicaciones empresariales escalables utilizando tecnologías modernas. Implementé mejoras que aumentaron la eficiencia en un 40% y redujeron costos operativos en un 30%.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      achievements: [
        "Reducción del 40% en tiempo de carga de aplicaciones",
        "Implementación de CI/CD que aceleró el deployment en un 60%",
        "Mentoría a 5 desarrolladores junior",
        "Optimización de costos de infraestructura en un 30%"
      ],
      impact: "Transformé la arquitectura técnica de la empresa, implementando mejores prácticas que resultaron en mayor escalabilidad y eficiencia operacional."
    },
    {
      period: "2020 - 2022",
      company: "Digital Innovations",
      position: "Full Stack Developer",
      description: "Desarrollé aplicaciones web completas y APIs RESTful. Colaboré en proyectos de transformación digital para clientes corporativos, implementando soluciones innovadoras.",
      technologies: ["React", "Python", "Django", "MongoDB", "Redis", "Elasticsearch"],
      achievements: [
        "Desarrollo de 3 aplicaciones principales con más de 10,000 usuarios",
        "Optimización de rendimiento que mejoró la velocidad en un 50%",
        "Integración exitosa con sistemas legacy",
        "Implementación de análisis de datos en tiempo real"
      ],
      impact: "Contribuí significativamente al crecimiento de la empresa, desarrollando soluciones que generaron un ROI del 300%."
    },
    {
      period: "2018 - 2020",
      company: "StartUp Ventures",
      position: "Frontend Developer",
      description: "Especializado en interfaces de usuario modernas y experiencias de usuario optimizadas. Trabajé en productos SaaS innovadores que revolucionaron sus respectivos mercados.",
      technologies: ["React", "TypeScript", "Sass", "Figma", "Storybook", "Jest"],
      achievements: [
        "Mejora del 60% en métricas de experiencia de usuario",
        "Implementación de PWA que aumentó engagement en un 45%",
        "Reducción del 30% en bugs mediante testing automatizado",
        "Diseño de sistema de componentes reutilizables"
      ],
      impact: "Ayudé a la startup a escalar de 0 a 50,000 usuarios en 18 meses, estableciendo las bases para su éxito posterior."
    }
  ],
  projects: [
    {
      title: "Sistema de Gestión Empresarial",
      subtitle: "ERP Integral para Corporaciones",
      description: "Plataforma integral para gestión de recursos empresariales con módulos de finanzas, RRHH y operaciones. Implementado en más de 50 empresas.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      link: "#",
      status: "Completado",
      category: "Enterprise",
      impact: "Reducción del 35% en costos operativos",
      features: ["Dashboard ejecutivo", "Módulo financiero", "Gestión de RRHH", "Reportes avanzados"],
      metrics: { users: "10,000+", companies: "50+", efficiency: "35%" }
    },
    {
      title: "E-commerce B2B",
      subtitle: "Plataforma de Comercio Corporativo",
      description: "Plataforma de comercio electrónico para empresas con gestión de inventarios y análisis avanzado. Procesa más de €5M en transacciones mensuales.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "Elasticsearch"],
      link: "#",
      status: "En Desarrollo",
      category: "E-commerce",
      impact: "Aumento del 200% en ventas",
      features: ["Catálogo dinámico", "Gestión de inventarios", "Analytics avanzado", "Integración con ERP"],
      metrics: { transactions: "€5M/mes", users: "2,500+", growth: "200%" }
    },
    {
      title: "App de Gestión de Proyectos",
      subtitle: "Colaboración en Tiempo Real",
      description: "Aplicación móvil y web para gestión de proyectos con colaboración en tiempo real. Utilizada por más de 1,000 equipos.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Socket.io", "Redux"],
      link: "#",
      status: "Completado",
      category: "Productivity",
      impact: "Mejora del 40% en productividad",
      features: ["Chat en tiempo real", "Gestión de tareas", "Tracking de tiempo", "Reportes"],
      metrics: { teams: "1,000+", productivity: "40%", rating: "4.8/5" }
    },
    {
      title: "Dashboard Analítico",
      subtitle: "Inteligencia de Negocio",
      description: "Panel de control ejecutivo con métricas en tiempo real y reportes personalizables. Procesa más de 1M de datos diarios.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "Elasticsearch", "Kafka"],
      link: "#",
      status: "Completado",
      category: "Analytics",
      impact: "Reducción del 50% en tiempo de análisis",
      features: ["Visualizaciones interactivas", "Alertas inteligentes", "Machine Learning", "APIs personalizadas"],
      metrics: { dataPoints: "1M/día", users: "500+", accuracy: "99.9%" }
    },
    {
      title: "Sistema de IA para Retail",
      subtitle: "Predicción de Demanda",
      description: "Sistema de inteligencia artificial para predicción de demanda y optimización de inventarios en retail.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      link: "#",
      status: "En Desarrollo",
      category: "AI/ML",
      impact: "Reducción del 25% en inventarios",
      features: ["Predicción de demanda", "Optimización de precios", "Análisis de tendencias", "Alertas automáticas"],
      metrics: { accuracy: "92%", savings: "25%", stores: "100+" }
    },
    {
      title: "Plataforma de Educación Online",
      subtitle: "Learning Management System",
      description: "Plataforma completa de educación online con cursos interactivos, evaluaciones y certificaciones.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
      link: "#",
      status: "Completado",
      category: "Education",
      impact: "Más de 50,000 estudiantes",
      features: ["Cursos interactivos", "Evaluaciones automáticas", "Certificaciones", "Analytics de aprendizaje"],
      metrics: { students: "50,000+", courses: "200+", completion: "85%" }
    }
  ],
  education: [
    {
      degree: "Máster en Ingeniería de Software",
      institution: "Universidad Politécnica de Madrid",
      period: "2018 - 2020",
      description: "Especialización en arquitecturas de software, metodologías ágiles y gestión de proyectos tecnológicos.",
      gpa: "9.2/10",
      highlights: ["Tesis sobre arquitecturas microservicios", "Proyecto final con Google", "Beca de excelencia"]
    },
    {
      degree: "Ingeniería Informática",
      institution: "Universidad Complutense de Madrid",
      period: "2014 - 2018",
      description: "Formación integral en desarrollo de software, sistemas informáticos y fundamentos de computación.",
      gpa: "8.8/10",
      highlights: ["Especialización en desarrollo web", "Proyectos de investigación", "Liderazgo en asociación estudiantil"]
    }
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect", year: "2023", issuer: "Amazon Web Services", level: "Professional" },
    { name: "Google Cloud Professional Developer", year: "2022", issuer: "Google Cloud", level: "Professional" },
    { name: "Scrum Master Certified", year: "2021", issuer: "Scrum Alliance", level: "Advanced" },
    { name: "MongoDB Certified Developer", year: "2020", issuer: "MongoDB University", level: "Associate" },
    { name: "Microsoft Azure Developer", year: "2023", issuer: "Microsoft", level: "Associate" },
    { name: "Kubernetes Administrator", year: "2022", issuer: "Cloud Native Computing Foundation", level: "Professional" }
  ],
  achievements: [
    {
      title: "Premio al Mejor Desarrollador",
      organization: "TechCorp Solutions",
      year: "2023",
      description: "Reconocimiento por excelencia técnica y liderazgo en proyectos críticos."
    },
    {
      title: "Speaker en ReactConf",
      organization: "React Community",
      year: "2022",
      description: "Presentación sobre arquitecturas escalables en React con más de 500 asistentes."
    },
    {
      title: "Contribuidor Open Source",
      organization: "GitHub",
      year: "2021",
      description: "Más de 50 contribuciones a proyectos populares con más de 1,000 stars."
    }
  ],
  testimonials: [
    {
      name: "María García",
      position: "CTO, TechCorp Solutions",
      content: "Carlos transformó completamente nuestra arquitectura técnica. Su liderazgo y expertise fueron fundamentales para nuestro éxito.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    {
      name: "David López",
      position: "CEO, Digital Innovations",
      content: "Excelente desarrollador y consultor. Sus soluciones siempre van más allá de lo técnico, considerando el impacto empresarial.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Ana Martínez",
      position: "Product Manager, StartUp Ventures",
      content: "Carlos no solo es un gran desarrollador, sino también un excelente comunicador y mentor. Su impacto en nuestro equipo fue invaluable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ]
};

function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <Layout className="portfolio-layout">
      {/* Header */}
      <Header className="portfolio-header">
        <div className="header-content">
          <div className="logo">
            <Avatar size={40} src={imageConfig.logo.url} alt={imageConfig.logo.alt} />
            <Title level={4} style={{ margin: 0, color: 'white' }}>Portfolio</Title>
          </div>
          <div className="nav-buttons">
            <Button type="text" style={{ color: 'white' }} onClick={() => setActiveTab('about')}>Sobre Mí</Button>
            <Button type="text" style={{ color: 'white' }} onClick={() => setActiveTab('experience')}>Experiencia</Button>
            <Button type="text" style={{ color: 'white' }} onClick={() => setActiveTab('projects')}>Proyectos</Button>
            <Button type="text" style={{ color: 'white' }} onClick={() => setActiveTab('skills')}>Habilidades</Button>
            <Button type="primary" icon={<DownloadOutlined />}>Descargar CV</Button>
          </div>
        </div>
      </Header>

      <Content className="portfolio-content">
        {/* Hero Section */}
        <div className="portfolio-hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <div className="hero-text">
                    <div className="hero-badge">
                      <Tag color="#1890ff" style={{ fontSize: '14px', fontWeight: 600 }}>
                        <RocketOutlined /> Disponible para Proyectos
                      </Tag>
                    </div>
                    <Title level={1} className="hero-title">
                      {portfolioData.personal.name}
                    </Title>
                    <Title level={3} className="hero-subtitle">
                      {portfolioData.personal.title}
                    </Title>
                    <Paragraph className="hero-description">
                      {portfolioData.personal.summary}
                    </Paragraph>
                    <div className="hero-actions">
                      <Button type="primary" size="large" icon={<MailOutlined />}>
                        Contactar
                      </Button>
                      <Button size="large" icon={<DownloadOutlined />}>
                        Descargar CV
                      </Button>
                    </div>
                    <div className="hero-stats">
                      <Row gutter={[24, 16]}>
                        <Col xs={12} sm={8}>
                          <div className="stat-item">
                            <Title level={2} style={{ margin: 0, color: '#1890ff' }}>8+</Title>
                            <Text>Años Experiencia</Text>
                          </div>
                        </Col>
                        <Col xs={12} sm={8}>
                          <div className="stat-item">
                            <Title level={3} style={{ margin: 0, color: '#52c41a' }}>50+</Title>
                            <Text>Proyectos</Text>
                          </div>
                        </Col>
                        <Col xs={12} sm={8}>
                          <div className="stat-item">
                            <Title level={3} style={{ margin: 0, color: '#722ed1' }}>15+</Title>
                            <Text>Tecnologías</Text>
                          </div>
                        </Col>
                        <Col xs={12} sm={8}>
                          <div className="stat-item">
                            <Title level={4} style={{ margin: 0, color: '#fa8c16' }}>100%</Title>
                            <Text>Satisfacción</Text>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="hero-profile">
                    <Avatar size={200} src={portfolioData.personal.avatar} />
                    <div className="contact-info">
                      <Space direction="vertical" size="small">
                        <div className="contact-item">
                          <MailOutlined /> {portfolioData.personal.email}
                        </div>
                        <div className="contact-item">
                          <PhoneOutlined /> {portfolioData.personal.phone}
                        </div>
                        <div className="contact-item">
                          <EnvironmentOutlined /> {portfolioData.personal.location}
                        </div>
                      </Space>
                      <div className="social-links">
                        <Button type="text" icon={<LinkedinOutlined />} style={{ color: 'white' }} />
                        <Button type="text" icon={<GithubOutlined />} style={{ color: 'white' }} />
                        <Button type="text" icon={<MailOutlined />} style={{ color: 'white' }} />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Tabs activeKey={activeTab} onChange={setActiveTab} className="portfolio-tabs">
            
            {/* About Tab */}
            <TabPane tab="Sobre Mí" key="about">
              <div className="tab-content">
                <Row gutter={[32, 32]}>
                  <Col xs={24} lg={16}>
                    <Card title="Biografía Profesional" className="content-card">
                      <Paragraph className="about-text">
                        {portfolioData.personal.about}
                      </Paragraph>
                      <Paragraph className="about-text">
                        {portfolioData.personal.philosophy}
                      </Paragraph>
                      <div className="key-achievements">
                        <Title level={4}>Logros Destacados</Title>
                        <List
                          dataSource={[
                            "Lideré equipos de hasta 8 desarrolladores en proyectos críticos",
                            "Implementé mejoras que aumentaron la eficiencia operacional en un 40%",
                            "Reduje los costos de infraestructura en un 30% mediante optimizaciones",
                            "Mentoré a más de 15 desarrolladores junior",
                            "Contribuí a proyectos open source con más de 1,000 stars",
                            "Presenté en conferencias técnicas con más de 500 asistentes"
                          ]}
                          renderItem={(item) => (
                            <List.Item>
                              <CheckCircleFilled style={{ color: '#52c41a', marginRight: 8 }} />
                              {item}
                            </List.Item>
                          )}
                        />
                      </div>
                    </Card>

                    <Card title="Testimonios" className="content-card" style={{ marginTop: 24 }}>
                      <div className="testimonials-grid">
                        {portfolioData.testimonials.map((testimonial, index) => (
                          <Card className="testimonial-card" key={index}>
                            <div className="testimonial-header">
                              <Avatar size={50} src={testimonial.avatar} />
                              <div className="testimonial-info">
                                <Title level={5} style={{ margin: 0 }}>{testimonial.name}</Title>
                                <Text type="secondary">{testimonial.position}</Text>
                              </div>
                            </div>
                            <Paragraph 
                              className="testimonial-content"
                            >
                              "{testimonial.content}"
                            </Paragraph>
                            <Rate disabled defaultValue={testimonial.rating} />
                          </Card>
                        ))}
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} lg={8}>
                    <Card title="Educación" className="content-card">
                      <Timeline>
                        {portfolioData.education.map((edu, index) => (
                          <Timeline.Item key={index}>
                            <Title level={5}>{edu.degree}</Title>
                            <Text strong>{edu.institution}</Text>
                            <br />
                            <Text type="secondary">{edu.period}</Text>
                            <Paragraph style={{ marginTop: 8 }}>{edu.description}</Paragraph>
                            <div className="education-highlights">
                              <Text strong>GPA: {edu.gpa}</Text>
                              <ul>
                                {edu.highlights.map((highlight, hIndex) => (
                                  <li key={hIndex}>{highlight}</li>
                                ))}
                              </ul>
                            </div>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Card>
                    
                    <Card title="Certificaciones" className="content-card" style={{ marginTop: 16 }}>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        {portfolioData.certifications.map((cert, index) => (
                          <div key={index} className="certification-item">
                            <Badge status="success" />
                            <div className="certification-info">
                              <Text strong>{cert.name}</Text>
                              <Text type="secondary">{cert.issuer} • {cert.level}</Text>
                              <Text type="secondary">({cert.year})</Text>
                            </div>
                          </div>
                        ))}
                      </Space>
                    </Card>

                    <Card title="Reconocimientos" className="content-card" style={{ marginTop: 16 }}>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        {portfolioData.achievements.map((achievement, index) => (
                          <div key={index} className="achievement-item">
                            <TrophyFilled style={{ color: '#faad14', fontSize: '18px' }} />
                            <div className="achievement-info">
                              <Text strong>{achievement.title}</Text>
                              <Text type="secondary">{achievement.organization} • {achievement.year}</Text>
                              <Paragraph style={{ margin: '4px 0 0 0', fontSize: '12px' }}>
                                {achievement.description}
                              </Paragraph>
                            </div>
                          </div>
                        ))}
                      </Space>
                    </Card>
                  </Col>
                </Row>
              </div>
            </TabPane>

            {/* Experience Tab */}
            <TabPane tab="Experiencia" key="experience">
              <div className="tab-content">
                <Card title="Experiencia Profesional" className="content-card">
                  <Timeline mode="left">
                    {portfolioData.experience.map((exp, index) => (
                      <Timeline.Item 
                        key={index}
                        label={
                          <div className="timeline-label">
                            <Text strong>{exp.period}</Text>
                            <br />
                            <Text type="secondary">{exp.company}</Text>
                          </div>
                        }
                      >
                        <Card className="experience-card">
                          <div className="experience-header">
                            <Title level={4}>{exp.position}</Title>
                            <Tag color="blue">{exp.period}</Tag>
                          </div>
                          <Paragraph className="experience-description">{exp.description}</Paragraph>
                          <div className="experience-impact">
                            <Text strong>Impacto: </Text>
                            <Text>{exp.impact}</Text>
                          </div>
                          <div className="technologies">
                            {exp.technologies.map((tech, techIndex) => (
                              <Tag key={techIndex} color="blue">{tech}</Tag>
                            ))}
                          </div>
                          <div className="achievements">
                            <Title level={5}>Logros Principales:</Title>
                            <List
                              dataSource={exp.achievements}
                              renderItem={(achievement) => (
                                <List.Item>
                                  <CheckCircleFilled style={{ color: '#52c41a', marginRight: 8 }} />
                                  {achievement}
                                </List.Item>
                              )}
                            />
                          </div>
                        </Card>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </Card>
              </div>
            </TabPane>

            {/* Projects Tab */}
            <TabPane tab="Proyectos" key="projects">
              <div className="tab-content">
                <Row gutter={[24, 24]}>
                  {portfolioData.projects.map((project, index) => (
                    <Col xs={24} md={12} lg={8} key={index}>
                      <Card 
                        hoverable 
                        className="project-card"
                        cover={
                          <div className="project-cover">
                            <Image
                              alt={project.title}
                              src={project.image}
                              height={200}
                              style={{ objectFit: 'cover' }}
                            />
                            <div className="project-overlay">
                              <Tag color={project.status === 'Completado' ? 'green' : 'orange'}>
                                {project.status}
                              </Tag>
                              <Tag color="blue">{project.category}</Tag>
                            </div>
                          </div>
                        }
                        actions={[
                          <Button type="link" icon={<ArrowRightOutlined />}>
                            Ver Proyecto
                          </Button>
                        ]}
                      >
                        <Card.Meta
                          title={
                            <div className="project-title">
                              <Title level={4}>{project.title}</Title>
                              <Text type="secondary">{project.subtitle}</Text>
                            </div>
                          }
                          description={project.description}
                        />
                        <div className="project-impact">
                          <Text strong>Impacto: </Text>
                          <Text>{project.impact}</Text>
                        </div>
                        <div className="project-metrics">
                          <Row gutter={[8, 8]}>
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <Col span={8} key={key}>
                                <Statistic 
                                  title={key.charAt(0).toUpperCase() + key.slice(1)} 
                                  value={value} 
                                />
                              </Col>
                            ))}
                          </Row>
                        </div>
                        <div className="project-features">
                          <Text strong>Características:</Text>
                          <div className="features-list">
                            {project.features.map((feature, fIndex) => (
                              <Tag key={fIndex} color="cyan">{feature}</Tag>
                            ))}
                          </div>
                        </div>
                        <div className="project-technologies" style={{ marginTop: 16 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <Tag key={techIndex} color="blue">{tech}</Tag>
                          ))}
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </TabPane>

            {/* Skills Tab */}
            <TabPane tab="Habilidades" key="skills">
              <div className="tab-content">
                <Row gutter={[32, 32]}>
                  <Col xs={24} lg={12}>
                    <Card title="Habilidades Técnicas" className="content-card">
                      <Space direction="vertical" style={{ width: '100%' }} size="large">
                        {portfolioData.skills.technical.map((skill, index) => (
                          <div key={index} className="skill-item">
                            <div className="skill-header">
                              <div className="skill-info">
                                <span className="skill-icon">{skill.icon}</span>
                                <Text strong>{skill.name}</Text>
                              </div>
                              <Text>{skill.level}%</Text>
                            </div>
                            <Progress 
                              percent={skill.level} 
                              strokeColor={skill.color}
                              showInfo={false}
                              strokeWidth={8}
                            />
                          </div>
                        ))}
                      </Space>
                    </Card>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Card title="Habilidades de Negocio" className="content-card">
                      <Space direction="vertical" style={{ width: '100%' }} size="large">
                        {portfolioData.skills.business.map((skill, index) => (
                          <div key={index} className="skill-item">
                            <div className="skill-header">
                              <div className="skill-info">
                                <span className="skill-icon">{skill.icon}</span>
                                <Text strong>{skill.name}</Text>
                              </div>
                              <Text>{skill.level}%</Text>
                            </div>
                            <Progress 
                              percent={skill.level} 
                              strokeColor={skill.color}
                              showInfo={false}
                              strokeWidth={8}
                            />
                          </div>
                        ))}
                      </Space>
                    </Card>
                  </Col>
                  <Col xs={24}>
                    <Card title="Habilidades Blandas" className="content-card">
                      <Row gutter={[24, 24]}>
                        {portfolioData.skills.soft.map((skill, index) => (
                          <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            <div className="soft-skill-item">
                              <div className="soft-skill-icon">
                                {skill.icon}
                              </div>
                              <Text strong>{skill.name}</Text>
                              <Progress 
                                percent={skill.level} 
                                strokeColor={skill.color}
                                showInfo={false}
                                strokeWidth={6}
                              />
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="portfolio-footer">
        <div className="footer-content">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <div className="footer-section">
                <Title level={4}>Contacto</Title>
                <Paragraph>
                  <Text>Email: {portfolioData.personal.email}</Text><br />
                  <Text>Teléfono: {portfolioData.personal.phone}</Text><br />
                  <Text>Ubicación: {portfolioData.personal.location}</Text>
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="footer-section">
                <Title level={4}>Redes Sociales</Title>
                <Space direction="vertical">
                  <Button type="link" icon={<LinkedinOutlined />}>
                    LinkedIn
                  </Button>
                  <Button type="link" icon={<GithubOutlined />}>
                    GitHub
                  </Button>
                </Space>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="footer-section">
                <Title level={4}>Disponibilidad</Title>
                <Paragraph>
                  <Text>Estado: Disponible para nuevos proyectos</Text><br />
                  <Text>Tipo: Remoto / Presencial</Text><br />
                  <Text>Respuesta: 24-48 horas</Text>
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Divider />
          <div className="footer-bottom">
            <Text>© 2024 {portfolioData.personal.name}. Todos los derechos reservados.</Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default Portfolio; 