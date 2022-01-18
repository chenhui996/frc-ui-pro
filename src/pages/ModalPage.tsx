// import React, { useState } from 'react'
// import { Modal, Divider, Button } from 'antd'
// import FRCButton from '../components/Button/index';
// import FRCModal from '../components/Modal/index';

// const CheckboxPage = () => {

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isFrcModalVisible, setIsFrcModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   // ------------------------------------------------------------

//   const showFrcModal = () => {
//     setIsFrcModalVisible(true);
//   };

//   // const handleFrcOk = () => {
//   //   setIsFrcModalVisible(false);
//   // };

//   // const handleFrcCancel = () => {
//   //   setIsFrcModalVisible(false);
//   // };

//   // ------------------------------------------------------------

//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [modalText, setModalText] = useState('Content of the modal');

//   const handleFrcOk = () => {
//     setModalText('The modal will be closed after two seconds');
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setIsFrcModalVisible(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

//   const handleFrcCancel = () => {
//     console.log('Clicked cancel button');
//     setIsFrcModalVisible(false);
//   };

//   // ------------------------------------------------------------

//   function showConfirm() {
//     FRCModal.confirm({
//       title: 'Do you Want to delete these items?',
//       content: 'Some descriptions',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   function showPromiseConfirm() {
//     FRCModal.confirm({
//       title: 'Do you want to delete these items?',
//       content: 'When clicked the OK button, this dialog will be closed after 1 second',
//       onOk() {
//         return new Promise((resolve, reject) => {
//           setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
//         }).catch(() => console.log('Oops errors!'));
//       },
//       onCancel() { },
//     });
//   }

//   function showDeleteConfirm() {
//     FRCModal.confirm({
//       title: 'Are you sure delete this task?',
//       content: 'Some descriptions',
//       okText: 'Yes',
//       okType: 'danger',
//       cancelText: 'No',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   function showPropsConfirm() {
//     FRCModal.confirm({
//       title: 'Are you sure delete this task?',
//       content: 'Some descriptions',
//       okText: 'Yes',
//       okType: 'danger',
//       okButtonProps: {
//         disabled: true,
//       },
//       cancelButtonProps: {
//         className: 'test',
//         style: { width: 40 },
//         disabled: true
//       },
//       cancelText: 'No',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   // ------------------------------------------------------------

//   function showInfo() {
//     FRCModal.info({
//       title: 'Do you Want to delete these items?',
//       content: 'Some descriptions',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   function showPromiseInfo() {
//     FRCModal.info({
//       title: 'Do you want to delete these items?',
//       content: 'When clicked the OK button, this dialog will be closed after 1 second',
//       onOk() {
//         return new Promise((resolve, reject) => {
//           setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
//         }).catch(() => console.log('Oops errors!'));
//       },
//       onCancel() { },
//     });
//   }

//   function showDeleteInfo() {
//     FRCModal.info({
//       title: 'Are you sure delete this task?',
//       content: 'Some descriptions',
//       okText: 'Yes',
//       okType: 'danger',
//       cancelText: 'No',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   function showPropsInfo() {
//     FRCModal.info({
//       title: 'Are you sure delete this task?',
//       content: 'Some descriptions',
//       okText: 'Yes',
//       okType: 'danger',
//       okButtonProps: {
//         disabled: true,
//       },
//       cancelText: 'No',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   // ------------------------------------------------------------

//   function showWarning() {
//     FRCModal.warning({
//       title: 'Do you Want to delete these items?',
//       content: 'Some descriptions',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   function showPromiseWarning() {
//     FRCModal.warning({
//       title: 'Do you want to delete these items?',
//       content: 'When clicked the OK button, this dialog will be closed after 1 second',
//       onOk() {
//         return new Promise((resolve, reject) => {
//           setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
//         }).catch(() => console.log('Oops errors!'));
//       },
//       onCancel() { },
//     });
//   }

//   function showDeleteWarning() {
//     FRCModal.warning({
//       title: 'Are you sure delete this task?',
//       content: 'Some descriptions',
//       okText: 'Yes',
//       okType: 'danger',
//       cancelText: 'No',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   function showPropsWarning() {
//     FRCModal.warning({
//       title: 'Are you sure delete this task?',
//       content: 'Some descriptions',
//       okText: 'Yes',
//       okType: 'danger',
//       okButtonProps: {
//         disabled: true,
//       },
//       cancelText: 'No',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   // ------------------------------------------------------------

//   function showError() {
//     FRCModal.error({
//       title: 'Do you Want to delete these items?',
//       content: 'Some descriptions',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   function showPromiseError() {
//     FRCModal.error({
//       title: 'Do you want to delete these items?',
//       content: 'When clicked the OK button, this dialog will be closed after 1 second',
//       onOk() {
//         return new Promise((resolve, reject) => {
//           setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
//         }).catch(() => console.log('Oops errors!'));
//       },
//       onCancel() { },
//     });
//   }

//   function showDeleteError() {
//     FRCModal.error({
//       title: 'Are you sure delete this task?',
//       content: 'Some descriptions',
//       okText: 'Yes',
//       okType: 'danger',
//       cancelText: 'No',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   function showPropsError() {
//     FRCModal.error({
//       title: 'Are you sure delete this task?',
//       content: 'Some descriptions',
//       okText: 'Yes',
//       okType: 'danger',
//       okButtonProps: {
//         disabled: true,
//       },
//       cancelText: 'No',
//       onOk() {
//         console.log('OK');
//       },
//       onCancel() {
//         console.log('Cancel');
//       },
//     });
//   }

//   // ------------------------------------------------------------

//   return (
//     <>
//       <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />
//       <h3>antd modal</h3>

//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>

//       <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />

//       <h3>frc modal</h3>

//       {/* <FRCButton type="primary" onClick={showFrcModal}>
//         Open Frc Modal
//       </FRCButton> */}

//       {/* <FRCModal
//         title="退出 qeubee"
//         visible={isFrcModalVisible}
//         onOk={handleFrcOk}
//         onCancel={handleFrcCancel}
//         confirmLoading={confirmLoading}>
//         <p
//           style={{ color: '#FFEBC8', fontSize: 12, fontWeight: 500 }}>
//           即将退出qeubee，
//           <span style={{ color: '#F9C152' }}>
//             是否继续？
//           </span>
//         </p>
//         <p>{modalText}</p>
//       </FRCModal> */}

//       <FRCButton type="primary" onClick={showFrcModal}>
//         Open Modal with async logic
//       </FRCButton>

//       <FRCModal
//         title="Modal with async logic"
//         visible={isFrcModalVisible}
//         onOk={handleFrcOk}
//         onCancel={handleFrcCancel}
//         confirmLoading={confirmLoading}>
//         <p>{modalText}</p>
//       </FRCModal>

//       <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />

//       <h3>frc modal confirm</h3>

//       <FRCButton style={{ marginRight: 16 }} onClick={showConfirm}>Confirm</FRCButton>

//       <FRCButton style={{ marginRight: 16 }} onClick={showPromiseConfirm}>With promise</FRCButton>
//       <FRCButton style={{ marginRight: 16 }} onClick={showDeleteConfirm} type="lead">
//         Delete
//       </FRCButton>
//       <FRCButton style={{ marginRight: 16 }} onClick={showPropsConfirm} type="gray">
//         With extra props
//       </FRCButton>

//       <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />

//       <h3>frc modal info</h3>

//       <FRCButton style={{ marginRight: 16 }} onClick={showInfo}>Info</FRCButton>

//       <FRCButton style={{ marginRight: 16 }} onClick={showPromiseInfo}>With promise</FRCButton>
//       <FRCButton style={{ marginRight: 16 }} onClick={showDeleteInfo} type="lead">
//         Delete
//       </FRCButton>
//       <FRCButton style={{ marginRight: 16 }} onClick={showPropsInfo} type="gray">
//         With extra props
//       </FRCButton>

//       <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />

//       <h3>frc modal warning</h3>

//       <FRCButton style={{ marginRight: 16 }} onClick={showWarning}>Warning</FRCButton>

//       <FRCButton style={{ marginRight: 16 }} onClick={showPromiseWarning}>With promise</FRCButton>
//       <FRCButton style={{ marginRight: 16 }} onClick={showDeleteWarning} type="lead">
//         Delete
//       </FRCButton>
//       <FRCButton style={{ marginRight: 16 }} onClick={showPropsWarning} type="gray">
//         With extra props
//       </FRCButton>

//       <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />

//       <h3>frc modal error</h3>

//       <FRCButton style={{ marginRight: 16 }} onClick={showError}>Error</FRCButton>

//       <FRCButton style={{ marginRight: 16 }} onClick={showPromiseError}>With promise</FRCButton>
//       <FRCButton style={{ marginRight: 16 }} onClick={showDeleteError} type="lead">
//         Delete
//       </FRCButton>
//       <FRCButton style={{ marginRight: 16 }} onClick={showPropsError} type="gray">
//         With extra props
//       </FRCButton>

//       <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />
//     </>
//   )
// }

// export default CheckboxPage

const normal = () => {
  return <>1213</>
}

export default normal
