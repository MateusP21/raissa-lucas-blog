import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Container from '../Container';
import './Layout.css';

export default ({ children, title }) => (
  <div>

    <Header title={title} />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Sobre mim"
            profilePhoto="https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/75553053_275098066810447_5079229355041751040_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeEA-xV7_NvfHTsrXlXT4PKmSIIUUSa-03lIghRRJr7TeSjCow1UCARIoTNWQWpsO8Dq_ax3vW2cc1AUhOjqrl3F&_nc_ohc=4VBC_s5xYOwAX_Sr-Qp&_nc_ht=scontent.fsdu12-1.fna&oh=8a796e5b1bef01a774ade70fa2b835e1&oe=5EFF1205"
            description="Sou um desenvolvedor apaixonado por JavaScript e amo desenvolver produtos que melhoram a vida das pessoas."
          />
          <Sidebar
            title="Sobre o blog"
            description="Aqui você encontará muito conteúdo de FrontEnd e CSS, além de umas dicas senasacionais de carreira!"
          />
        </aside>
      </Container>
    </main>
  </div>
);