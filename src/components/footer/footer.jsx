import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CustomFooter = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '1rem 0' }}>
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h5>Site Haritası</h5>
            <Nav className="flex-column">
              <NavLink href="/" style={{ color: '#fff' }}>Anasayfa</NavLink>
              <NavLink href="/hakkinda" style={{ color: '#fff' }}>Hakkında</NavLink>
              <NavLink href="/iletisim" style={{ color: '#fff' }}>İletişim</NavLink>
            </Nav>
          </Col>

          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Sosyal Medya</h5>
            <Nav className="justify-content-center">
              <NavLink href="https://www.facebook.com/Besiktas" target="_blank" style={{ color: '#fff' }}>Facebook</NavLink>
              <NavLink href="https://www.twitter.com/Besiktas" target="_blank" style={{ color: '#fff' }}>Twitter</NavLink>
              <NavLink href="https://www.instagram.com/Besiktas" target="_blank" style={{ color: '#fff' }}>Instagram</NavLink>
            </Nav>
          </Col>

          <Col md={4} className="text-center text-md-right">
            <p>&copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
