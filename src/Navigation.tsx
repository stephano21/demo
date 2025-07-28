import { Button, Space } from 'antd';
import { HomeOutlined, UserOutlined, ThunderboltOutlined, CrownOutlined } from '@ant-design/icons';

interface NavigationProps {
  currentPage: 'landing' | 'landing2' | 'landing3' | 'portfolio';
  onPageChange: (page: 'landing' | 'landing2' | 'landing3' | 'portfolio') => void;
}

function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      zIndex: 1001,
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <Space direction="vertical" size="small">
        <Button
          type={currentPage === 'landing' ? 'primary' : 'default'}
          icon={<HomeOutlined />}
          onClick={() => onPageChange('landing')}
          size="small"
        >
          Landing 1
        </Button>
        <Button
          type={currentPage === 'landing2' ? 'primary' : 'default'}
          icon={<ThunderboltOutlined />}
          onClick={() => onPageChange('landing2')}
          size="small"
        >
          Landing 2
        </Button>
        <Button
          type={currentPage === 'landing3' ? 'primary' : 'default'}
          icon={<CrownOutlined />}
          onClick={() => onPageChange('landing3')}
          size="small"
        >
          Landing 3
        </Button>
        <Button
          type={currentPage === 'portfolio' ? 'primary' : 'default'}
          icon={<UserOutlined />}
          onClick={() => onPageChange('portfolio')}
          size="small"
        >
          Portfolio
        </Button>
      </Space>
    </div>
  );
}

export default Navigation; 