import React from "react";
import { Card, Button, Cascader, DatePicker, Form, Input } from "antd";
import { Flex } from "antd";
import "./styles.css";

const App = () => {
  const [componentSize, setComponentSize] = React.useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Flex justify="center">
      <Card
        title="Create Configuration"
        bordered={false}
        headStyle={{
          backgroundColor: "#00008B",
          color: "#fff"
        }}
        style={{
          width: 300,
          border: "2px solid #00008B",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        <Form
          labelCol={{
            span: 13
          }}
          wrapperCol={{
            span: 14
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Configuration Name">
            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
          </Form.Item>
          <Form.Item label="Display Name">
            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
          </Form.Item>
          <Form.Item label="Description">
            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
          </Form.Item>
          <Form.Item label="Datatype">
            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
          </Form.Item>

          <Form.Item label="Category">
            <Cascader
              options={[
                {
                  value: "zhejiang",
                  label: "Project Configuration"
                }
              ]}
              style={{ borderColor: "#00008B" }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
            <Button type="primary" style={{ backgroundColor: "#00008B" }}>
              Save
            </Button>
            <Button
              type="primary"
              style={{ backgroundColor: "#00008B", marginRight: 10 }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              style={{ backgroundColor: "#00008B", marginRight: 10 }}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default App;
