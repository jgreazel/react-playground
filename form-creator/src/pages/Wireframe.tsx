import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

type Props = {
  children: any;
};

const Wireframe = (props: Props) => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/track">Track</Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/eventCalling">Event Calling</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content>{props.children}</Content>

      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default Wireframe;
