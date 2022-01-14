import React, { useState } from 'react'
import { Modal, Divider, Button } from 'antd'
import FRCButton from '../components/Button/index';
import FRCModal from '../components/Modal/index';

const CheckboxPage = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFrcModalVisible, setIsFrcModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showFrcModal = () => {
    setIsFrcModalVisible(true);
  };

  const handleFrcOk = () => {
    setIsFrcModalVisible(false);
  };

  const handleFrcCancel = () => {
    setIsFrcModalVisible(false);
  };

  return (
    <>
      <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />
      <h3>antd modal</h3>

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />

      <h3>frc modal</h3>

      <FRCButton type="primary" onClick={showFrcModal}>
        Open Frc Modal
      </FRCButton>

      <FRCModal title="退出 qeubee" visible={isFrcModalVisible} onOk={handleFrcOk} onCancel={handleFrcCancel}>
        <p style={{ color: '#FFEBC8', fontSize: 12, fontWeight: 500 }}>即将退出qeubee，<span style={{ color: '#F9C152' }}>是否继续？</span></p>
      </FRCModal>

      <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />
    </>
  )
}

export default CheckboxPage
